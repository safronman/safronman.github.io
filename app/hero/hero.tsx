import Image from "next/image";
import s from "./hero.module.css";

export default function Hero() {
  return (
    <section className={s.hero} id="top">
      <div className={s.heroGrid}>
        <div>
          <h1>
            <span>Преподаю.</span>
            <span>Записываю видео.</span>
            <span>Создаю программы.</span>
            <span>Руковожу техническим обучением.</span>
          </h1>
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
