<template>
  <footer>
    <a
      id="source-code"
      href="https://github.com/semantichtml/semantichtml.github.io"
      ><i class="fa-brands fa-github"
    /></a>
    <p id="credits">
      Made with <i class="fa-solid fa-heart" id="red"></i> by
      <a id="me" href="https://gabs.eu.org">Gabs</a>
    </p>
    <p id="copyright">&copy; 2023 Gabs/Gabriel Cozma. All rights reserved.</p>
  </footer>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css");

footer {
  text-align: center;
  border-radius: 40px 40px 0 0;
  background-color: var(--footer-bg);
  color: var(--text-color);
  padding: 15px;

  #red {
    color: #dd2e44;
  }

  #me {
    font-weight: 900;
    text-decoration: underline;
  }

  #credits {
    font-weight: 700;
  }

  #copyright {
    font-weight: 600;
    color: var(--text-color);
  }

  a {
    text-decoration: none;
    color: var(--text-color);
  }

  #source-code {
    font-size: 25px;
  }

  @media print {
    display: none;
  }
}
</style>
