<template>
  <div>
    <div class="card bg-light">
      <div class="card-body">
        <form @submit="addTodo">
          <div class="input-group">
            <input type="text" class="form-control" v-model="title" name="title" placeholder="Add Todo...">
            <div class="input-group-append">
              <input type="submit" value="Submit" class="btn btn-primary">
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import uuid from 'uuid';
  export default {
    name: "AddTodo",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTodo(e) {
        e.preventDefault();

        const newTodo = {
          id: uuid.v4(),
          title: this.title,
          completed: false,
          timestamp: new Date().getTime()
        }
        // Send to parents
        this.$emit('add-todo', newTodo);

        this.title = ''; // clear input
      }
    }
  }
</script>
