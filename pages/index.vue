<template>
  <section id="landing-page">
    <div class="greetings">
      <section class="saluting">
        <h1>Hey there! I’m Heitor.</h1>
        <h1>Full stack web developer from<br />Nova Friburgo, RJ - Brazil.</h1>
      </section>
      <section class="work-summary">
        <h2>
          I always work to build applications that makes the user’s<br />experience
          the most pleasant and intuitive as possible.
        </h2>
      </section>
      <a href="mailto:heitorstael@live.com">
        <button type="button">Contact me</button>
      </a>
    </div>
    <div class="greetings-illustration">
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
    layout: ({ isMobile }) => (isMobile ? "mobile" : "default"),
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

      .saluting {
        font: 2.3vw "FiraSans Regular";
        color: #000;
      }

      .work-summary {
        font: 1.2vw "FiraSans Regular";
        color: #747373;
      }

      button {
        font: 1vw "FiraSans Bold";
        color: #fff;
        background: #246eff;
        width: 11vw;
        height: 8vh;
        border-radius: 10px;

        &:hover,
        &:active {
          filter: brightness(0.85);
        }
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
