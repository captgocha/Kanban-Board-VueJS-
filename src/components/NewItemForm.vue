<template>
  <div class="add-item">
    <form 
      action="#"
      method="post"
      v-on:submit.prevent="submitForm"
    >
      <input
        type="text"
        placeholder="Добавить новую задачу в журнал..."
        v-model="itemText"
      >
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewItemForm',
  data() {
    return {
      itemText: ''
    }
  },
  methods: {
    submitForm() {
      if (this.itemText) {
        this.$store.commit('addItem', {
          text: this.itemText
        })
      }

      this.itemText = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.add-item {
  margin-top: 30px;
  margin-bottom: 40px;
}

.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid #adb5bd;
  width: 100%;
  padding: 5px 0;
  transition: all 0.25s;
  background: inherit;
  color: #000;
  cursor: pointer;
}

.add-item input:focus {
  border-bottom-color: #4582EC;
}
</style>
