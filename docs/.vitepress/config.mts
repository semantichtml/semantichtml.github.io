import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Semantic HTML",
  description:
    "This is a cool template for vitepress, it has a lot of features, and it's easy to use",

  themeConfig: {
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
        license: "GPL-3.0 license",
        info: "https://www.gnu.org/licenses/gpl-3.0.html",
      },

      sourcecode: {
        show: true,
        link: "https://github.com/semantichtml/semantichtml.github.io"
      },
    },
  },

  head: [
    ['meta', { name: 'author', content: 'Gabriel Cozma' }],
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'keywords', content: 'HTML, CSS, JavaScript, Web Development, Frontend,semantic html, Vue.js, web development, open source' }],
    
    // Open Graph / Facebook
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Semantic HTML' }],
    ['meta', { name: 'og:description', content: 'The Documentation about Semantic HTML' }],
    ['meta', { name: 'og:image', content: '/poster.png' }],
    ['meta', { name: 'og:url', content: 'https://semantichtml.github.io/' }],
    ['meta', { name: 'og:site_name', content: 'Semantic HTML' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:type', content: 'website' }],

    // Twitter / X
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Semantic HTML' }],
    ['meta', { name: 'twitter:description', content: 'The Documentation about Semantic HTML' }],
    ['meta', { name: 'twitter:url', content: 'https://semantichtml.github.io/' }],
    ['meta', { name: 'twitter:image', content: '/poster.png' }]
  ],
  sitemap: {
    hostname: "https://semantichtml.github.io/",
  },
});
