<template>
  <ul>
    <li class="todo-list" >
      <p><strong>{{todo.title}}</strong></p>
      <button  class="delete-btn" @click="deleteTodo()"><font-awesome-icon icon="fa-solid fa-xmark" class="icon"/></button>
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
        },
    },
    methods: {
        deleteTodo(index) {
          /* console.log(this.todo); */
          this.$emit('deleteTodo', index)
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
      flex-direction: row-reverse;
      justify-items: center;
      align-items: center;
      justify-content: space-between;
      
}
  p { 
    margin: 0 auto;
    max-width: 70%;
  }
  .delete-btn {
    visibility: hidden;
    position: absolute;
    
  }
  .icon {
    position: absolute;
    top: -7px;
    left: -37px;
    scale: 3;
  }
  .todo-list:hover{
    background-color: rgba(0, 0, 0, 0.16);
  }
  .todo-list:hover > .delete-btn {  
    visibility: visible;
  }

</style>