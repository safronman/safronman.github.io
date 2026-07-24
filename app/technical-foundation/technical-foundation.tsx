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
      "JavaScript, TypeScript и React: архитектура интерфейсов, управление состоянием, работа с данными, формами и маршрутизацией.",
    icon: Braces,
    title: "Frontend-разработка",
  },
  {
    description:
      "Компонентный подход, Storybook, доступность, UI-киты и организация масштабируемых стилей.",
    icon: PanelsTopLeft,
    title: "UI и дизайн-системы",
  },
  {
    description:
      "Git и GitHub, интеграция с API, тестирование, code review и проектирование поддерживаемой архитектуры.",
    icon: GitBranch,
    title: "Инженерные практики",
  },
  {
    description:
      "Работа с AI-агентами, MCP и RAG, автоматизация исследований, разработки, тестирования и подготовки материалов.",
    icon: Bot,
    title: "AI в разработке",
  },
];

const formatAreas: FoundationArea[] = [
  {
    description:
      "Последовательная программа с объяснениями, практикой и материалами для самостоятельной работы.",
    icon: Video,
    title: "Видеокурсы",
  },
  {
    description:
      "Погружение в конкретную тему с теорией, практическими задачами и разбором результатов.",
    icon: TimerReset,
    title: "Интенсивы",
  },
  {
    description:
      "Живое объяснение материала, совместная практика, обсуждение решений и ответы на вопросы.",
    icon: Video,
    title: "Онлайн-занятия и вебинары",
  },
  {
    description:
      "Задачи, приближённые к реальной разработке, которые помогают самостоятельно применить изученный материал.",
    icon: FilePenLine,
    title: "Домашние задания",
  },
  {
    description:
      "Конспекты, инструкции и примеры, к которым удобно возвращаться во время и после обучения.",
    icon: ClipboardCheck,
    title: "Методические материалы",
  },
  {
    description:
      "Визуальные материалы, которые помогают увидеть структуру темы и связи между сложными понятиями.",
    icon: Presentation,
    title: "Презентации и схемы",
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
          <h2>Техническая экспертиза, которую умею передавать</h2>
          <p>
            Разбираюсь в техническом предмете и выбираю форму, в которой он
            станет полезным для студентов, команды или клиентов.
          </p>
        </header>
        <div className={s.groups}>
          <ExpertiseGroup items={foundationAreas} title="Ключевые области экспертизы" />
          <section className={s.group}>
            <h3>Превращаю экспертизу в практическое обучение</h3>
            <ExpertiseGroup items={formatAreas} title="Форматы" />
            <ExpertiseGroup
              items={assessmentAreas}
              title="Проверка и обратная связь"
            />
          </section>
        </div>
      </div>
    </section>
  );
}
