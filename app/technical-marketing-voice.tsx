import type { LucideIcon } from "lucide-react";
import { MessagesSquare, PenLine, Presentation, Video } from "lucide-react";
import styles from "./technical-marketing-voice.module.css";

type CommunicationFormat = {
  description: string;
  icon: LucideIcon;
  title: string;
};

const communicationFormats: CommunicationFormat[] = [
  {
    description:
      "Провожу содержательные эфиры и презентации, где сложные темы становятся понятными для аудитории.",
    icon: Presentation,
    title: "Вебинары",
  },
  {
    description:
      "Записываю Reels и компактные объяснения, которые быстро раскрывают техническую ценность темы.",
    icon: Video,
    title: "Короткие видео",
  },
  {
    description:
      "Отвечаю на вопросы один на один, снимаю сомнения и помогаю выбрать подходящий формат обучения.",
    icon: MessagesSquare,
    title: "Диалог с клиентами",
  },
  {
    description:
      "Даю техническую экспертизу для постов и материалов: уточняю смыслы, примеры и формулировки.",
    icon: PenLine,
    title: "Поддержка контента",
  },
];

export default function TechnicalMarketingVoice() {
  return (
    <section className={styles.voice} id="technical-marketing-voice">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <h2>Технический голос для маркетинга</h2>
          <p>
            Помогаю говорить о техническом продукте точно и понятно: от вебинара
            и короткого видео до личного ответа клиенту.
          </p>
        </header>

        <ul className={styles.list}>
          {communicationFormats.map(({ description, icon: Icon, title }) => (
            <li className={styles.item} key={title}>
              <Icon aria-hidden="true" strokeWidth={1.65} />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
