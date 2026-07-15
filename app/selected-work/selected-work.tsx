import Image from "next/image";
import s from "./selected-work.module.css";

type Work = {
  description: string;
  image: string;
  links: readonly {
    label: string;
    url: string;
  }[];
  title: string;
  type: string;
  url: string;
};

const selectedWork: readonly Work[] = [
  {
    description:
      "Исследую тему, проектирую программу, записываю курс и создаю методические материалы.",
    image: "/rtk-query-course-cover.png",
    links: [
      {
        label: "Смотреть курс",
        url: "https://youtu.be/5qtCsfMytuk?si=YXT7klLij9eOLKyJ",
      },
      {
        label: "Методические материалы",
        url: "https://it-incubator.io/react/ru/react-middle-senior-tutorials/rtk-query-musicfun-free-course/1-application-setup-queries-mutations?s=C248EC",
      },
    ],
    title: "RTK Query: полный курс",
    type: "Видеокурс",
    url: "https://youtu.be/5qtCsfMytuk?si=YXT7klLij9eOLKyJ",
  },
  {
    description:
      "Более шести лет веду занятия через вопросы, реальные сценарии, практику и живую обратную связь.",
    image: "/teaching-video-cover-v2.png",
    links: [
      {
        label: "Смотреть фрагмент занятия",
        url: "https://youtu.be/4YF06mvcJ4k",
      },
    ],
    title: "Преподавание: фрагмент занятия",
    type: "Занятие с группой",
    url: "https://youtu.be/4YF06mvcJ4k",
  },
  {
    description:
      "Автор руководства по декомпозиции, структуре компонентов, типам, форматированию и code review.",
    image: "/manual/manual-react-style-guide.png",
    links: [
      {
        label: "Открыть руководство",
        url: "https://code-style.it-incubator.io/react",
      },
    ],
    title: "React Style Guide",
    type: "Методическое пособие",
    url: "https://code-style.it-incubator.io/react",
  },
  {
    description:
      "Собираю визуальные материалы, которые помогают увидеть связи между технологиями и удержать структуру темы.",
    image: "/presentation/presentation-front-roadmap-cover.png",
    links: [
      {
        label: "Открыть презентацию",
        url: "https://presentation-frontend-roadmap.vercel.app/",
      },
    ],
    title: "Front-end roadmap",
    type: "Интерактивная презентация",
    url: "https://presentation-frontend-roadmap.vercel.app/",
  },
];

export default function SelectedWork() {
  return (
    <section className={s.work} id="work">
      <div className={s.intro}>
        <h2>Работы, с которых стоит начать</h2>
        <p>
          Четыре открытых артефакта, по которым можно быстро оценить мой подход
          к техническому обучению.
        </p>
      </div>

      <div className={s.grid}>
        {selectedWork.map((item) => (
          <article className={s.item} key={item.title}>
            <a
              aria-label={`Открыть «${item.title}»`}
              className={s.coverLink}
              href={item.url}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={`Обложка работы «${item.title}»`}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                src={item.image}
              />
              <span aria-hidden="true" className={s.coverAction}>
                Открыть ↗
              </span>
            </a>

            <div className={s.content}>
              <p className={s.type}>{item.type}</p>
              <h3>{item.title}</h3>
              <p className={s.description}>{item.description}</p>
              <ul className={s.links}>
                {item.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} rel="noreferrer" target="_blank">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <aside className={s.platformNote}>
        <p>
          <strong>Экзамены и домашние задания.</strong> Проходят на учебной
          платформе. Для просмотра и прохождения нужна регистрация; домашние
          задания доступны в платных программах.
        </p>
        <a
          href="https://it-incubator.io/react/ru/react-samurai-way/exams/free-course/exam?level=1&s=C248EC"
          rel="noreferrer"
          target="_blank"
        >
          Открыть пример экзамена <span aria-hidden="true">↗</span>
        </a>
      </aside>
    </section>
  );
}
