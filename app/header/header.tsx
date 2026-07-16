"use client";

import { useEffect, useState } from "react";
import s from "./header.module.css";

const navigationItems = [
  ["Работы", "work"],
  ["Преподавание", "teaching"],
  ["Подход", "approach"],
  ["Экспертиза", "expertise"],
  ["Контакты", "contacts"],
] as const;

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = navigationItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              Math.abs(first.boundingClientRect.top) -
              Math.abs(second.boundingClientRect.top),
          )[0];

        if (activeEntry) {
          setActiveSection(activeEntry.target.id);
        }
      },
      { rootMargin: "-20% 0px -65%", threshold: 0 },
    );

    for (const section of sections) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className={s.header}>
      <nav aria-label="Основная навигация" className={s.nav}>
        {navigationItems.map(([label, id]) => (
          <a
            aria-current={activeSection === id ? "location" : undefined}
            className={activeSection === id ? s.active : undefined}
            href={`#${id}`}
            key={id}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
