<template>
  <ul>
    <li class="todo-list" @dblclick="showMarkDone()">
      <p><strong>{{todo.title}}</strong></p>
      <button  class="delete-btn" @click="deleteTodo()"><font-awesome-icon icon="fa-solid fa-xmark" class="icon"/></button>
      <div :class="{'show-mark-done': markDone}" class="mark-done"></div> 
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
      margin: 0.5rem;
      height: 4.1rem;
      min-height: 100%;
      display: flex;
      flex-direction: row-reverse;
      justify-items: center;
      align-items: center;
      justify-content: space-between;
      user-select: none;   
      overflow: hidden;
}
  
  p { 
    margin: 0 auto;
    max-width: 67%;
    overflow: auto;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
  .delete-btn {
    visibility: hidden;
    position: absolute;
    cursor: url(../assets/img/cursor.png), auto;
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
    visibility: hidden;
    position: relative;
    top:0;
    right: 3px;
    width: 0.7rem;
    height: 100%;
    border: 1px solid rgb(118, 218, 118);
    background-color: rgb(147, 245, 147);
  }
  .show-mark-done {
    visibility: visible;
  }

</style>