import s from "./leadership-proof.module.css";

export default function LeadershipProof() {
  return (
    <section className={s.proof}>
      <div className={s.grid}>
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
  );
}
