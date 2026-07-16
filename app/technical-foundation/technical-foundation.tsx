import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Braces,
  GitBranch,
  MessagesSquare,
  PanelsTopLeft,
  PenLine,
  Presentation,
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

const communicationAreas: FoundationArea[] = [
  {
    description:
      "Провожу содержательные эфиры и презентации, где сложная тема становится ясной для аудитории.",
    icon: Presentation,
    title: "Вебинары",
  },
  {
    description:
      "Записываю короткие объяснения, которые быстро раскрывают техническую ценность темы.",
    icon: Video,
    title: "Короткие видео",
  },
  {
    description:
      "Отвечаю на вопросы один на один и помогаю выбрать подходящий формат обучения.",
    icon: MessagesSquare,
    title: "Диалог с аудиторией",
  },
  {
    description:
      "Помогаю точнее формулировать технический контент: смыслы, примеры и объяснения.",
    icon: PenLine,
    title: "Поддержка контента",
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
          <ExpertiseGroup
            items={communicationAreas}
            title="Как превращаю это в понятный материал"
          />
        </div>
      </div>
    </section>
  );
}
