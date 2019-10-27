<template>
  <div id="logo" style="display: flex; justify-content: space-between; align-items: center">
    <img src="../assets/logo-test.png" alt="Ollert-Logo">
    <div style="margin: 30px 65px; background-color: rgba(255, 255, 255, 0.4); padding: 15px; border-radius: 10px;">
      <div style="width: 325px; display: flex; justify-content: space-between; align-items: center">
        <div id="add-container">
          <small style="color: rgba(0, 0, 0, 0.6); font-style: italic; margin-bottom: 5px; text-align: left;" :style="message === '**Priority cannot be blank' ? 'color: red' : false">{{message}}</small>
          <select v-model="todo.priority" style="height: 30px; width: 200px">
            <option 
              v-for="(priority, i) in priorities"
              :key="i"
              :value="priority"
            >{{priority}}</option>
          </select>
        </div>
        <i @click="addTodo" style="color: #0076C2" class="add-btn" :class="!isLoading ? 'fas fa-plus-circle' : 'fas fa-spinner'"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  data() {
    return {
      count: 0,
      message: 'Choose priority:',
      todo: {
        priority: null,
        editMode: false
      },
      priorities: ['Low-Priority', 'Medium-Priority', 'High-Priority', 'Urgent!']
    }
  },
  methods: {
    addTodo() {
      if (!this.todo.priority) {
        this.message = '**Priority cannot be blank'
      } else {
        this.count++;
        this.$store.dispatch('addTodo', { count: this.count, newTodo: this.todo });
        this.message = 'Choose priority:'
        this.todo = { editMode: false };
      };
    },
  }
}
</script>

<style>

</style>