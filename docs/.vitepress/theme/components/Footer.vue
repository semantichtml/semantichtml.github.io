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

<style>
footer {
  text-align: center;
  background-color: var(--footer-bg);
  padding: 15px;
}

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
  color: var(--text-color) !important;
}

#source-code code {
  font-weight: 700;
}
</style>