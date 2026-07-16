import { ArrowUpRight, CodeXml, Mail, Send } from "lucide-react";
import s from "./contact.module.css";

export default function Contact() {
  return (
    <section className={s.contact} id="contacts">
      <div className={s.inner}>
        <header className={s.intro}>
          <h2>Открыт к новым задачам и командам</h2>
        </header>

        <div className={s.contactDetails}>
          <p className={s.name}>Валерий Сафронов</p>
          <address className={s.links}>
            <div className={s.telegram}>
              <span className={s.channel}>
                <Send aria-hidden="true" strokeWidth={1.7} />
                Telegram
              </span>
              <a href="https://t.me/safronman" target="_blank" rel="noreferrer">
                Написать в Telegram
                <ArrowUpRight aria-hidden="true" strokeWidth={1.8} />
              </a>
            </div>

            <div className={s.linkRow}>
              <span className={s.channel}>
                <Mail aria-hidden="true" strokeWidth={1.7} />
                Email
              </span>
              <a href="mailto:safronmanbox@gmail.com">safronmanbox@gmail.com</a>
            </div>

            <div className={s.linkRow}>
              <span className={s.channel}>
                <CodeXml aria-hidden="true" strokeWidth={1.7} />
                GitHub
              </span>
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
      </div>
    </section>
  );
}
