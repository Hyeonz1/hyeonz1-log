const CONFIG = {
  // profile setting (required)
  profile: {
    name: "hyeonz1",
    image: "/hyeonz1.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Android Developer",
    bio: "Have interest in everything what my life has prepared for me.",
    email: "jhg050908@naver.com",
    linkedin: "",
    github: "Hyeonz1",
    instagram: "",
  },
  projects: [
    {
      name: `EEOS-Android`,
      href: "https://github.com/JNU-econovation/EEOS-AOS",
    },
    {
      name: `Forever-Android`,
      href: "https://github.com/JNU-econovation/forever/tree/android",
    },
  ],
  // blog setting (required)
  blog: {
    title: "hyeonz1",
    description: "welcome to hyeonz1-log!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log-bay-xi.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "Hyeonz1/hyeonz1-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
