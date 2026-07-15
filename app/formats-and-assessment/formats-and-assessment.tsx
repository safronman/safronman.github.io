import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BookOpenCheck,
  GitPullRequest,
  NotebookPen,
  Presentation,
  Timer,
  Video,
} from "lucide-react";
import s from "./formats-and-assessment.module.css";

type AssessmentItemProps = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const formats: AssessmentItemProps[] = [
  {
    description:
      "Погружение в конкретную тему с теорией, практикой и разбором результатов.",
    icon: Timer,
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
    icon: NotebookPen,
    title: "Домашние задания",
  },
  {
    description:
      "Конспекты, инструкции и примеры, к которым можно возвращаться после обучения.",
    icon: BookOpenCheck,
    title: "Методические пособия",
  },
  {
    description:
      "Визуальные материалы, которые упрощают понимание сложных технических тем.",
    icon: Presentation,
    title: "Презентации",
  },
];

const assessment: AssessmentItemProps[] = [
  {
    description:
      "Проверка понимания материала и способности самостоятельно решать практические задачи.",
    icon: BadgeCheck,
    title: "Экзамены",
  },
  {
    description:
      "Разбор инженерных решений, структуры кода, читаемости и типичных ошибок.",
    icon: GitPullRequest,
    title: "Code review",
  },
];

function AssessmentItem({
  description,
  icon: Icon,
  title,
}: AssessmentItemProps) {
  return (
    <li className={s.item}>
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
    <section className={s.group}>
      <h3 className={s.groupTitle}>{title}</h3>
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
    <section className={s.assessment} id="formats-and-assessment">
      <div className={s.inner}>
        <header className={s.intro}>
          <h2>Как проходит обучение</h2>
          <p>
            Выстраиваю полный процесс обучения: от выбора формата и практики до
            проверки знаний и персональной обратной связи.
          </p>
        </header>

        <div className={s.groups}>
          <AssessmentGroup items={formats} title="Форматы" />
          <AssessmentGroup items={assessment} title="Оценка и обратная связь" />
        </div>
      </div>
    </section>
  );
}
