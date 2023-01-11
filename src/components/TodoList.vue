<template>
  <TodoItems :todo="todo" v-for="todo of todos" :key="todo.id" 
/>
    <form action="#" class="form">
      
      <h3>Title</h3>
      <input type="text" name="title" id="todo-job" v-model="title" class="text-area">
      <input type="submit" value="Add" class='add-btn' @click="addTodo()">
      <button class="cancel-btn" @click="addTodo()">Cancel</button>
    </form> 
<div id="app">
</div>
</template>
<script>
import TodoItems from './TodoItems.vue';
import axios from 'axios';
 export default {
  components: {
    TodoItems
  },
   data() {
    return {
      todos: [],
      errors: [],
      title: "",
      idForTodo: 6,
    }
  },
    name:"TodoList",
    
  methods: {
    async getTodo() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5&_delay=3000');
    this.todos = response.data

  } catch (error) {
    this.errors = error 
    console.log(this.errors);
  }
},
  },
  mounted() {
    this.getTodo()
  },
  addTodo() {
      console.log("Hello");
    },
 }
</script>
<style scoped>
  .form { 
        position: relative;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin-bottom: 3.4rem;
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
    .add-btn:hover, .cancel-btn:hover { 
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