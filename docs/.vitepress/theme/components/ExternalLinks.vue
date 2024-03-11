<template>
  <div id="external-links">
    <h1>Read More</h1>
    <ul>
      <li>
        <a href="https://en.wikipedia.org/wiki/Semantic_HTML" target="_blank"
          >Wikipedia</a
        >
      </li>
      <li>
        <a href="https://web.dev/learn/html/semantic-html/" target="_blank"
          >Web Dev</a
        >
      </li>
      <li>
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
          target="_blank"
          >MDN Web Docs</a
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
#external-links {
  padding: 50px 0;
  text-align: center;

  h1 {
    color: var(--text-color);
  }

  ul {
    display: flex;
    text-align: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    text-align: center;
    padding: 20px;

    a {
      display: inline-block;
      padding: 10px 20px;
      border: 2px solid #fbfbfb;
      background-color: #00ad9900;
      font-weight: 700;
      color: var(--text-color);
      border-radius: 6px;
      font-size: 18px;
      text-decoration: none;
      transition: background-color 0.3s, color 0.3s;

      &:hover {
        background-color: #fbfbfb;
        color: #161616 !important;
      }

      &:active {
        background-color: #ffffff;
        color: #161616 !important;
      }
    }
  }
}

@media (prefers-color-scheme: light) {
  #external-links {
    background-color: #fcfcfc;

    li a {
      border-color: #000;

      &:hover {
        border-color: #2f2f2f;
        background-color: #121212;
        color: #ffffff !important;
      }
    }
  }
}
</style>
