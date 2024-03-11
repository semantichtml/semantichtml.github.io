import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "en-US",
  title: "Semantic HTML",
  description: "The Documentation about Semantic HTML",

  head: [
    ['meta', { name: 'author', content: 'Gabriel Cozmaa' }],
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
})
