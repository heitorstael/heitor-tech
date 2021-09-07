<template>
  <section id="landing-page">
    <div :class="['greetings', { mobile: $device.isMobileOrTablet }]">
      <img
        v-if="$device.isMobileOrTablet"
        src="/img/circle.png"
        alt="Circles"
        class="circles-img"
      />
      <section class="saluting">
        <h1>Hey there! I’m Heitor.</h1>
        <h1>Full stack web developer from<br />Nova Friburgo, RJ - Brazil.</h1>
      </section>
      <section class="work-summary">
        <h2>
          I always work to build applications that makes the user’s
          <br v-if="$device.isDesktop" />experience the most pleasant and
          intuitive as possible.
        </h2>
      </section>
      <a href="mailto:heitorstael@live.com">
        <button type="button">Contact me</button>
      </a>
      <img
        v-if="$device.isMobileOrTablet"
        src="/img/rectangle.png"
        alt="Rectangles"
        class="rectangles-img"
      />
    </div>
    <div v-if="$device.isDesktop" class="greetings-illustration">
      <programmer-illustration width="48vw" height="48vh" />
    </div>
  </section>
</template>

<script>
  import ProgrammerIllustration from "~/components/home/ProgrammerIllustration";

  export default {
    name: "Home",
    components: {
      ProgrammerIllustration,
    },
    layout: (ctx) => (ctx.$device.isMobileOrTablet ? "mobile" : "default"),
  };
</script>

<style lang="scss" scoped>
  #landing-page {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 76vh;
    margin: 0 auto;

    .greetings {
      display: flex;
      flex-flow: column wrap;
      justify-content: space-around;
      align-items: flex-start;
      width: 40%;
      height: 48vh;
      overflow: auto;

      .saluting {
        font-family: "FiraSans Regular";
        font-size: max(2.3vw, 16px);
        color: #000;
      }

      .work-summary {
        font-family: "FiraSans Regular";
        font-size: max(1.2vw, 10px);
        color: #747373;
      }

      button {
        font-family: "FiraSans Bold";
        font-size: max(1vw, 8px);
        color: #fff;
        background: #246eff;
        min-width: 80px;
        width: 11vw;
        min-height: 40px;
        height: 8vh;
        border-radius: 10px;

        &:hover,
        &:active {
          filter: brightness(0.85);
        }
      }
    }

    .greetings.mobile {
      width: 100%;
      height: 70vh;
      align-items: center;
      justify-content: space-between;

      .circles-img {
        align-self: flex-end;
        width: 34vw;
        height: auto;
      }

      .saluting {
        text-align: center;
        font-size: 22px;
      }

      .work-summary {
        text-align: center;
        font-size: 16px;
      }

      button {
        font-size: 14px;
        width: 150px;
        height: 60px;
      }

      .rectangles-img {
        align-self: flex-start;
        width: 15vw;
        height: auto;
      }
    }

    .greetings-illustration {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 60%;
    }
  }
</style>
