<template>
  <main>
    <header>
      <h1>
        <a href="/" rel="home">heitor<span>.tech</span></a>
      </h1>
    </header>
    <Nuxt />
    <footer>
      <address>
        <a href="https://twitter.com/heitorstael" target="_blank">
          <fa-icon :icon="['fab', 'twitter']" size="lg" />
        </a>
        <a href="https://instagram.com/heitorstael/" target="_blank">
          <fa-icon :icon="['fab', 'instagram']" size="lg" />
        </a>
        <a href="https://github.com/heitorstael" target="_blank">
          <fa-icon :icon="['fab', 'github']" size="lg" />
        </a>
        <a href="https://linkedin.com/in/heitorstael/" target="_blank">
          <fa-icon :icon="['fab', 'linkedin-in']" size="lg" />
        </a>
      </address>
      <small
        >&copy; {{ new Date().getFullYear() }} Heitor Stael. Built using
        NuxtJS.</small
      >
    </footer>
  </main>
</template>

<style lang="scss" scoped>
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 12vh;
    width: 90%;
    margin: 0 auto;

    h1 {
      font: 1.8em "Alata Regular";
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
    height: 12vh;
    width: 90%;
    margin: 0 auto;

    address {
      display: flex;
      justify-content: space-between;
      width: 11%;

      a {
        font-size: 1.2vw;
        color: #747373;
      }
    }

    small {
      margin: 0.3em 0;
      font: 1vw "FiraSans Regular";
    }
  }
</style>
