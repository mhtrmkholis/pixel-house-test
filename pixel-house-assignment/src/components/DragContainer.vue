<template>
  <div style="display: flex; width: 350px; flex-direction: column;" :style="type === 'Inprogress' ? 'margin: 0 50px' : null">
    <h3 style="background-color: #E5EFF5; border-top-left-radius: 8px; border-top-right-radius: 8px; text-align: left; padding: 20px; padding-bottom: 5px">{{type}}</h3>
    <draggable style="display: flex; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; flex-direction: column; padding: 20px; background-color: #E5EFF5; min-height: 35px" group="todo" />
  </div>
</template>

<script>
import Draggable from 'vuedraggable';

export default {
  props: ['type'],
  components: {
    Draggable
  }
}
</script>

<style>

</style>