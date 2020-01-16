<template>
  <div id="app">
    <div class="page-header">
      <h1>Канбан доска</h1>
      <p class="lead">Тестовое задание на разработку канбан доски с использованием Vue.js</p>
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

.page-header {
  margin-top: 30px;
}

.page-header h1 {
  font-weight: 300;
}

.card {
  margin-bottom: 10px;
}

.card:last-child {
  margin-bottom: 25px;
}

.card-block {
  padding: 15px;
}
</style>
