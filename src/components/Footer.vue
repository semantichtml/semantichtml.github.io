<template>
    <footer>
        <a id="source-code" href="https://github.com/semantichtml/semantichtml.github.io"><i class="fa-brands fa-github" /></a>
        <p id="credits">Made with <i class="fa-solid fa-heart" id="red"></i> by <a id="me" href="https://gabs.eu.org">Gabs</a></p>
        <p id="copyright">
            <router-link to="/developer">&copy; 2023 Gabs/Gabriel Cozma. All rights reserved.</router-link>

            </p>
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

<script lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const aboutBuild = ref("Website Build From: 06/10/2023 (Vue)");
    const isInfoPopupOpen = ref(false);

    const openInfoPopup = () => {
      isInfoPopupOpen.value = true;
    };

    const closeInfoPopup = () => {
      isInfoPopupOpen.value = false;
    };

    const handleEscKeyInfo = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeInfoPopup();
      }
    };

    onMounted(() => {
      document.addEventListener('keydown', handleEscKeyInfo);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', handleEscKeyInfo);
    });

    return {
      aboutBuild,
      isInfoPopupOpen,
      openInfoPopup,
      closeInfoPopup,
    };
  }
};
</script>