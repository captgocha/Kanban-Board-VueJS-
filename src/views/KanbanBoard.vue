<template>
  <div class="board">
    <div class="row">
        <div class="col-md">
          <TaskLane id="todo" title="В работе" :items="todoItems"></TaskLane>
        </div>
        <div class="col-md">
          <TaskLane id="inProgress" title="На проверке" :items="inProgressItems"></TaskLane>
        </div>
        <div class="col-md">
          <TaskLane id="done" title="Выполнено" :items="doneItems"></TaskLane>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'KanbanBoard',
  components: {
    TaskLane: () => import('@/components/TaskLane')
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    inProgressItems: s => s.items.inProgress,
    doneItems: s => s.items.done,
  })
}
</script>
