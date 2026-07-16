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

type AdditionalMaterial = {
  description: string;
  image: string;
  title: string;
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
];

const additionalMaterialGroups: readonly {
  items: readonly AdditionalMaterial[];
  title: string;
}[] = [
  {
    items: [
      {
        description:
          "Плейлист о настройке Git, SSH-ключах и практиках, с которых начинается уверенная работа разработчика в команде.",
        image: "/git-course-cover.jpg",
        title: "Git: введение и базовый рабочий процесс",
        url: "https://youtu.be/BMo29Gkx8K0?si=6yh2OJcZP3vrtkw7",
      },
      {
        description:
          "Курс о переиспользуемых компонентах, Portal, Radix UI и Storybook — от API до изолированной разработки.",
        image: "/modal-createportal-radix-ui-storybook-cover.png",
        title: "Современная разработка компонентов",
        url: "https://it-incubator.io/react/ru/react-middle-senior-tutorials/modal-createportal-radix-ui-storybook?s=C248EC",
      },
      {
        description:
          "Практический пятидневный интенсив по React: от структуры приложения и роутинга до запросов к серверу, хуков и динамических страниц.",
        image: "/video/video-rick-morty-cover.jpg",
        title: "Пятидневный интенсив по React JS",
        url: "https://it-incubator.io/react/ru/reactjs-crash-course?s=C248EC",
      },
    ],
    title: "Видеокурсы",
  },
  {
    items: [
      {
        description:
          "Видео-кейс о различиях HTTP, polling, SSE и WebSocket: техническая систематизация и motion design.",
        image: "/presentation/presentation-realtime-cover.png",
        title: "Real-Time: HTTP, Polling, SSE и WebSocket",
        url: "https://youtu.be/pO7CYYoHO6o",
      },
      {
        description:
          "Ключевые изменения Zod 4, их практический смысл и примеры кода после перехода на новую версию.",
        image: "/presentation/presentation-zod4-cover.png",
        title: "Что нового в Zod 4",
        url: "https://presentation-zod-4.vercel.app/",
      },
      {
        description:
          "Практический разбор использования AI для обучения, исследования тем и ежедневной технической работы.",
        image: "/presentation/presentation-ai-for study-cover.png",
        title: "Как использовать AI для обучения и работы",
        url: "https://presentation-ai-for-study-and-work.vercel.app/",
      },
    ],
    title: "Презентации и видео-кейсы",
  },
];

export default function SelectedWork() {
  return (
    <section className={s.work} id="work">
      <div className={s.intro}>
        <h2>Работы и материалы</h2>
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

      <div className={s.additional}>
        <h3>Ещё материалы</h3>
        <div className={s.materialGroups}>
          {additionalMaterialGroups.map((group) => (
            <section className={s.materialGroup} key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item.title}>
                    <a
                      aria-label={`Открыть «${item.title}»`}
                      className={s.materialCover}
                      href={item.url}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt={`Обложка материала «${item.title}»`}
                        fill
                        sizes="(max-width: 520px) 112px, 136px"
                        src={item.image}
                      />
                    </a>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                    <a href={item.url} rel="noreferrer" target="_blank">
                      Открыть <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
