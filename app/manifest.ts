import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Валерий Сафронов — Senior Frontend Developer, преподаватель и руководитель обучения",
    short_name: "Валерий Сафронов",
    description:
      "Портфолио Валерия Сафронова: frontend-разработка, преподавание и руководство обучением.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7fa",
    theme_color: "#f7f7fa",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
