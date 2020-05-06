<template>
  <div>
    <ul>
      <li v-for="task in tasks" :key=task.id>
        {{ task.title }}
      </li>
    </ul>
    <input v-model="nextTodo" placeholder="enter new task">
    <input type="button" @click="addTodo" value="追加">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {},
  data: function() {
    return {
      nextId: 1,
      nextTodo: '',
      tasks: [],
    }
  },
  methods: {
    addTodo: function() {
      console.log(this.nextTodo)
      if (this.nextTodo === '') {
        return
      }
      const newTask = {id: this.nextId, title: this.nextTodo}
      this.tasks.push(newTask)
      this.nextTodo = ''
      this.nextId += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
