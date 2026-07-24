const fallbackSiteUrl = "https://technical-educator.vercel.app";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl,
);
