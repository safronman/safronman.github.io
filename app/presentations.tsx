import Image from "next/image";
import styles from "./presentations.module.css";

const presentations = [
  {
    description:
      "Карта Front-end-разработки: от управления состоянием и работы с сервером до тестирования и WebSocket-сценариев.",
    image: "/presentation/presentation-front-roadmap-cover.png",
    title: "Front-end roadmap",
    url: "https://presentation-frontend-roadmap.vercel.app/",
  },
  {
    description:
      "Практический разбор того, как использовать AI для обучения, исследования тем и повседневной технической работы.",
    image: "/presentation/presentation-ai-for study-cover.png",
    title: "Как использовать AI для обучения и работы",
    url: "https://presentation-ai-for-study-and-work.vercel.app/",
  },
  {
    description:
      "Ключевые изменения Zod 4, их практический смысл и примеры кода после перехода на новую версию.",
    image: "/presentation/presentation-zod4-cover.png",
    title: "Что нового в Zod 4",
    url: "https://presentation-zod-4.vercel.app/",
  },
] as const;

const motionCase = {
  description:
    "Кейс-видео о различиях HTTP, short polling, long polling, SSE и WebSocket. Демонстрирует техническую систематизацию, motion design и работу с HyperFrames.",
  image: "/presentation/presentation-realtime-cover.png",
  title: "Real-Time: HTTP, Polling, SSE и WebSocket",
  url: "https://youtu.be/pO7CYYoHO6o",
};

export default function Presentations() {
  return (
    <section className={styles.presentations} id="presentations">
      <div className={styles.header}>
        <h2>Презентации</h2>
      </div>

      <div className={styles.presentationGrid}>
        {presentations.map((presentation) => (
          <article className={styles.presentation} key={presentation.title}>
            <a
              aria-label={`Открыть презентацию «${presentation.title}»`}
              className={styles.coverLink}
              href={presentation.url}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={`Обложка презентации «${presentation.title}»`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                src={presentation.image}
              />
              <span aria-hidden="true" className={styles.coverAction}>
                Открыть презентацию ↗
              </span>
            </a>
            <div className={styles.content}>
              <p className={styles.type}>Интерактивная презентация</p>
              <h3>{presentation.title}</h3>
              <p className={styles.description}>{presentation.description}</p>
              <a
                className={styles.textLink}
                href={presentation.url}
                rel="noreferrer"
                target="_blank"
              >
                Открыть презентацию <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      <article className={styles.motionCase}>
        <a
          aria-label={`Смотреть видео-презентацию «${motionCase.title}» на YouTube`}
          className={styles.coverLink}
          href={motionCase.url}
          rel="noreferrer"
          target="_blank"
        >
          <Image
            alt={`Обложка видео-презентации «${motionCase.title}»`}
            fill
            sizes="(max-width: 900px) 100vw, 58vw"
            src={motionCase.image}
          />
          <span aria-hidden="true" className={styles.coverAction}>
            Смотреть на YouTube ↗
          </span>
        </a>
        <div className={styles.motionContent}>
          <p className={styles.type}>Видео-презентация · Motion case</p>
          <h3>{motionCase.title}</h3>
          <p className={styles.description}>{motionCase.description}</p>
          <a
            className={styles.textLink}
            href={motionCase.url}
            rel="noreferrer"
            target="_blank"
          >
            Смотреть на YouTube <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </section>
  );
}
