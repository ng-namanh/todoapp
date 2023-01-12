<template>
  <ul>
    <li class="todo-list" @dblclick="showMarkDone()">
      <p><strong>{{todo.title}}</strong></p>
      <button  class="delete-btn" @click="deleteTodo()"><font-awesome-icon icon="fa-solid fa-xmark" class="icon"/></button>
      <div :class="{'mark-done': markDone}"></div> 
    </li>
  </ul>
</template>
<script>
   export default {
    name: 'todo-items',
    data() {
      return {
        markDone: false,
      }
    },
    props: {
        todo: { 
            type : Object,
            required: true
        },
    },
    methods: {
        deleteTodo(index) {
         
          if (confirm("Delete todo?") == true){
            this.$emit('deleteTodo', index)
          } else return null
        },
        showMarkDone() {
          this.markDone = !this.markDone
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
  .mark-done { 
    position: relative;
    top:0;
    right: 2px;
    width: 0.7rem;
    height: 100%;
    border: 1px solid rgb(118, 218, 118);
    background-color: rgb(147, 245, 147);
    
  }

</style>