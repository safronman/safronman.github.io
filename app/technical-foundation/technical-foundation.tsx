import type { LucideIcon } from "lucide-react";
import { Bot, Braces, GitBranch, PanelsTopLeft } from "lucide-react";
import styles from "./technical-foundation.module.css";

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

export default function TechnicalFoundation() {
  return (
    <section className={styles.foundation} id="technical-foundation">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <h2>Техническая основа</h2>
          <p>
            Глубоко работаю с frontend-разработкой и связываю её с качеством
            интерфейсов, инженерными практиками и AI-инструментами.
          </p>
        </header>

        <ul className={styles.list}>
          {foundationAreas.map(({ description, icon: Icon, title }) => (
            <li className={styles.area} key={title}>
              <Icon aria-hidden="true" strokeWidth={1.65} />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
