<template>
  <aside>
    <input id="check" v-model="isMenuOpened" type="checkbox" />
    <label for="check">
      <div class="menu">
        <span class="stairs" />
      </div>
    </label>
    <nav :class="['menu-options', { 'full-width': isMobile }]">
      <ul
        v-show="isMenuOpened"
        :class="['options', { 'font-mobile': isMobile }]"
      >
        <li><a href="/">Home</a></li>
        <li><a href="/">Portfolio</a></li>
        <li><a href="/">Résumé</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  export default {
    props: {
      isMobile: Boolean,
    },
    data() {
      return {
        isMenuOpened: false,
      };
    },
  };
</script>

<style lang="scss" scoped>
  input {
    display: none;
  }

  // menu container
  .menu {
    width: 34px;
    height: 28px;
    z-index: 10;
    cursor: pointer;
    // position: relative;
  }

  // middle line
  .stairs {
    position: relative;
    display: block;
    width: 18px;
    height: 1px;
    top: 10px;
    float: right;
    transform: rotateY(180deg);
    background: #000;
    transition: 0.3s ease-in-out;
  }

  // first line
  .stairs:before {
    content: "";
    display: block;
    width: 150%;
    height: 100%;
    position: absolute;
    background: #000;
    transition: 0.3s ease-in-out;
  }

  .stairs:before {
    top: -8px;
  }

  // last line
  .stairs:after {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    position: absolute;
    background: #000;
    transition: 0.3s ease-in-out;
  }

  .stairs:after {
    bottom: -8px;
  }

  // animations
  input:checked ~ label .stairs {
    transform: rotate(-45deg);
    background: #fff;
    z-index: 11;
    height: 3px;
    width: 20px;
  }

  input:checked ~ label .stairs:before {
    transform: rotate(-90deg);
    top: 0;
    background: #fff;
    z-index: 11;
  }

  input:checked ~ label .stairs:after {
    transform: rotateY(180deg);
    top: 0px;
    right: -9.4px;
    background: #fff;
    z-index: 11;
  }

  // menu options
  .menu-options {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 0px;
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    background-color: #000;
    color: #fff;
    z-index: 10;

    .options {
      position: absolute;
      top: 12vh;
      height: 50vh;
      width: 80%;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-evenly;

      font-family: "FiraSans Bold";
      font-size: max(2vw, 16px);

      &.font-mobile {
        font-size: 30px;
      }

      li:hover {
        text-decoration: underline;
        text-underline-offset: 6px;
      }
    }
  }

  #check:checked ~ .menu-options {
    width: 22vw;
    box-shadow: -1px 0px 9px 0px rgba(0, 0, 0, 0.75);

    &.full-width {
      width: 100vw;
    }
  }
</style>
