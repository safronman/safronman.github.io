"use client";

import { House } from "lucide-react";
import { useEffect, useState } from "react";
import s from "./header.module.css";

const navigationItems = [
  ["Разработка", "experience"],
  ["Материалы", "work"],
  ["Подход", "approach"],
  ["Преподавание", "teaching"],
  ["Экспертиза", "expertise"],
  ["Контакты", "contacts"],
] as const;

export default function Header() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = navigationItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const viewportCenter = window.innerHeight / 2;
      const currentSection =
        sections.find((section) => {
          const { bottom, top } = section.getBoundingClientRect();
          return top <= viewportCenter && bottom > viewportCenter;
        }) ??
        sections
          .toReversed()
          .find(
            (section) => section.getBoundingClientRect().top <= viewportCenter,
          );

      setActiveSection(currentSection?.id ?? null);
    };

    let animationFrame: number | null = null;
    const handleScroll = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrame = null;
      });
    };

    updateActiveSection();
    window.addEventListener("hashchange", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("hashchange", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <a aria-label="Главная" className={s.home} href="#top" title="Главная">
          <House aria-hidden="true" strokeWidth={1.8} />
        </a>
        <nav aria-label="Основная навигация" className={s.nav}>
          {navigationItems.map(([label, id]) => (
            <a
              aria-current={activeSection === id ? "location" : undefined}
              className={activeSection === id ? s.active : undefined}
              href={`#${id}`}
              key={id}
              onClick={() => setActiveSection(id)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
