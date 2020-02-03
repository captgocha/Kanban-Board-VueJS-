<template>
  <div class="add-item">
    <form 
      action="#"
      method="post"
      v-on:submit.prevent="submitForm"
    >
      <input
        type="text"
        class="form-control"
        placeholder="Добавить новую задачу в журнал..."
        v-model="itemText"
      >
      <span class="text-muted" v-show="itemText.length > 0">enter</span>
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

form {
		position: relative;
	}

.form-control {
  font-size: 16px;
  padding-right: 50px;
}

span {
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  position: absolute;
  top: 19px;
  right: 0;
}
</style>
