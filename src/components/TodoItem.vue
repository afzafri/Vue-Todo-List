<template>
  <li class="list-group-item" v-bind:class="{'is-complete text-white bg-success':todo.completed}">
    <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed">
    {{todo.title}}
    <button @click="$emit('del-todo', todo.id)" class="float-right btn btn-danger btn-circle btn-circle-sm m-1">
      <i class="fas fa-trash"></i>
    </button>

    <div class="mt-2">
      <small class="text-muted float-left">
        <i class="far fa-clock"></i>
        {{moment(todo.timestamp).format('DD MMM YY, h:mm A')}}
      </small>
    </div>

  </li>
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
          var msg = (current.todo.completed) ? 'Item marked as completed' : 'Item marked as incomplete';
          current.$toasted.success(msg, {
              theme: "bubble",
              duration : 1000,
              icon : 'check'
          });
        }).catch(function(err) {
          current.$toasted.error('Error! '+err, {
              theme: "bubble",
              duration : 1000,
              icon : 'error'
          });
        });
      },
    }
  }
</script>

<style scoped>
.is-complete {
  text-decoration: line-through;
}

.btn-circle {
  width: 45px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  padding: 0;
  border-radius: 50%;
}

.btn-circle i {
  position: relative;
  top: -1px;
}

.btn-circle-sm {
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 0.9rem;
}

.btn-circle-lg {
  width: 55px;
  height: 55px;
  line-height: 55px;
  font-size: 1.1rem;
}

.btn-circle-xl {
  width: 70px;
  height: 70px;
  line-height: 70px;
  font-size: 1.3rem;
}
</style>
