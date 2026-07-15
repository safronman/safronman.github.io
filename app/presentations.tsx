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

export default function Presentations() {
  return (
    <section className={styles.presentations} id="presentations">
      <div className={styles.header}>
        <h2>Презентации, которые выстраивают тему в систему</h2>
        <p>
          Самостоятельные интерактивные материалы, которые можно открыть и
          оценить без регистрации.
        </p>
      </div>

      <div className={styles.presentationGrid}>
        {presentations.map((presentation, index) => (
          <article
            className={index === 0 ? styles.featured : styles.presentation}
            key={presentation.title}
          >
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
                sizes={
                  index === 0
                    ? "(max-width: 900px) 100vw, 58vw"
                    : "(max-width: 900px) 100vw, 34vw"
                }
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
    </section>
  );
}
