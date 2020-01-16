<template>
  <div class="card">
    <h3 class="card-header">{{ title }}</h3>
    <div class="card-body">
      <draggable v-model="draggables" :options="{ group: 'default' }">
        <div v-for="item in items" :key="item.id">
          <TaskLaneItem :item="item"></TaskLaneItem>
        </div>
      </draggable>
    </div>
    <div class="card-footer text-muted">
      {{ itemCount }}
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {  
  name: 'TaskLane',
  components: {
    TaskLaneItem: () => import('@/components/TaskLaneItem'),
    draggable: Draggable
  },
  props: {
    items: Array, // Массив с данными из хранилища Vuex
    title: String, // Заголовок полосы
    id: String // id полосы
  },
  computed: {
    itemCount() {
      if (!this.items) return '';
      if (this.items.length === 0) return '0 задач';
      if (this.items.length === 1) return '1 задача';
      return `${this.items.length} задачи`;
    },
    draggables: {
      get() {
        return this.items;
      },
      set(items) {
        this.$store.commit('updateItems', {
          items,
          id: this.id
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 15px;
}

.card-body > * {
  min-height: 50px;
}
</style>
