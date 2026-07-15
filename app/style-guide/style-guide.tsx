import { Braces, MessageSquareCheck, UsersRound } from "lucide-react";
import Image from "next/image";
import styles from "./style-guide.module.css";

const styleGuideUrl = "https://code-style.it-incubator.io/react";

export default function StyleGuide() {
  return (
    <section className={styles.styleGuide} id="style-guide">
      <div className={styles.inner}>
        <h2>Методическое пособие</h2>

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
              <li>
                <Braces aria-hidden="true" strokeWidth={1.7} />
                <span>Единый стиль кода</span>
              </li>
              <li>
                <UsersRound aria-hidden="true" strokeWidth={1.7} />
                <span>Понятный ориентир для команды</span>
              </li>
              <li>
                <MessageSquareCheck aria-hidden="true" strokeWidth={1.7} />
                <span>Основание для code review</span>
              </li>
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
