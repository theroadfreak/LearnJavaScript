<script>
import ChildComp from "./components/ChildComp.vue";

export default {
  components: {
    ChildComp,
  },
  data() {
    return {
      msg: "from parent",
      view: true,
      todoList: [],
      newTodo: "",
      id: 0,
    };
  },
  methods: {
    click() {
      this.view = !this.view;
    },
    addTodo() {
      this.todoList.push(this.newTodo);
    },
  },
};
</script>

<template>
  <ChildComp />

  <button @click="click()">Press me</button>
  <h1 v-if="view">Dushan</h1>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todoList" :key="todo.id">{{ todo }}</li>
  </ul>
  <p>{{ todoList }}</p>
</template>
