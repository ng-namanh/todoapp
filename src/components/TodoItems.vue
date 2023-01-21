<template>
  <ul>
    <li class="todo-list" @dblclick="showMarkDone()">
      <div :class="{ 'show-mark-done': markDone }" class="mark-done"></div>
      <p>
        <strong>{{ todo.title }}</strong>
      </p>
      <font-awesome-icon icon="fa-solid fa-xmark" class="x-icon" @click="deleteTodo()" />
      
    </li>
  </ul>
</template>
<script>
export default {
  name: "todo-items",
  data() {
    return {
      markDone: false,
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTodo(index) {
      if (confirm("Delete todo?") == true) {
        this.$emit("deleteTodo", index);
      } else return null;
    },
    showMarkDone() {
      this.markDone = !this.markDone;
    },
  },
};
</script>
<style scoped>
.todo-list {
  position: relative;
  list-style: none;
  border: 1px solid black;
  border-radius: 0.75rem;
  height: 4.1rem;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  overflow: hidden;
  /* overflow-y:auto; */
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
  flex-grow: 0;
}
.x-icon {
  visibility:hidden;
  position: relative;
  bottom:1px;
  right: 1.5rem;
  scale: 3;
  flex-shrink: 1;
}
.todo-list:hover {
  background-color: rgba(0, 0, 0, 0.16);
}
.todo-list:hover > .x-icon {
  visibility: visible;
}
.mark-done {
  visibility: hidden;
  position: relative;
  top: 0;
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
