import Image from "next/image";
import s from "./selected-work.module.css";

const selectedWork = [
  {
    description:
      "Запросы и мутации, кеширование, пагинация, авторизация и обновления в реальном времени — в формате полного видеокурса.",
    evidence:
      "Сложную инженерную тему можно собрать в связный учебный маршрут с практическими сценариями.",
    image: "/rtk-query-course-cover.png",
    role: "Исследование темы, проектирование программы и создание видеокурса.",
    title: "RTK Query: полный курс",
    type: "Видеокурс",
    url: "https://youtu.be/5qtCsfMytuk?si=YXT7klLij9eOLKyJ",
  },
  {
    description:
      "Кейс-видео о различиях HTTP, short polling, long polling, SSE и WebSocket.",
    evidence:
      "Архитектурные альтернативы можно объяснить на одном понятном сценарии — без упрощения сути.",
    image: "/presentation/presentation-realtime-cover.png",
    role: "Сценарий, техническая систематизация, motion design и работа с HyperFrames.",
    title: "Real-Time: HTTP, Polling, SSE и WebSocket",
    type: "Видео-презентация",
    url: "https://youtu.be/pO7CYYoHO6o",
  },
  {
    description:
      "React Style Guide фиксирует правила декомпозиции, структуры компонентов, типов, форматирования и code review.",
    evidence:
      "Методический материал помогает превратить договорённости команды в повторяемую инженерную практику.",
    image: "/manual/manual-react-style-guide.png",
    role: "Автор методического руководства по единому стилю кода.",
    title: "React Style Guide",
    type: "Методическое руководство",
    url: "https://code-style.it-incubator.io/react",
  },
] as const;

export default function SelectedWork() {
  return (
    <section className={s.work} id="work">
      <div className={s.intro}>
        <h2>Работы, с которых стоит начать</h2>
        <p>
          Три артефакта, по которым можно быстро оценить мой подход к
          техническому обучению: от исследования темы до материала, с которым
          работает аудитория.
        </p>
      </div>

      <div className={s.list}>
        {selectedWork.map((item) => (
          <article className={s.item} key={item.title}>
            <a
              aria-label={`Открыть «${item.title}»`}
              className={s.coverLink}
              href={item.url}
              rel="noreferrer"
              target="_blank"
            >
              <Image
                alt={`Обложка работы «${item.title}»`}
                fill
                sizes="(max-width: 820px) 100vw, 38vw"
                src={item.image}
              />
              <span aria-hidden="true" className={s.coverAction}>
                Открыть работу ↗
              </span>
            </a>

            <div className={s.content}>
              <p className={s.type}>{item.type}</p>
              <h3>{item.title}</h3>
              <p className={s.description}>{item.description}</p>
              <dl className={s.details}>
                <div>
                  <dt>Моя роль</dt>
                  <dd>{item.role}</dd>
                </div>
                <div>
                  <dt>Что доказывает</dt>
                  <dd>{item.evidence}</dd>
                </div>
              </dl>
              <a
                className={s.textLink}
                href={item.url}
                rel="noreferrer"
                target="_blank"
              >
                Открыть работу <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
