<template>
    <div class="popup-overlay">
      <div class="popup-content">
      <a @click="closeInfoPopup" class="close-button">×</a>
      <div class="info-popup">
        <!-- Website Information -->
        <div class="info-title">Website Information</div>
        <div class="info-description">
            This website is built with Vue.js and Vite, and it’s a part of the <a href="https://gabs.eu.org/aeolus"><b>Aeolus</b></a> family.
            <br><br>This website is also <b>open source</b>. You can find its source code <a href="https://github.com/semantichtml/semantichtl.github.io">here</a>.

            <br><br>
        </div>
        <div>
        </div>

        <!-- Build Number -->
        <div class="build-number">
          <h1>Build Number</h1>
          <p>This information is here in case there is an issue, or to see when was this build was made.
            <br><br>Build from: <code>02/01/2024</code>
            <br>Build type: <code>Stable</code></p>
        </div>

        <!-- Dependencies -->
        <div class="dependencies">
            <h1>Dependencies</h1>
            <div class="dependency-item"><b>vue</b> - 3.4.18</div>
            <div class="dependency-item"><b>vite</b> - 4.2.1</div>
            <div class="divider"></div>
            <div class="dependency-item"><b>vue-router</b> - 4.2.5</div>
            <div class="dependency-item"><b>typescript</b> - 5.3.2</div>
        </div>
        <!-- Aeolus Card -->
        <a class="aeolus-card" href="https://gabs.eu.org/aeolus">
          <div class="aeolus-card-elements">
          <h1>Aeolus</h1>
          <p>
            Made with <span id="heart">♥</span> by <span id="name">Gabs</span>
            </p>
          </div>
        </a>
    </div>
    </div>
    </div>
</template>
<style>
.build-number h1 {
        color: var(--text-color);
    }
    .build-number p {
        color: var(--text-color);
    }

.info-popup {
 width: 700px;
 margin: 35px;
 display: flex;
 flex-direction: column;
}

.info-title {
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 10px;
}

.info-description {
  font-size: 16px;
  margin-bottom: 15px;
  max-width: 510px;
}

.info-description a {
  font-size: 16px;
}

.build-number h1 {
  text-align: left;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 10px;
  color: var(--text-color);
}

.build-number p {
  width: 490px;
  color: var(--text-color);
}
/* CSS styles for the build number */
.build-number {
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}

/* CSS styles for the dependencies */
.dependencies {
  position: absolute;
  font-size: 14px;
  margin-left: 70%; /* Align to the right */
  text-align: left; /* Text alignment to the right */
  margin-top: 0; /* Add this to align to the top */
}

.dependencies h1 {
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 5px;
  color: var(--text-color);
}

.dependency-item {
  display: block;
  margin-right: 10px;
}

/* CSS styles for the horizontal line */
.divider {
  border-top: 1px solid #ccc;
  margin: 8px 0;
}

.aeolus-card {
  width: 102px;
  height: 67px;
  position: absolute;
  background-color: var(--aeolus-card);
  color: var(--text-color);
  margin-left: 69%;
  border-radius: 5%;
  margin-top: 29%;
  padding: 20px;
  text-align: center;
  align-items: center;
}

.aeolus-card-elements h1 {
    color: var(--text-color);
  margin-top: 10px;
  font-weight: 900;
  font-size: 23px;
  margin-bottom: -2px;
}

.aeolus-card-elements p {
  font-size: 9px;
}

.aeolus-card-elements {
  margin: 0 auto;
}

.aeolus-card-elements p #name {
  font-weight: 900;
}

.aeolus-card-elements p #heart {
  color: red;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000b5;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: var(--footer-bg);
  padding: 5px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  position: relative;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.close-button {
  position: absolute;
  top: 10px; 
  right: 15px;
  border-radius: 50%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #666;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  mounted() {
    document.addEventListener("keydown", this.handleEscKeyInfo);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.handleEscKeyInfo);
  },

  methods: {
    closeInfoPopup(): void {
      this.$router.push("/");
    },

    handleEscKeyInfo(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        this.closeInfoPopup();
      }
    },
  },
});
</script>