<template>
  <div>
    <TodoItems
      :todo="todo"
      v-for="(todo, index) of todos"
      :key="todo.id"
      @deleteTodo="deleteTodo(index)"
    />
    <div class="display-form">
      <form action="#" class="show-form" :class="{ form: this.isShow }">
        <h3>Title</h3>
        <input
          type="text"
          name="title"
          id="todo-job"
          v-model="title"
          class="text-area"
        />
        <input type="submit" value="Add" class="add-btn" @click="addTodo()" />
        <button class="cancel-btn" @click="showForm()">Cancel</button>
      </form>
    </div>
    <div class="plus-btn-container">
      <font-awesome-icon
        icon="fa-solid fa-plus"
        class="plus-icon"
        @click="showForm()"
        :class="this.hidePlusButton ? '' : 'hide-plus-btn'"
      />
    </div>
  </div>
  <div id="app"></div>
</template>
<script>
import TodoItems from "./TodoItems.vue";
import axios from "axios";
export default {
  components: {
    TodoItems,
  },
  data() {
    return {
      todos: [],
      errors: [],
      title: "",
      todoId: 6,
      isShow: false,
      hidePlusButton: true,
    };
  },
  name: "TodoList",

  methods: {
    addTodo() {
      if (this.title.trim().length == 0) {
        alert("Title is empty");
        return;
      }
      this.todos.push({
        id: this.todoId,
        title: this.title,
        completed: false,
      });
      this.title = "";
      this.todoId++;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    showForm() {
      this.isShow = !this.isShow;
      this.hidePlusButton = !this.hidePlusButton;
    },
    async getTodo() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5&_delay=3000"
        );
        this.todos = response.data;
      } catch (error) {
        this.errors = error;
        console.log(this.errors);
      }
    },
  },
  mounted() {
    this.getTodo();
  },
};
</script>
<style scoped>
.show-form {
  display: none;
  position: relative;
  width: 90%;
  text-align: center;
  padding: 1rem;
  margin-bottom: 3.4rem;
}
.form {
  display: block;
}
.plus-btn-container {
  position: relative;
}
.plus-icon {
  scale: 4;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0, 50%);
}
.hide-plus-btn {
  visibility: hidden;
}
.text-area {
  margin-top: 3rem;
  padding: 0.5rem;
  width: 70%;
  height: 3.5rem;
  border: 2px solid black;
  border-radius: 0.7rem;
}
h3 {
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
}

.add-btn {
  margin: 0.5rem;
  position: absolute;
  bottom: -50px;
  right: 0;
  border: 1px solid black;
  background-color: rgb(45, 147, 206);
  color: white;
  border-radius: 0.5rem;
  width: 7rem;
  height: 2.4rem;
}
.add-btn:hover,
.cancel-btn:hover {
  cursor: pointer;
}
.cancel-btn {
  margin: 0.5rem;
  position: absolute;
  bottom: -50px;
  right: 130px;
  border: 1px solid black;
  background-color: gray;
  border-radius: 0.5rem;
  width: 7rem;
  height: 2.4rem;
}
</style>
