"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./course-catalog.module.css";

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
      "Запросы и мутации, кэширование, пагинация, обработка ошибок, авторизация и обновления в реальном времени. Публичное видео показывает формат полного курса.",
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

type Layout = "showcase" | "details";

export default function CourseCatalog() {
  const [layout, setLayout] = useState<Layout>("showcase");

  return (
    <section className={styles.courses} data-layout={layout} id="courses">
      <div className={styles.header}>
        <div>
          <h2>Видео-курсы, в которых теория становится практикой</h2>
          <p>
            Три образовательных продукта, которые можно открыть и оценить до
            первого разговора.
          </p>
        </div>
        <fieldset className={styles.switcher}>
          <legend className={styles.visuallyHidden}>
            Вариант представления видео-курсов
          </legend>
          <button
            aria-pressed={layout === "showcase"}
            className={layout === "showcase" ? styles.active : undefined}
            onClick={() => setLayout("showcase")}
            type="button"
          >
            Витрина
          </button>
          <button
            aria-pressed={layout === "details"}
            className={layout === "details" ? styles.active : undefined}
            onClick={() => setLayout("details")}
            type="button"
          >
            Подробно
          </button>
        </fieldset>
      </div>

      <div className={styles.courseList}>
        {courses.map((course) => (
          <article className={styles.course} key={course.title}>
            {course.youtubeUrl ? (
              <a
                aria-label={`Смотреть «${course.title}» на YouTube`}
                className={styles.coverLink}
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
                <span aria-hidden="true" className={styles.coverAction}>
                  Смотреть на YouTube ↗
                </span>
              </a>
            ) : (
              <div className={styles.cover}>
                <Image
                  alt={`Обложка курса «${course.title}»`}
                  fill
                  sizes="(max-width: 820px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  src={course.image}
                />
              </div>
            )}

            <div className={styles.courseContent}>
              <p className={styles.courseType}>{course.type}</p>
              <h3>{course.title}</h3>
              <p className={styles.description}>{course.description}</p>
              <div className={styles.actions}>
                {course.youtubeUrl ? (
                  <a href={course.youtubeUrl} rel="noreferrer" target="_blank">
                    Смотреть на YouTube <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <p className={styles.status}>{course.status}</p>
                )}
                {course.materialStatus ? (
                  <p className={styles.materialPending}>
                    {course.materialStatus}
                  </p>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
