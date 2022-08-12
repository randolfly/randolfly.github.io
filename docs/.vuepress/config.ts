import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "天策",
  description: "银鞍照白马，飒沓如流星",

  base: "/",

//   theme: hopeTheme({

//   }),
//   theme, 
  theme: hopeTheme({
    hostname: "https://randolfly.github.io/",

    author: {
        name: "randolf",
        url: "https://randolfly.github.io/",
    },
    sidebar: {
        "/control/": "structure",
        "/math/": "structure",
        "/robot/": "structure",
        "/paper/": "structure", 
        "/physics/": "structure",
        "/tool/": "structure",
        "/": "structure"
    },

    iconAssets: "iconfont",

    logo: "/logo.svg",
    
    repo: "randolfly/randolfly.github.io",

    // docsDir: "demo/src",

    // footer: "満月は照らす獣を選んでる",

    displayFooter: true,

    pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],

    blog: {
        description: "満月は照らす獣を選んでる",
        intro: "/intro.html",
        medias: {
        Email: "mailto:email@1665718426@qq.com",
        GitHub: "https://github.com/randolfly",
        Steam: "https://steamcommunity.com/id/randolfly/",
        },
    },

    encrypt: {
        config: {
        "/guide/encrypt.html": ["235711"],
        },
    },

    plugins: {
        blog: {
            autoExcerpt: true,
        },

        // 如果你不需要评论，可以直接删除 comment 配置，
        // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
        // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
        comment: {
        /**
         * Using Giscus
         */
            provider: "Giscus",
            repo: "randolfly/blog-comment",
            repoId: "R_kgDOHzgaZw",
            category: "Announcements",
            categoryId: "DIC_kwDOHzgaZ84CQwMN",

        /**
         * Using Twikoo
         */
        // provider: "Twikoo",
        // envId: "https://twikoo.ccknbc.vercel.app",

        /**
         * Using Waline
         */
        // provider: "Waline",
        // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        },

        mdEnhance: {
            // enableAll: true,
            tex: true,
            mark: true,
            footnote: true,
            tasklist: true,
        },

        components: ["PDF"]
    },
  })
  
});
