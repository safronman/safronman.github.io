"use client";

import Image from "next/image";
import { useState } from "react";
import PlayIcon from "@/app/play-icon/play-icon";
import s from "./teaching-video.module.css";

const videoUrl = "https://youtu.be/enwgDI-we_U";
const embedUrl =
  "https://www.youtube-nocookie.com/embed/enwgDI-we_U?autoplay=1&rel=0";

export default function TeachingVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={s.video}>
      <div className={s.frame}>
        {isPlaying ? (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={s.player}
            src={embedUrl}
            title="Фрагмент практического занятия по теме:Auth. Работа useEffect"
          />
        ) : (
          <button
            aria-label="Воспроизвести фрагмент занятия на YouTube"
            className={s.preview}
            onClick={() => setIsPlaying(true)}
            type="button"
          >
            <Image
              alt="Обложка фрагмента занятия"
              fill
              priority={false}
              sizes="(max-width: 820px) 100vw, 50vw"
              src="/video/video-lesson-auth-cover.png"
            />
            <span aria-hidden="true" className={s.play}>
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
      <a
        className={s.fallbackLink}
        href={videoUrl}
        rel="noreferrer"
        target="_blank"
      >
        Смотреть фрагмент занятия <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
