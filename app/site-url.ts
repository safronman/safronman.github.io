const fallbackSiteUrl = "https://safronman.github.io";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
);
