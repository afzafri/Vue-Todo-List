<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed">
      {{todo.title}}
      <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </p>
  </div>
</template>

<script>
  import firebase from '../Firebase';

  export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
      markComplete() {
        let current = this;
        current.todo.completed = !current.todo.completed;

        // Update the "completed" property to match local property
        firebase.database().ref().child('todos/' + this.todo.id).update({
          completed: current.todo.completed
        }).then(function() {
          console.log("Item marked as completed.");
        }).catch(function(err) {
          console.log(err);
        });
      }
    }
  }
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
