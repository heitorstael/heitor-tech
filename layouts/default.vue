<template>
  <section>
    <header>
      <h1>heitor<span>.tech</span></h1>
    </header>
    <Nuxt />
    <footer>
      <address>
        <a href="https://twitter.com/heitorstael" target="_blank">
          <fa-icon :icon="['fab', 'twitter']" size="lg" />
        </a>
        <a href="https://instagram.com/heitorstael" target="_blank">
          <fa-icon :icon="['fab', 'instagram']" size="lg" />
        </a>
        <a href="https://github.com/heitorstael" target="_blank">
          <fa-icon :icon="['fab', 'github']" size="lg" />
        </a>
        <a href="https://linkedin.com/in/heitorstael/" target="_blank">
          <fa-icon :icon="['fab', 'linkedin-in']" size="lg" />
        </a>
      </address>
      <p>
        &#169; {{ new Date().getFullYear() }} Heitor Stael. Built using NuxtJS.
      </p>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 12%;
    width: 90%;
    margin: 0 auto;

    h1 {
      font: 1.8em 'Alata Regular';
      color: black;

      span {
        color: #246eff;
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 12%;
    width: 90%;
    margin: 0 auto;

    address {
      display: flex;
      justify-content: space-between;
      width: 11%;

      a {
        font-size: 1.2em;
        color: #747373;
      }
    }

    p {
      margin: 0.3em 0;
      font: 0.9em 'FiraSans Regular';
    }
  }
</style>
