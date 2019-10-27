<template>
  <div id="container-priority-created-at">
    <p id="priority" 
      :style="
        todo.priority === 'Low-Priority' ? 'background-color: #23d160' : 
        todo.priority === 'Medium-Priority' ? 'background-color: #167df0' : 
        todo.priority === 'High-Priority' ? 'background-color: #7957d5' : 
        todo.priority === 'Urgent!' ? 'background-color: red' : 
        null"
    >
      {{todo.priority}}
    </p>
    <p id="created-at">Added: {{todo.createdAt | moment("MMMM Do YY")}}</p>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style>

</style>