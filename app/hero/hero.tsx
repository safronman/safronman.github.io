import Image from "next/image";
import s from "./hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero} id="top">
      <nav aria-label="Основная навигация" className={s.nav}>
        <a className={s.brand} href="#top">
          Алексей <span>·</span> Technical Educator
        </a>
        <div className={s.navLinks}>
          <a href="#courses">Видеокурсы</a>
          <a href="#approach">Подход</a>
        </div>
      </nav>
      <div className={s.heroGrid}>
        <div>
          <h1>Сложные технические темы — в понятное практическое обучение.</h1>
          <p className={s.lead}>
            Исследую предмет, проектирую программу и практику, создаю видео и
            материалы, с которыми знания переходят в работу.
          </p>
          <div className={s.actions}>
            <a
              className={s.primaryButton}
              href="https://t.me/your_telegram"
              rel="noreferrer"
              target="_blank"
            >
              Написать в Telegram <span aria-hidden="true">↗</span>
            </a>
            <a className={s.textButton} href="#courses">
              Смотреть видеокурсы <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <figure className={s.portrait}>
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
