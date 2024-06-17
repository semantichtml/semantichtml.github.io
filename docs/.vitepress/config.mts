import { defineConfig } from "vitepress";
import { imgMark } from "@mdit/plugin-img-mark";
import { footnote } from "@mdit/plugin-footnote";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Semantic HTML",
  description: "The Documentation about Semantic HTML",

  themeConfig: {
    minimal: true,
    author: "Semantic HTML Documentation",
    nav: {
      show: false,
    },
    footer: {
      copyright: true,
      poweredBy: true,

      madeby: {
        show: true,
        name: "Gabs",
        link: "https://gxbs.me",
      },

      copyleft: {
        show: true,
        license: "GPL-3.0 License",
        info: "https://www.gnu.org/licenses/gpl-3.0.html",
      },

      sourcecode: {
        show: true,
        link: "https://github.com/semantichtml/semantichtml.github.io",
      },
    },
  },

  markdown: {
    config: (md) => {
      md.use(imgMark);
      md.use(footnote);
    },
  },

  head: [
    ["meta", { name: "author", content: "Gabriel Cozma" }],
    ["link", { rel: "icon", href: "/icon.png" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    [
      "meta",
      {
        name: "keywords",
        content:
          "HTML, CSS, JavaScript, Web Development, Frontend,semantic html, Vue.js, web development, open source",
      },
    ],

    // Open Graph / Facebook
    ["meta", { name: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: "Semantic HTML" }],
    [
      "meta",
      {
        name: "og:description",
        content: "The Documentation about Semantic HTML",
      },
    ],
    ["meta", { name: "og:image", content: "/poster.png" }],
    ["meta", { name: "og:url", content: "https://semantichtml.github.io/" }],
    ["meta", { name: "og:site_name", content: "Semantic HTML" }],
    ["meta", { name: "og:locale", content: "en_US" }],
    ["meta", { name: "og:type", content: "website" }],

    // Twitter / X
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: "Semantic HTML" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: "The Documentation about Semantic HTML",
      },
    ],
    [
      "meta",
      { name: "twitter:url", content: "https://semantichtml.github.io/" },
    ],
    ["meta", { name: "twitter:image", content: "/poster.png" }],
  ],
  sitemap: {
    hostname: "https://semantichtml.github.io/",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "sass:color";
          $color-accent: #8dc25f;
          $bg-color-l: color.scale($color-accent, $lightness: 90%, $saturation: -85%);
          `,
        },
      },
    },
  },
});
