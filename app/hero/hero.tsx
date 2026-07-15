import Image from "next/image";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <nav aria-label="Основная навигация" className={styles.nav}>
        <a className={styles.brand} href="#top">
          Алексей <span>·</span> Technical Educator
        </a>
        <div className={styles.navLinks}>
          <a href="#courses">Видеокурсы</a>
          <a href="#approach">Подход</a>
        </div>
      </nav>
      <div className={styles.heroGrid}>
        <div>
          <h1>Сложные технические темы — в понятное практическое обучение.</h1>
          <p className={styles.lead}>
            Исследую предмет, проектирую программу и практику, создаю видео и
            материалы, с которыми знания переходят в работу.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primaryButton}
              href="https://t.me/your_telegram"
              rel="noreferrer"
              target="_blank"
            >
              Написать в Telegram <span aria-hidden="true">↗</span>
            </a>
            <a className={styles.textButton} href="#courses">
              Смотреть видеокурсы <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className={styles.portrait}>
          <Image
            alt="Technical Educator за рабочим столом в студии с книгами и техническим оборудованием"
            fill
            priority
            sizes="(max-width: 820px) 100vw, 38vw"
            src="/hero-portrait.png"
          />
        </figure>
      </div>
    </section>
  );
}
