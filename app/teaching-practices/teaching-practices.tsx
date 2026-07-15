import {CircleQuestionMark, Handshake, MessageCircleMore, Workflow,} from 'lucide-react';
import styles from './teaching-practices.module.css';
import TeachingVideo from '@/app/teaching-practices/teaching-video/teaching-video';

const practices = [
  [CircleQuestionMark, 'Вопросы вместо монолога'],
  [Workflow, 'Реальные сценарии'],
  [MessageCircleMore, 'Живая обратная связь'],
  [Handshake, 'Комфортная коммуникация'],
] as const;

export default function TeachingPractices() {
  return (
    <section className={styles.teaching}>
      <div className={styles.content}>
        <div>
          <h2>Преподавание, которое вовлекает</h2>
          <p>
            На занятии важно не только объяснить тему, но и дать человеку
            возможность проверить своё понимание, задать вопрос и применить идею
            в реальной ситуации.
          </p>
        </div>
        <ul className={styles.practices}>
          {practices.map(([Icon, label]) => (
            <li key={label}>
              <Icon aria-hidden="true" strokeWidth={1.7}/>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
      <TeachingVideo/>
    </section>
  );
}
