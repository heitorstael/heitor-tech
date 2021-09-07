<template>
  <main>
    <header>
      <h1>
        <a href="/" rel="home">heitor<span>.tech</span></a>
      </h1>
      <stairs-menu />
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
      <small>
        &copy; {{ new Date().getFullYear() }} Heitor Stael. Built with NuxtJS.
      </small>
    </footer>
  </main>
</template>

<script>
  import StairsMenu from "~/components/StairsMenu";
  export default {
    components: { StairsMenu },
  };
</script>

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
      min-width: 80px;

      a {
        font-size: max(1.2vw, 12px);
        color: #747373;
      }
    }

    small {
      margin: 0.3em 0;
      font-family: "FiraSans Regular";
      font-size: max(1vw, 10px);
    }
  }
</style>
