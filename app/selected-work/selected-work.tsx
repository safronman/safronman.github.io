import Image from "next/image";
import PlayIcon from "@/app/play-icon/play-icon";
import s from "./selected-work.module.css";

type Work = {
  description: string;
  image: string;
  imageAlt?: string;
  links: readonly {
    label: string;
    url: string;
  }[];
  title: string;
  type: string;
  url: string;
  isVideo?: boolean;
};

type AdditionalMaterial = {
  description: string;
  image: string;
  imageAlt?: string;
  title: string;
  url: string;
  isVideo?: boolean;
};

const selectedWork: readonly Work[] = [
  {
    description:
      "Превращаю сложную техническую тему в цельный учебный продукт: от программы и практики до видеоуроков и методических материалов.",
    image: "/rtk-query-course-cover.png",
    imageAlt: "Валерий Сафронов на обложке видеокурса RTK Query",
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
    isVideo: true,
    title: "RTK Query: полный курс",
    type: "Видеокурс",
    url: "https://youtu.be/5qtCsfMytuk?si=YXT7klLij9eOLKyJ",
  },
  {
    description:
      "Помогаю студентам не просто слушать, а разбираться и применять знания — через вопросы, практические задачи и подробную обратную связь.",
    image: "/video/video-thunk-cover.png",
    imageAlt:
      "Валерий Сафронов в наушниках на обложке практического занятия по Thunk",
    links: [
      {
        label: "Смотреть фрагмент занятия",
        url: "https://youtu.be/4YF06mvcJ4k",
      },
    ],
    isVideo: true,
    title: "Преподавание: фрагмент занятия",
    type: "Занятие с группой",
    url: "https://youtu.be/Rf3OgZd4trk",
  },
  {
    description:
      "Систематизирую сложные темы в понятные визуальные схемы, чтобы показать связи между технологиями и выстроить последовательный маршрут обучения.",
    image: "/presentation/presentation-frontend-roadmap-cover.png",
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
      "Формирую единые стандарты разработки, которые помогают команде писать понятный код, быстрее проводить ревью и проще развивать проект.",
    image: "/manual/manual-style-guide.png",
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
        imageAlt: "Валерий Сафронов на обложке курса по Git",
        isVideo: true,
        title: "Git: введение и базовый рабочий процесс",
        url: "https://youtu.be/BMo29Gkx8K0?si=6yh2OJcZP3vrtkw7",
      },
      {
        description:
          "Курс о переиспользуемых компонентах, Portal, Radix UI и Storybook — от API до изолированной разработки.",
        image: "/modal-createportal-radix-ui-storybook-cover.png",
        imageAlt:
          "Валерий Сафронов на обложке курса Modern UI Development",
        title: "Современная разработка компонентов",
        url: "https://it-incubator.io/react/ru/react-middle-senior-tutorials/modal-createportal-radix-ui-storybook/modal?s=C248EC",
      },
      {
        description:
          "Практический интенсив по React: от структуры приложения и роутинга до запросов к серверу, хуков и динамических страниц.",
        image: "/video/video-rick-morty-cover.jpg",
        imageAlt:
          "Валерий Сафронов на обложке интенсива по React JS",
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
          "Видео-презентация с motion эффектами о различиях HTTP, Short pooling, Long pooling, Server sent events и WebSocket.",
        image: "/presentation/presentation-realtime-cover.png",
        isVideo: true,
        title: "Real-Time: HTTP, Polling, SSE и WebSocket",
        url: "https://youtu.be/pO7CYYoHO6o",
      },
      {
        description:
          "Презентация на тему: ключевые изменения Zod 4, их практический смысл и примеры кода после перехода на новую версию.",
        image: "/presentation/presentation-zod4-cover.png",
        title: "Что нового в Zod 4",
        url: "https://presentation-zod-4.vercel.app/",
      },
      {
        description:
          "Презентация на тему: практический разбор использования AI для обучения, исследования тем и ежедневной технической работы.",
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
        <h2>Материалы</h2>
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
                alt={item.imageAlt ?? ""}
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                src={item.image}
              />
              {item.isVideo && (
                <span aria-hidden="true" className={s.coverPlay}>
                  <PlayIcon />
                </span>
              )}
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
                        alt={item.imageAlt ?? ""}
                        fill
                        sizes="(max-width: 520px) 112px, 136px"
                        src={item.image}
                      />
                      {item.isVideo && (
                        <span aria-hidden="true" className={s.materialPlay}>
                          <PlayIcon />
                        </span>
                      )}
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
