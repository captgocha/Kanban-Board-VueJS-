<template>
  <div class="menu-bar">
    <div class="btn-group" role="group" aria-label="Menu bar">
      <router-link
        v-for="item in menuItems"
        :class="buttonClass(item.path)"
        :key="item.id"
        :to="item.path"
        :exact="item.exact"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  data() {
    return {
      menuItems: [
        {
          title: 'Доска',
          path: '/board',
          exact: true,
          id: 1
        },
        {
          title: 'Журнал задач',
          path: '/backlog',
          exact: false,
          id: 2
        }
      ]
    }
  },
  methods: {
    buttonClass(path) {
      return {
        'btn': true,
        'btn-primary': this.$route.path === path,
        'btn-secondary': this.$route.path !== path
      }
    }
  }
}
</script>

<style scoped>
.menu-bar {
  margin-bottom: 16px;
}
</style>
