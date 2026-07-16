import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Bot,
  Braces,
  ClipboardCheck,
  FilePenLine,
  GitBranch,
  PanelsTopLeft,
  PenLine,
  Presentation,
  TimerReset,
  Video,
} from "lucide-react";
import s from "./technical-foundation.module.css";

type FoundationArea = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const foundationAreas: FoundationArea[] = [
  {
    description:
      "JavaScript, TypeScript, React, Redux Toolkit, RTK Query, React Router, React Hook Form и Zod.",
    icon: Braces,
    title: "Frontend",
  },
  {
    description:
      "Storybook, Radix UI, UI-kit, accessibility, CSS-архитектура и компонентный подход.",
    icon: PanelsTopLeft,
    title: "UI и дизайн-системы",
  },
  {
    description:
      "Git и GitHub, REST и WebSocket, тестирование, code review и архитектура приложений.",
    icon: GitBranch,
    title: "Инженерные практики",
  },
  {
    description:
      "Codex, MCP, Context7, Playwright, RAG и Agent Skills — в материалах и ежедневной разработке.",
    icon: Bot,
    title: "AI в разработке",
  },
];

const formatAreas: FoundationArea[] = [
  {
    description:
      "Погружение в конкретную тему с теорией, практикой и разбором результатов.",
    icon: TimerReset,
    title: "Интенсивы",
  },
  {
    description:
      "Объяснение материала, практика и ответы на вопросы в реальном времени.",
    icon: Video,
    title: "Онлайн-уроки и вебинары",
  },
  {
    description:
      "Практические задания, которые помогают применить материал в реальном коде.",
    icon: FilePenLine,
    title: "Домашние задания",
  },
  {
    description:
      "Конспекты, инструкции и примеры, к которым можно возвращаться после обучения.",
    icon: ClipboardCheck,
    title: "Методические пособия",
  },
  {
    description:
      "Визуальные материалы, которые упрощают понимание сложных технических тем.",
    icon: Presentation,
    title: "Презентации",
  },
];

const assessmentAreas: FoundationArea[] = [
  {
    description:
      "Проверка понимания материала и способности самостоятельно решать практические задачи.",
    icon: BadgeCheck,
    title: "Экзамены",
  },
  {
    description:
      "Разбор инженерных решений, структуры кода, читаемости и типичных ошибок.",
    icon: PenLine,
    title: "Code review",
  },
];

function ExpertiseGroup({
  items,
  title,
}: {
  items: FoundationArea[];
  title: string;
}) {
  return (
    <section className={s.group}>
      <h3>{title}</h3>
      <ul className={s.list}>
        {items.map(({ description, icon: Icon, title: itemTitle }) => (
          <li className={s.area} key={itemTitle}>
            <Icon aria-hidden="true" strokeWidth={1.65} />
            <div>
              <h4>{itemTitle}</h4>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function TechnicalFoundation() {
  return (
    <section className={s.foundation} id="expertise">
      <div className={s.inner}>
        <header className={s.intro}>
          <h2>Техническая экспертиза и коммуникация</h2>
          <p>
            Разбираюсь в техническом предмете и выбираю форму, в которой он
            станет полезным для студентов, команды или клиентов.
          </p>
        </header>
        <div className={s.groups}>
          <ExpertiseGroup items={foundationAreas} title="Что глубоко знаю" />
          <section className={s.group}>
            <h3>На основе технической экспертизы делаю обучение практичным</h3>
            <ExpertiseGroup items={formatAreas} title="Форматы" />
            <ExpertiseGroup
              items={assessmentAreas}
              title="Оценка и обратная связь"
            />
          </section>
        </div>
      </div>
    </section>
  );
}
