<template>
    <section id="external-links">
        <h1>Read More</h1>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/Semantic_HTML" target="_blank">Wikipedia</a></li>
            <li><a href="https://web.dev/learn/html/semantic-html/" target="_blank">Web Dev</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics" target="_blank">MDN Web Docs</a></li>
        </ul>
    </section>
</template>

<style>
#external-links {
  padding: 50px 0;
  text-align: center;
}

#external-links h1 {
    color: #E0E0E0;
}
#external-links ul {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}

#external-links li {
  text-align: center;
  padding: 20px;
}

#external-links li a {
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #fbfbfb;
  background-color: #00ad9900;
  font-weight: 700;
  color: #000;
  border-radius: 6px;
  font-size: 18px;
  text-decoration: none;
  transition: background-color .3s,color .3s;
}

@media (prefers-color-scheme: light) {
  #external-links h1 {
    color: #000;
  }

  #external-links {
    background-color: #fcfcfc;
  }

  #external-links li a {
    border-color: #000;
  }
}
</style>