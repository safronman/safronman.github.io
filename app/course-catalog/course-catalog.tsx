import Image from "next/image";
import s from "./course-catalog.module.css";

type Course = {
  description: string;
  image: string;
  materialStatus?: string;
  status?: string;
  title: string;
  type: string;
  youtubeUrl?: string;
};

const courses: readonly Course[] = [
  {
    description:
      "Запросы и мутации, кеширование, пагинация, обработка ошибок, авторизация и обновления в реальном времени. Публичное видео показывает формат полного курса.",
    image: "/rtk-query-course-cover.png",
    materialStatus: "Материалы курса — ссылка появится позже",
    title: "RTK Query: полный курс",
    type: "Видеокурс",
    youtubeUrl: "https://youtu.be/5qtCsfMytuk?si=YXT7klLij9eOLKyJ",
  },
  {
    description:
      "Плейлист о настройке Git, SSH-ключах и практиках, с которых начинается уверенная работа разработчика в команде.",
    image: "/git-course-cover.jpg",
    title: "Git: введение и базовый рабочий процесс",
    type: "YouTube-плейлист",
    youtubeUrl: "https://youtu.be/BMo29Gkx8K0?si=6yh2OJcZP3vrtkw7",
  },
  {
    description:
      "Курс о переиспользуемых компонентах, порталах, Radix UI и Storybook — от API компонента до изолированной разработки и документации.",
    image: "/modal-createportal-radix-ui-storybook-cover.png",
    status: "Открытый фрагмент появится позже",
    title: "Современная разработка компонентов",
    type: "Закрытый курс",
  },
];

export default function CourseCatalog() {
  return (
    <section className={s.courses} id="courses">
      <div className={s.header}>
        <h2>Видео-курсы</h2>
      </div>
      <div className={s.courseList}>
        {courses.map((course) => (
          <article className={s.course} key={course.title}>
            {course.youtubeUrl ? (
              <a
                aria-label={`Смотреть «${course.title}» на YouTube`}
                className={s.coverLink}
                href={course.youtubeUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Image
                  alt={`Обложка курса «${course.title}»`}
                  fill
                  sizes="(max-width: 820px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  src={course.image}
                />
                <span aria-hidden="true" className={s.coverAction}>
                  Смотреть на YouTube ↗
                </span>
              </a>
            ) : (
              <div className={s.cover}>
                <Image
                  alt={`Обложка курса «${course.title}»`}
                  fill
                  sizes="(max-width: 820px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  src={course.image}
                />
              </div>
            )}
            <div className={s.courseContent}>
              <p className={s.courseType}>{course.type}</p>
              <h3>{course.title}</h3>
              <p className={s.description}>{course.description}</p>
              <div className={s.actions}>
                {course.youtubeUrl ? (
                  <a href={course.youtubeUrl} rel="noreferrer" target="_blank">
                    Смотреть на YouTube <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className={s.status}>{course.status}</p>
                )}
                {course.materialStatus ? (
                  <p className={s.materialPending}>{course.materialStatus}</p>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
