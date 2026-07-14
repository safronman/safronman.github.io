"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./teaching-video.module.css";

const videoUrl = "https://youtu.be/4YF06mvcJ4k";
const embedUrl =
  "https://www.youtube-nocookie.com/embed/4YF06mvcJ4k?autoplay=1&rel=0";

export default function TeachingVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={styles.video}>
      <div className={styles.frame}>
        {isPlaying ? (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={styles.player}
            src={embedUrl}
            title="Фрагмент занятия: Auth flow with protected routes"
          />
        ) : (
          <button
            aria-label="Воспроизвести фрагмент занятия на YouTube"
            className={styles.preview}
            onClick={() => setIsPlaying(true)}
            type="button"
          >
            <Image
              alt="Временная обложка фрагмента занятия"
              fill
              priority={false}
              sizes="(max-width: 820px) 100vw, 50vw"
              src="/teaching-video-cover-v2.png"
            />
            <span aria-hidden="true" className={styles.play}>
              ▶
            </span>
            <span className={styles.previewLabel}>Фрагмент занятия</span>
          </button>
        )}
      </div>
      <a
        className={styles.fallbackLink}
        href={videoUrl}
        rel="noreferrer"
        target="_blank"
      >
        Открыть на YouTube <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
