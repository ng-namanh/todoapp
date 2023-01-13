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
      <div class="plus-btn-container"  :class="this.hidePlusButton ? '' : 'hide-plus-btn'">
      <font-awesome-icon
        icon="fa-solid fa-plus"
        class="plus-icon"
        @click="showForm()"
       
      />
    </div>
    </div>
   
  </div>
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
  created() {
    this.getTodo()
  },
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
        alert(this.errors)
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
  visibility: hidden;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  text-align: center;
  padding: 1rem;
  margin-bottom: 3.4rem;
}
.form {
  visibility: visible;
  display: block;
}
.display-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
/*  Plus icon */
.plus-btn-container {
  margin: 2rem;
  max-width: 100%;
  height: 100%;
}
.plus-icon {
  scale: 4;
}
.hide-plus-btn {
  display: none;
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
  cursor: url(../assets/img/cursor.png), auto;
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
  cursor: url(../assets/img/cursor.png), auto;
}
</style>
