<template>
     <ul>
    <li class="todo-list" >
      <p><strong>{{todo.title}}</strong></p>
 <!--      <button>Delete</button> -->
    </li>
  </ul>
</template>
<script>
   export default {
    name: 'todo-items',
    props: {
        todo: { 
            type : Object,
            required: true
        }
    },
    methods: {
        showTodo() {
            console.log(typeof this.todo);
        }
    },
   }


</script>
<style scoped>
.todo-list {
      list-style: none;
      border: 1px solid black;
      border-radius: 0.75rem;
      margin: 0.5rem  ;
      height: 4rem;
      display: flex;
      justify-items: center;
      align-items: center;
}
  p { 
    margin: 0 auto;
    max-width: 70%;
  }

</style>