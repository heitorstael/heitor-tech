<template>
  <main>
    <header>
      <div id="header-items">
        <h1>
          <a href="/" rel="home">heitor<span>.tech</span></a>
        </h1>
        <stairs-menu is-mobile />
      </div>
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
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 12vh;
    width: 90%;
    margin: 0 auto;

    #header-items {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 50px;
      width: 100%;

      h1 {
        font: 1.8em "Alata Regular";
        color: black;

        span {
          color: #246eff;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 7vh;
    width: 90%;
    margin: 0 auto;

    address {
      display: flex;
      justify-content: space-evenly;
      width: 50%;

      a {
        font-size: 12px;
        color: #747373;
      }
    }

    small {
      margin: 0.3em 0;
      font: 12px "FiraSans Regular";
    }
  }
</style>
