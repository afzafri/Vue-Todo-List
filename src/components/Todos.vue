<template>
  <div class="card">
    <ul class="list-group list-group-flush" v-for="todo in todos" v-bind:key="todo.id">
      <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

  export default {
    name: "Todos",
    components: {
      TodoItem
    },
    props: ["todos"]
  }
</script>

<style scoped>

</style>
