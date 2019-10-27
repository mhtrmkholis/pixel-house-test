<template>
  <div style="background-color: #fff; margin-bottom: 15px; border-radius: 8px; box-shadow: rgba(0, 0, 0, 0.02) 6px 8px 0px 0px; cursor: pointer; display: flex; flex-direction: column; align-items: flex-start; padding: 15px">
    <div style="display: flex; justify-content: flex-end; width: 100%" @click="deleteTodo(todo.id)">
      <i class="delete fas fa-times-circle"></i>
    </div>
    <h3 v-if="!todo.editMode" style="color: rgba(0,0,0,0.6); word-break:break-all; text-align: left">{{todo.title}}
      <i @click="() => todo.editMode = !todo.editMode" class="edit fas fa-edit"></i>
    </h3>
    <form @submit.prevent="() => {
      todo.editMode = !todo.editMode
      editTodo(todo)
      }">
      <input id="form-edit" v-if="todo.editMode" v-model="todo.title" />
      <i style="margin-left: 5px" v-if="todo.editMode" @click="() => todo.editMode = !todo.editMode" class="edit fas fa-times"></i>
    </form> 
    <PropertyContainer :todo="todo" />
  </div>
</template>

<script>
import PropertyContainer from './PropertyContainer';

export default {
  props: ['todo'],
  components: {
    PropertyContainer,
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    editTodo(updatedTodo) {
      this.$store.dispatch('editTodo', updatedTodo);
    },
  }
}
</script>

<style>

</style>