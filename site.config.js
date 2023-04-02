const CONFIG = {
  // profile setting (required)
  profile: {
    name: "morethanmin",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "I develop everything using node.",
    email: "morethanmin.dev@gmail.com",
    linkedin: "morethanmin",
    github: "morethanmin",
    instagram: "",
  },
  projects: [
    {
      name: `dayu-morethan-log`,
      href: "https://github.com/diahayuiraw/dayu-morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "morethan-log",
    description: "welcome to morethan-log!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId : "1f41a18e75424ac491b3fb24a670f521",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "diahayuiraw/dayu-morethan-log",
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
}
module.exports = CONFIG
