<template>
  <div id="app">
    <AddTodo />
    <small style="font-style: italic">**Drag to change its status</small>
    <div style="display: flex; flex-wrap: wrap; justify-content: center; margin-top: 20px">
      <div style="display: flex; width: 350px; flex-direction: column;">
        <h3 id="type-title">To-Do</h3>
        <draggable id="todo-container" group="todo" >
          <div v-for="todo in todos" :key="todo.id" >
            <TodoContainer :todo="todo" />
          </div> 
        </draggable>
      </div>
      <DragContainer :type="'Inprogress'" />
      <DragContainer :type="'Done'" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AddTodo from './components/AddTodo';
import Draggable from 'vuedraggable';
import DragContainer from './components/DragContainer';
import TodoContainer from './components/TodoContainer';

export default {
  name: 'app',
  components: {
    AddTodo,
    Draggable,
    DragContainer,
    TodoContainer
  },
  computed: {
    ...mapState(['todos'])
  },
}
</script>

<style>
#app {
  padding-bottom: 100px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 10px;
  min-height : 100vh;
  background: linear-gradient(#3EB9DE, #3A80DE);
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgb(62, 185, 222), rgb(58, 128, 222));
  background-size: auto;
  background-origin: padding-box;
  background-clip: border-box;
}
* {
  margin: 0
}
#priority {
  font-size: 12px;
  padding: 3px 8px;
  font-weight: bold;
  border-radius: 4px;
  color: #fff;
  margin-bottom: 5px
}
#created-at {
  font-size: 14px;
  font-style: italic;
  color: rgba(0,0,0,0.4);
}
#container-priority-created-at {
  background-color: #E5EFF5;
  display: flex; 
  flex-direction: column; 
  align-items: flex-end; 
  align-self: flex-end;
  padding: 10px;
  padding-bottom: 5px;
  border-radius: 4px;
  min-width: 165px;
  margin-top: 30px;
  justify-content: flex-end
}
#logo img {
  width: 250px;
  height:auto;
  margin: 30px 50px
}
.delete {
  color: #ccdef9; font-size: 1.3em
}
.delete:hover {
  color: rgb(22, 125, 240)
}
.edit {
  color: rgba(0,0,0,0.2)
}
.edit:hover {
  color: rgba(0,0,0,0.6)
}
#form-edit {
  height: 20px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(0,0,0,0.6);
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.2);
}
#todo-container {
  display: flex; 
  border-bottom-left-radius: 8px; 
  border-bottom-right-radius: 8px; 
  flex-direction: column; 
  padding: 20px; 
  background-color: #E5EFF5; min-height: 35px
}
#type-title {
  background-color: #E5EFF5; 
  border-top-left-radius: 8px; 
  border-top-right-radius: 8px; 
  text-align: left; 
  padding: 20px; 
  padding-bottom: 5px
}
.add-btn {
  font-size: 3em;
  cursor: pointer
}
#add-container {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);;
  padding: 15px 20px;
  border-radius: 8px;
}
.ajs-message.ajs-add {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;  
  background-color: rgba(0, 205, 0, 0.8); 
  border: none; font-size: 20px; 
  text-align: center; 
  border-radius: 3px; 
}
.ajs-message.ajs-add {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;  
  background-color: rgba(0, 205, 0, 0.8); 
  border: none; font-size: 20px; 
  text-align: center; 
  border-radius: 3px; 
}
.ajs-message.ajs-delete { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;  
  background-color: rgba(205, 0, 0, 0.8); 
  border: none; 
  font-size: 20px; 
  text-align: center; 
  border-radius: 3px; 
}
.ajs-message.ajs-edit { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #FFA500;  
  background-color: rgba(0,0,0,0.6); 
  border: none; 
  font-size: 20px; 
  text-align: center; 
  border-radius: 3px; 
}
</style>
