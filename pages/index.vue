<template>
  <main>
    <aside>
      <h1>profile pic</h1>
      <h1>name</h1>
      <h1>bio</h1>
      <span>follow me at</span>
      <ul>
        <li v-for="(item, i) in menuItems" :key="i">
          <component :is="item.icon" size="2x"/>
        </li>
      </ul>
    </aside>
    <section></section>
  </main>
</template>

<style lang="scss" scoped>
  @use "~/assets/scss/homepage.scss";
</style>

<script lang="ts" setup>
  const menuItems = ref([
    {
      icon: resolveComponent('HomeIcon'),
    },
    {
      icon: resolveComponent('UsersIcon'),
    },
    {
      icon: resolveComponent('LayersIcon'),
    },
  ])
</script>
