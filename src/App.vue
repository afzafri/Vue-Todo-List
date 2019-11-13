<template>
  <div id="app">
    <Header />
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import axios from 'axios';
import firebase from './Firebase';

export default {
  name: 'app',
  components: {
    Header,
    Todos,
    AddTodo,
  },
  data() {
    return {
      todos: [

      ]
    }
  },
  methods: {
    deleteTodo(id) {
      // use firebase
      let selectItem = firebase.database().ref('todos/' + id);
      // Check that list exists
      selectItem.once('value')
      .then(() => {
        // Call remove() function
        selectItem.remove()
        .then(function() {
          console.log("Deleted successfully");
        }).catch(function(error) {
          console.log(error);
        });
      })

      // axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      //   .then(res => this.todos = this.todos.filter(todo => todo.id !== id))
      //   .catch(err => console.log(err));

      // this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      // new code - load from API
      const { id, title, completed, timestamp } = newTodo;

      // use Firebase
      firebase.database().ref('todos/' + id).set({
        id: id,
        title: title,
        completed: completed,
        timestamp: timestamp
      })
        .then(function() {
          console.log('item inserted.')
        })
        .catch(function(err) {
          console.log(err);
        });

      // axios.post('https://jsonplaceholder.typicode.com/todos', {
      //   title,
      //   completed
      // })
      //   .then(res => this.todos.push(res.data))
      //   .catch(err => console.log(err));

      // old code - local data
      // push new item into object
      // this.todos.push(newTodo);

      // or use spread operator
      // this.todos = [...this.todos, newTodo];
    }
  },
  created() {
    // use firebase
    let current = this;
    firebase.database().ref('todos').orderByChild('timestamp').on('value', function(snapshot) {
    let returnArr = [];
    snapshot.forEach(function(childSnapshot) {
        returnArr.push(childSnapshot.val());
        // Fill the local data property with Firebase data
        current.todos = returnArr;
      });
    });

    // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(res => this.todos = res.data)
    //   .catch(err => console.log(err));
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
