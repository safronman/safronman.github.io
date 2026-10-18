import s from './work-experience.module.css';

const projects = [
  {
    title: 'Система управления обучением',
    start: '2023-11',
    end: '2026-03',
    period: 'Ноябрь 2023 — март 2026',
    description:
      'LMS для студентов и менторов: уроки, задания, экзамены, аналитика прогресса, расписание и инструменты преподавателей в едином интерфейсе.',
    contributions: [
      'Разрабатывал и сопровождал микрофронтендную архитектуру для независимой работы команд и масштабирования продукта.',
      'Внедрил дизайн-систему: унифицировал UI и сократил дублирование кода за счёт переиспользуемых компонентов.',
      'Оптимизировал рендеринг и кэширование данных, внедрил оптимистичные обновления для более отзывчивого интерфейса.',
      'Проводил менторинг разработчиков, помогал повышать качество кода и принимать взвешенные инженерные решения.',
    ],
  },
  {
    title: 'Платформа лицензирования и продажи битов',
    start: '2019-07',
    end: '2023-11',
    period: 'Июль 2019 — ноябрь 2023',
    description:
      'Международная музыкальная площадка с каталогом битов, автоматизированными продажами, генерацией договоров и инструментами для битмейкеров.',
    contributions: [
      'Развивал монорепозиторий с общими UI-компонентами, бизнес-логикой и конфигурациями окружений.',
      'Реализовал путь от выбора бита до оплаты: каталог, покупку лицензий, корзину, оформление заказа и интеграции с платёжными сервисами.',
      'Разрабатывал мультиязычность, темизацию, кастомизацию, аналитику и адаптивный UI; унифицировал работу с треками, лайками и избранным.',
      'Сократил размер бандла за счёт разделения кода, отложенной загрузки и оптимизации зависимостей.',
    ],
  },
] as const;

export default function WorkExperience() {
  return (
    <section
      aria-labelledby="experience-title"
      className={s.experience}
      id="experience"
    >
      <div className={s.inner}>
        <header className={s.intro}>
          <h2 id="experience-title">Разработка</h2>
        </header>
        <div className={s.employment}>
          <div className={s.company}>
            <h3>IT-INCUBATOR</h3>
            <p>Senior Frontend Developer</p>
            <p className={s.tenure}>
              <time dateTime="2019-07">Июль 2019</time>
              -
              <time dateTime="2026-10">Октябрь 2026</time>
            </p>
          </div>
          <div className={s.projects}>
            {projects.map((project) => (
              <article className={s.project} key={project.title}>
                <p className={s.period}>
                  <time dateTime={project.start}>
                    {project.period.split(' — ')[0]}
                  </time>
                  {' — '}
                  <time dateTime={project.end}>
                    {project.period.split(' — ')[1]}
                  </time>
                </p>
                <h4>{project.title}</h4>
                <p className={s.description}>{project.description}</p>
                <ul className={s.contributions}>
                  {project.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
