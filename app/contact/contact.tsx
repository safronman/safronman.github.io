import { ArrowUpRight } from "lucide-react";
import s from "./contact.module.css";

export default function Contact() {
  return (
    <section className={s.contact} id="contacts">
      <div className={s.inner}>
        <header className={s.intro}>
          <h2>Открыт к новым задачам и командам</h2>
          <p>
            Если вам нужен специалист, который совмещает frontend-экспертизу,
            обучение и техническую коммуникацию — буду рад обсудить задачу.
          </p>
        </header>

        <address className={s.links}>
          <div className={s.telegram}>
            <span>Telegram</span>
            <a href="https://t.me/safronman" target="_blank" rel="noreferrer">
              Написать в Telegram
              <ArrowUpRight aria-hidden="true" strokeWidth={1.8} />
            </a>
          </div>

          <div className={s.linkRow}>
            <span>Email</span>
            <a href="mailto:safronmanbox@gmail.com">safronmanbox@gmail.com</a>
          </div>

          <div className={s.linkRow}>
            <span>GitHub</span>
            <a
              href="https://github.com/safronman"
              target="_blank"
              rel="noreferrer"
            >
              @safronman <ArrowUpRight aria-hidden="true" strokeWidth={1.8} />
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}
