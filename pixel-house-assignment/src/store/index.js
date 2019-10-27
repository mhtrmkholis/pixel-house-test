import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import alertify from 'alertifyjs';
const baseUrl = 'https://jsonplaceholder.typicode.com';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    todos: [],
  },
  getters: {
    isLoading: state => state.isLoading
  },
  mutations: {
    SET_LOADING: state => state.isLoading = !state.isLoading,
    ADD_TODO: (state, payload) => state.todos.unshift(payload),
    DELETE_TODO: (state, payload) => state.todos = state.todos.filter(el => el.id !== payload),
    EDIT_TODO: (state, payload) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === payload.id) todo = payload;
        return todo;
      });
    }
  },
  actions: {
    addTodo(context, { count, newTodo }) {
      context.commit('SET_LOADING')
      axios
        .get(`${baseUrl}/todos/${count}`)
        .then(({ data }) => {
          newTodo.id = data.id;
          newTodo.title = data.title;
          newTodo.createdAt = new Date()
          alertify.notify('Added new todo', 'add', 2.5);
          context.commit('ADD_TODO', newTodo);
          context.commit('SET_LOADING')
        })
        .catch(err => console.log(err.response));
    },
    deleteTodo(context, payload) {
      alertify.notify('Todo deleted', 'delete', 2.5);
      context.commit('DELETE_TODO', payload);
      
    },
    editTodo(context, payload) {
      alertify.notify('Todo updated', 'edit', 2.5);
      context.commit('EDIT_TODO', payload);
    }
  },
});
