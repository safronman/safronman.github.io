import {
  CircleQuestionMark,
  Handshake,
  MessageCircleMore,
  Workflow,
} from "lucide-react";
import TeachingVideo from "@/app/teaching-practices/teaching-video/teaching-video";
import s from "./teaching-practices.module.css";

const practices = [
  [CircleQuestionMark, "Вовлекаю каждого в работу"],
  [Workflow, "Проверяю понимание через практику"],
  [MessageCircleMore, "Даю обратную связь по ходу занятия"],
  [Handshake, "Превращаю ошибки в часть обучения"],
] as const;

export default function TeachingPractices() {
  return (
    <section className={s.teaching} id="teaching">
      <div className={s.content}>
        <div>
          <h2>Как проходят мои занятия</h2>
          <p>
            Учу понимать и мыслить, вместо сухой выдачи материала. Студенты на занятиях задают вопросы, рассуждают, пробуют решать самостоятельно и получают обратную связь.
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
