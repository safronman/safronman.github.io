import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpenCheck,
  GitPullRequest,
  MessageSquareMore,
  NotebookPen,
  Presentation,
  Timer,
  Video,
} from "lucide-react";
import styles from "./formats-and-assessment.module.css";

type AssessmentItemProps = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const formats: AssessmentItemProps[] = [
  {
    description: "Сфокусированная работа над темой за короткий период.",
    icon: Timer,
    title: "Интенсивы",
  },
  {
    description: "Разборы, вопросы и работа с аудиторией в реальном времени.",
    icon: Video,
    title: "Live-уроки и вебинары",
  },
  {
    description: "Практика, закрепляющая тему в коде.",
    icon: NotebookPen,
    title: "Домашние задания",
  },
  {
    description: "Ориентиры, к которым можно возвращаться в работе.",
    icon: BookOpenCheck,
    title: "Методические пособия",
  },
  {
    description: "Визуальное объяснение технических тем.",
    icon: Presentation,
    title: "Презентации",
  },
];

const assessment: AssessmentItemProps[] = [
  {
    description: "Проверка понимания и самостоятельного решения задач.",
    icon: BadgeCheck,
    title: "Экзамены",
  },
  {
    description: "Обратная связь по инженерным решениям и качеству кода.",
    icon: GitPullRequest,
    title: "Code review",
  },
  {
    description: "Помощь студенту увидеть следующий шаг.",
    icon: MessageSquareMore,
    title: "Индивидуальная обратная связь",
  },
];

function AssessmentItem({
  description,
  icon: Icon,
  title,
}: AssessmentItemProps) {
  return (
    <li className={styles.item}>
      <Icon aria-hidden="true" strokeWidth={1.7} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}

function AssessmentGroup({
  items,
  title,
}: {
  items: AssessmentItemProps[];
  title: string;
}) {
  return (
    <section className={styles.group}>
      <h3 className={styles.groupTitle}>{title}</h3>
      <ul>
        {items.map((item) => (
          <AssessmentItem key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}

export default function FormatsAndAssessment() {
  return (
    <section className={styles.assessment} id="formats-and-assessment">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <h2>Форматы и оценка</h2>
          <p>
            Создаю не отдельные уроки, а систему обучения — от формата до
            проверки результата.
          </p>
        </header>

        <div className={styles.groups}>
          <AssessmentGroup items={formats} title="Форматы" />
          <AssessmentGroup items={assessment} title="Оценка и обратная связь" />
        </div>
      </div>
    </section>
  );
}
