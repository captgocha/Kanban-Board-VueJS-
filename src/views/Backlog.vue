<template>
  <div class="backlog-view">
    <NewItemForm></NewItemForm>
    <div
      class="card"
      v-for="item in items"
      :key="item.id"
    >
      <div class="card-block">
        <h5 class="card-title">
          <span class="text-muted">#{{ item.id }}</span>
          {{ item.text }}
          <span :class="badgeClass(item)">{{ badgeText(item) }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const badgeDetail = {
  todo: {
    text: 'В работе',
    class: 'badge badge-light'
  },
  inProgress: {
    text: 'На проверке',
    class: 'badge badge-info'
  },
  done: {
    text: 'Выполнено',
    class: 'badge badge-success'
  },
};

export default {
  name: 'Backlog',
  components: {
    NewItemForm: () => import('@/components/NewItemForm')
  },
  computed: mapState({
    items: s => [...s.items.todo, ...s.items.inProgress, ...s.items.done]
  }),
  methods: {
    itemLane(item) {
      if (this.$store.state.items.todo.includes(item)) {
        return 'todo';
      } else if (this.$store.state.items.inProgress.includes(item)) {
        return 'inProgress';
      } else {
        return 'done';
      }
    },
    badgeClass(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].class;
    },
    badgeText(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].text;
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  margin-top: 16px;
}

.card-block {
  padding: 13px 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-title {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-muted {
  margin-right: 10px;
}

.badge {
  margin-left: 10px;
}
</style>
