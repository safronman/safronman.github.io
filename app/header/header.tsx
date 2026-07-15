import s from "./header.module.css";

const navigationItems = [
  ["Работы", "#work"],
  ["Подход", "#approach"],
  ["Материалы", "#courses"],
  ["Экспертиза", "#technical-foundation"],
  ["Контакт", "#contacts"],
] as const;

export default function Header() {
  return (
    <header className={s.header}>
      <nav aria-label="Основная навигация" className={s.nav}>
        {navigationItems.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
