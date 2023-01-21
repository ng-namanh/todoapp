<template>
  <section id="app">
    <div class="todo-form">
      <TodoHeader />
      <TodoList />
    </div>
  </section>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoHeader from "./components/TodoHeader.vue";
export default {
  name: "App",
  components: {
    TodoList,
    TodoHeader,
  },
  methods: {},
};
</script>

<style scoped>
@import "@/assets/css/global.css";

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: fit-content;
  cursor: url(./assets/img/cursor.png), auto;
  overflow: auto;
}
.todo-form {
  display: table;
  border: 3px solid black;
  border-radius: 20px;
  margin: 0 auto;
  width: 30%;
  height: 60%;
  max-height: 60%;
}

@media screen and (max-width: 634px) {
  .todo-form {
    width: 80%;
    height: 100%;
  }
  
}
</style>
