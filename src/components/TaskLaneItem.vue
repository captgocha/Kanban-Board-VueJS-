<template>
  <div class="card task-lane-item">
    <div class="card-block">
      <h5 class="card-title">
        <span class="text-muted">#{{ item.id }}</span>
        {{ item.text }}
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskLaneItem',
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
.card.task-lane-item {
  padding: 12px 0;
  background: #fff;
  color: #000;
}

.card-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-title {
  margin: 0;
}
</style>
