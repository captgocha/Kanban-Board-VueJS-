<template>
  <div id="app">
    <div class="page-header">
      <h1>Канбан доска</h1>
      <p class="lead">Приложение написано с использованием VueJS</p>
    </div>
    <MenuBar></MenuBar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    MenuBar: () => import('@/components/MenuBar')
  }
}
</script>

<style lang="scss" scoped>
#app {
  text-align: center;
}

.page-header {
  margin-top: 30px;
}

.page-header h1 {
  font-weight: 300;
}
</style>
