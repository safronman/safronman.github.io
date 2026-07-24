import {
  ClipboardCheck,
  Lightbulb,
  MessagesSquare,
  UsersRound,
} from "lucide-react";
import TeachingVideo from "@/app/teaching-practices/teaching-video/teaching-video";
import s from "./teaching-practices.module.css";

const practices = [
  [UsersRound, "Вовлекаю каждого в работу"],
  [ClipboardCheck, "Проверяю понимание через практику"],
  [MessagesSquare, "Даю обратную связь по ходу занятия"],
  [Lightbulb, "Превращаю ошибки в часть обучения"],
] as const;

export default function TeachingPractices() {
  return (
    <section className={s.teaching} id="teaching">
      <div className={s.content}>
        <div>
          <h2>Как проходят мои занятия</h2>
          <p>
            Учу понимать и мыслить, вместо сухой выдачи материала. Студенты на
            занятиях задают вопросы, рассуждают, пробуют решать самостоятельно и
            получают обратную связь.
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
