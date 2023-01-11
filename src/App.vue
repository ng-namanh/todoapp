<template>
  <section id="app">
    <div class="todo-form">
      <TodoHeader />
      <TodoList />
    </div>
    

</section>
 

</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoHeader from './components/TodoHeader.vue';
export default {
  name: 'App',
  components: {
    TodoList,
    TodoHeader,
  },
  methods: { 
    
  }
}
</script>

<style scoped>
@import '@/assets/css/global.css';

#app { 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.todo-form {
    display: table;
    border: 2px solid black;
    border-radius: 20px;
    margin: 0 auto;
    max-width: 50%;
    height: 60%;
    
}

</style>
