import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "主题演示",
  description: "vuepress-theme-hope 的演示",

  base: "/",

//   theme: hopeTheme({

//   }),
  theme
});
