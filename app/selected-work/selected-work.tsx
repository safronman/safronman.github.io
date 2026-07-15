import Image from "next/image";
import s from "./selected-work.module.css";

type Resource = {
  label: string;
  note?: string;
  url: string;
};

type SelectedWorkItem = {
  description: string;
  evidence: string;
  image: string;
  resources?: readonly Resource[];
  role: string;
  title: string;
  type: string;
  url: string;
};

const selectedWork: readonly SelectedWorkItem[] = [
  {
    description:
      "Запросы и мутации, кеширование, пагинация, авторизация и обновления в реальном времени — в формате полного видеокурса.",
    evidence:
      "Сложную инженерную тему можно собрать в связный учебный маршрут с практическими сценариями.",
    image: "/rtk-query-course-cover.png",
    resources: [
      {
        label: "Смотреть курс на YouTube",
        url: "https://youtu.be/5qtCsfMytuk?si=YXT7klLij9eOLKyJ",
      },
      {
        label: "Открыть методические материалы",
        note: "Примеры экзаменов доступны после регистрации на платформе.",
        url: "https://it-incubator.io/react/ru/react-middle-senior-tutorials/rtk-query-musicfun-free-course/1-application-setup-queries-mutations?s=C248EC",
      },
    ],
    role: "Исследование темы, проектирование программы, создание видеокурса и методических пособий.",
    title: "RTK Query: полный курс",
    type: "Видеокурс",
    url: "https://youtu.be/5qtCsfMytuk?si=YXT7klLij9eOLKyJ",
  },
  {
    description:
      "Фрагмент занятия об Auth flow with protected routes: объяснение темы, вопросы к аудитории и разбор практического сценария.",
    evidence:
      "Техническая глубина сочетается с диалогом, реальными сценариями, практикой и обратной связью.",
    image: "/teaching-video-cover-v2.png",
    role: "Веду занятия более шести лет: выстраиваю объяснение через вопросы, практику и живую обратную связь.",
    title: "Преподавание: фрагмент занятия",
    type: "Занятие с группой",
    url: "https://youtu.be/4YF06mvcJ4k",
  },
  {
    description:
      "Открытые материалы и пример экзамена показывают, как тема получает объяснение, визуальную опору и проверку понимания.",
    evidence:
      "Обучение — это не только урок: учебный маршрут складывается из пособия, презентации и проверочных заданий.",
    image: "/manual/manual-react-style-guide.png",
    resources: [
      {
        label: "Открыть методическое пособие",
        url: "https://code-style.it-incubator.io/react",
      },
      {
        label: "Открыть презентацию Front-end roadmap",
        url: "https://presentation-frontend-roadmap.vercel.app/",
      },
      {
        label: "Открыть пример экзамена",
        note: "Для просмотра нужна регистрация на учебной платформе.",
        url: "https://it-incubator.io/react/ru/react-samurai-way/exams/free-course/exam?level=1&s=C248EC",
      },
    ],
    role: "Создание методических пособий, презентаций и проверочных материалов.",
    title: "Учебный комплект: пособие, презентация и экзамен",
    type: "Учебные материалы",
    url: "https://code-style.it-incubator.io/react",
  },
] as const;

export default function SelectedWork() {
  return (
    <section className={s.work} id="work">
      <div className={s.intro}>
        <h2>Работы, с которых стоит начать</h2>
        <p>
          Три артефакта, по которым можно быстро оценить мой подход к
          техническому обучению: от исследования темы до материала, с которым
          работает аудитория.
        </p>
      </div>

      <div className={s.list}>
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
                sizes="(max-width: 820px) 100vw, 38vw"
                src={item.image}
              />
              <span aria-hidden="true" className={s.coverAction}>
                Открыть работу ↗
              </span>
            </a>

            <div className={s.content}>
              <p className={s.type}>{item.type}</p>
              <h3>{item.title}</h3>
              <p className={s.description}>{item.description}</p>
              <dl className={s.details}>
                <div>
                  <dt>Моя роль</dt>
                  <dd>{item.role}</dd>
                </div>
                <div>
                  <dt>Что доказывает</dt>
                  <dd>{item.evidence}</dd>
                </div>
              </dl>
              {item.resources ? (
                <ul className={s.resources}>
                  {item.resources.map((resource) => (
                    <li key={resource.url}>
                      <a href={resource.url} rel="noreferrer" target="_blank">
                        {resource.label} <span aria-hidden="true">↗</span>
                      </a>
                      {resource.note ? <p>{resource.note}</p> : null}
                    </li>
                  ))}
                </ul>
              ) : (
                <a
                  className={s.textLink}
                  href={item.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  Смотреть фрагмент занятия <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
