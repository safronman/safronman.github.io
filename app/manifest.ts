import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Technical Educator — Frontend-направление",
    short_name: "Technical Educator",
    description: "Портфолио технического эксперта по обучению.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f7fa",
    theme_color: "#f7f7fa",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
