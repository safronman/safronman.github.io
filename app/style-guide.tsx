import Image from "next/image";
import styles from "./style-guide.module.css";

const styleGuideUrl = "https://code-style.it-incubator.io/react";

export default function StyleGuide() {
  return (
    <section className={styles.styleGuide} id="style-guide">
      <div className={styles.inner}>
        <h2>React Style Guide</h2>

        <div className={styles.content}>
          <a
            aria-label="Открыть React Style Guide"
            className={styles.coverLink}
            href={styleGuideUrl}
            rel="noreferrer"
            target="_blank"
          >
            <Image
              alt="Страница React Style Guide с правилами декомпозиции и структуры компонентов"
              fill
              sizes="(max-width: 820px) 100vw, 56vw"
              src="/manual/manual-react-style-guide.png"
            />
            <span aria-hidden="true" className={styles.coverAction}>
              Открыть руководство ↗
            </span>
          </a>

          <div className={styles.description}>
            <p>
              Руководство фиксирует общие правила написания кода, чтобы нейминг,
              структура компонентов, типы, форматирование и коммиты не
              оставались личными предпочтениями каждого разработчика.
            </p>

            <ul>
              <li>Единый стиль кода</li>
              <li>Понятный ориентир для команды</li>
              <li>Основание для code review</li>
            </ul>

            <a
              className={styles.textLink}
              href={styleGuideUrl}
              rel="noreferrer"
              target="_blank"
            >
              Открыть руководство <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
