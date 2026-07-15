import {
  CircleQuestionMark,
  Handshake,
  MessageCircleMore,
  Workflow,
} from "lucide-react";
import TeachingVideo from "@/app/teaching-practices/teaching-video/teaching-video";
import s from "./teaching-practices.module.css";

const practices = [
  [CircleQuestionMark, "Вопросы вместо монолога"],
  [Workflow, "Реальные сценарии"],
  [MessageCircleMore, "Живая обратная связь"],
  [Handshake, "Комфортная коммуникация"],
] as const;

export default function TeachingPractices() {
  return (
    <section className={s.teaching}>
      <div className={s.content}>
        <div>
          <h2>Преподавание, которое вовлекает</h2>
          <p>
            На занятии важно не только объяснить тему, но и дать человеку
            возможность проверить своё понимание, задать вопрос и применить идею
            в реальной ситуации.
          </p>
        </div>
        <ul className={s.practices}>
          {practices.map(([Icon, label]) => (
            <li key={label}>
              <Icon aria-hidden="true" strokeWidth={1.7} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <TeachingVideo />
    </section>
  );
}
