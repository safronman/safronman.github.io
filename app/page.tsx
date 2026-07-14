import {
  CircleQuestionMark,
  Handshake,
  MessageCircleMore,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import CourseCatalog from "./course-catalog";
import styles from "./page.module.css";
import TeachingVideo from "./teaching-video";

const projects = [
  {
    title: "RTK Query: полный курс",
    kind: "Видеокурс · 16 часов",
    description:
      "Практический маршрут от первой настройки до production-сценариев работы с API в React-приложении.",
    role: "Автор программы, практических примеров и видео",
    details:
      "4 части · авторизация · CRUD · пагинация · WebSocket · кеширование",
    tags: ["React", "TypeScript", "RTK Query", "Zod"],
    link: "https://youtu.be/5qtCsfMytuk?si=O7IYG7XUOYBwEs9e",
    number: "01",
  },
  {
    title: "Git и GitHub для начинающих",
    kind: "Видеокурс · 2 ч 10 мин",
    description:
      "Понятное введение в ежедневные инженерные практики: от установки Git до pull request и конфликтов.",
    role: "Автор программы и видео",
    details:
      "Коммиты · ветки · конфликты · GitHub-аккаунты · публикация React-приложения",
    tags: ["Git", "GitHub", "WebStorm"],
    link: "https://youtu.be/BMo29Gkx8K0?si=KgQy7C9faAkkct-9",
    number: "02",
  },
  {
    title: "React-интенсив: приложение за 5 дней",
    kind: "Интенсив · 5 дней",
    description:
      "Ежедневный образовательный маршрут, в котором теория сразу превращается в рабочее приложение.",
    role: "Автор программы, практики и материалов",
    details:
      "JSX и компоненты → API → пагинация → обработка ошибок → динамические маршруты",
    tags: ["React", "React Router", "REST API"],
    link: "https://it-incubator.io/react/ru/reactjs-crash-course?s=C248EC",
    number: "03",
  },
  {
    title: "AI для frontend-разработчика",
    kind: "Обучающий модуль",
    description:
      "Как перейти от обычного чат-бота к инженерному ассистенту для разработки, обучения и автоматизации.",
    role: "Автор программы и преподаватель",
    details:
      "Codex · промпты · code review · AGENTS.md · MCP · Context7 · RAG · Agent Skills",
    tags: ["Codex", "MCP", "AI-assisted development"],
    link: "https://ai-frontend-course.vercel.app/",
    number: "04",
  },
  {
    title: "React Style Guide",
    kind: "Инженерное руководство",
    description:
      "Единые правила, которые помогают команде писать чистый, предсказуемый и масштабируемый React-код.",
    role: "Автор и составитель стандартов",
    details:
      "Нейминг · типизация · feature-based архитектура · ESLint · PR · коммиты",
    tags: ["React", "TypeScript", "Code quality"],
    link: "https://code-style.it-incubator.io/react",
    number: "05",
  },
];

const steps = [
  [
    "01",
    "Исследую",
    "Документацию, реальные сценарии, источники и типичные сложности аудитории.",
  ],
  [
    "02",
    "Систематизирую",
    "Отделяю главное от второстепенного и выстраиваю понятную последовательность.",
  ],
  [
    "03",
    "Проектирую",
    "Определяю результаты, программу, практику, задания и критерии проверки.",
  ],
  [
    "04",
    "Создаю и провожу",
    "Записываю видео, готовлю материалы, веду занятия и разбираю реальные примеры.",
  ],
  [
    "05",
    "Проверяю и улучшаю",
    "Анализирую практику студентов, даю обратную связь и дорабатываю обучение.",
  ],
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero} id="top">
        <nav className={styles.nav} aria-label="Основная навигация">
          <a className={styles.brand} href="#top">
            Алексей <span>·</span> Technical Educator
          </a>
          <div className={styles.navLinks}>
            <a href="#projects">Проекты</a>
            <a href="#approach">Подход</a>
            <a href="#contacts">Контакты</a>
          </div>
        </nav>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <h1>
              Сложные технические темы — в понятное практическое обучение.
            </h1>
            <p className={styles.lead}>
              Исследую предмет, проектирую программу и практику, создаю видео и
              материалы, с которыми знания переходят в работу.
            </p>
            <div className={styles.heroActions}>
              <a
                className={styles.primaryButton}
                href="https://t.me/your_telegram"
                target="_blank"
                rel="noreferrer"
              >
                Написать в Telegram <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.textButton} href="#projects">
                Смотреть проекты <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <figure className={styles.heroPortrait}>
            <Image
              src="/hero-portrait.png"
              alt="Technical Educator за рабочим столом в студии с книгами и техническим оборудованием"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 38vw"
            />
          </figure>
        </div>
      </section>

      <section className={`${styles.section} ${styles.proof}`}>
        <div className={styles.proofGrid}>
          <h2>
            Руководитель направления, который остаётся в контакте с учебным
            процессом.
          </h2>
          <div>
            <p>
              Управляю преподавателями, утверждаю программы и стандарты, провожу
              code review и создаю ключевые учебные артефакты.
            </p>
            <ul>
              <li>Программы, домашние задания и экзамены</li>
              <li>Обучающие видео и вебинары</li>
              <li>Презентации и методические материалы</li>
              <li>Стандарты качества и code review</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.approach}`} id="approach">
        <div className={styles.sectionIntro}>
          <h2>Как я проектирую обучение</h2>
          <p>
            Исследую тему, отбираю главное и проектирую практику. Только затем
            появляются программа, видео, занятия и материалы.
          </p>
        </div>
        <ol className={styles.stepList}>
          {steps.map(([number, title, text]) => (
            <li key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={`${styles.section} ${styles.teaching}`}>
        <div className={styles.teachingContent}>
          <div>
            <h2>Преподавание, которое вовлекает</h2>
            <p>
              На занятии важно не только объяснить тему, но и дать человеку
              возможность проверить своё понимание, задать вопрос и применить
              идею в реальной ситуации.
            </p>
          </div>
          <ul className={styles.teachingPractices}>
            <li>
              <CircleQuestionMark aria-hidden="true" strokeWidth={1.7} />
              <span>Вопросы вместо монолога</span>
            </li>
            <li>
              <Workflow aria-hidden="true" strokeWidth={1.7} />
              <span>Реальные сценарии</span>
            </li>
            <li>
              <MessageCircleMore aria-hidden="true" strokeWidth={1.7} />
              <span>Живая обратная связь</span>
            </li>
            <li>
              <Handshake aria-hidden="true" strokeWidth={1.7} />
              <span>Комфортная коммуникация</span>
            </li>
          </ul>
        </div>
        <TeachingVideo />
      </section>

      <CourseCatalog />

      <section className={`${styles.section} ${styles.services}`}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>01 / Возможности</p>
          <h2>Закрываю весь цикл технического обучения</h2>
        </div>
        <div className={styles.serviceGrid}>
          {[
            [
              "01",
              "Образовательные программы",
              "Исследование темы и аудитории, цели обучения, модули и логичный маршрут от первого знакомства до практики.",
            ],
            [
              "02",
              "Технический контент",
              "Видеокурсы, уроки, вебинары, презентации, методические пособия и техническая документация.",
            ],
            [
              "03",
              "Практическое обучение",
              "Групповые занятия, разбор кода, code review, менторинг и сопровождение студентов.",
            ],
            [
              "04",
              "Проверка знаний",
              "Домашние задания, экзамены, практические проекты, критерии оценки и содержательная обратная связь.",
            ],
          ].map(([number, title, text]) => (
            <article className={styles.service} key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.projects}`} id="projects">
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>02 / Избранные проекты</p>
          <h2>
            Не набор уроков. Системы, по которым можно учиться и работать.
          </h2>
          <p>Все проекты созданы в рамках моей работы в IT-Incubator.</p>
        </div>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <article className={styles.project} key={project.number}>
              <span className={styles.projectNumber}>{project.number}</span>
              <div>
                <p className={styles.projectKind}>{project.kind}</p>
                <h3>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
              <div className={styles.projectMeta}>
                <p>
                  <b>Моя роль</b>
                  {project.role}
                </p>
                <p>{project.details}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a
                className={styles.projectLink}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Открыть проект: ${project.title}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.materials}`}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>05 / Форматы</p>
          <h2>Материал выбирается под задачу обучения</h2>
        </div>
        <div className={styles.materialGrid}>
          {[
            ["Видео", "Курсы и отдельные уроки с демонстрациями и практикой."],
            [
              "Вебинары",
              "Живое объяснение, вопросы и разбор инженерных решений.",
            ],
            [
              "Пособия",
              "Структурированные материалы для самостоятельной работы.",
            ],
            [
              "Презентации",
              "Наглядное объяснение архитектуры и технических концепций.",
            ],
            [
              "Интенсивы",
              "Короткие маршруты к конкретному работающему результату.",
            ],
            [
              "Оценка",
              "Экзамены и задания, которые проверяют применение знаний.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <span>↗</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.expertise}`}>
        <div className={styles.sectionIntro}>
          <p className={styles.kicker}>06 / Техническая экспертиза</p>
          <h2>
            Технологии — основа для сильного обучения, а не список ради списка.
          </h2>
        </div>
        <div className={styles.expertiseGrid}>
          <div>
            <h3>Frontend</h3>
            <p>
              JavaScript · TypeScript · React · Redux Toolkit · RTK Query ·
              React Router · React Hook Form · Zod
            </p>
          </div>
          <div>
            <h3>UI и качество</h3>
            <p>
              Storybook · Radix UI · дизайн-системы · UI-kit · accessibility ·
              CSS-архитектура
            </p>
          </div>
          <div>
            <h3>Инженерные практики</h3>
            <p>
              Git · GitHub · REST API · WebSocket · тестирование · code review ·
              архитектура приложений
            </p>
          </div>
          <div>
            <h3>AI для разработки</h3>
            <p>
              Codex · AI-assisted development · MCP · Context7 · Playwright ·
              RAG · Agent Skills
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contacts">
        <div>
          <p className={styles.kicker}>07 / Контакты</p>
          <h2>Ищете Technical Educator для образовательного продукта?</h2>
          <p>
            Открыт к предложениям роли, где важно одновременно разбираться в
            инженерных темах и строить качественное обучение.
          </p>
        </div>
        <div className={styles.contactCard}>
          <p className={styles.placeholder}>
            Замените данные перед публикацией
          </p>
          <a href="mailto:your.email@example.com">
            your.email@example.com <span>↗</span>
          </a>
          <a href="https://t.me/your_telegram" target="_blank" rel="noreferrer">
            Telegram: @your_telegram <span>↗</span>
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub: @your-github <span>↗</span>
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <span>© 2026 · Technical Educator</span>
        <a href="#top">Наверх ↑</a>
      </footer>
    </main>
  );
}
