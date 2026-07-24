import Image from "next/image";
import s from "./hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero} id="top">
      <div className={s.heroGrid}>
        <div>
          <h1>Технический преподаватель и руководитель обучения</h1>
          <p className={s.proof}>
            6+ лет в преподавании frontend-разработки и методической работе:
            провёл 70+ учебных групп, обучил 1&nbsp;000+ студентов и записал
            100+ технических видеоуроков.
          </p>
          <div className={s.actions}>
            <a
              className={s.primaryButton}
              href="https://t.me/safronman"
              rel="noreferrer"
              target="_blank"
            >
              Написать в Telegram <span aria-hidden="true">↗</span>
            </a>
            <a className={s.textButton} href="#work">
              Смотреть работы <span aria-hidden="true">↓</span>
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
