Vue.component('todo-item', {
   props: ['todo'],
   template: '<li>{{ todo.text }}</li>',
})

var app = new Vue({
   el: '#app',
   data: {
      message: 'Hello Vue!',
      title: 'You loaded this page on ' + new Date().toLocaleString(),
      seen: true,
      todos: [
         { text: 'first' },
         { text: 'second' },
         { text: 'three'},
      ],
      groceryList: [
         { id: 0, text: 'Vegetables' },
         { id: 1, text: 'Cheese' },
         { id: 2, text: 'somewhat' },
      ],
   },
   methods: {
      reverseMessage: function () {
         this.message = this.message.split('').reverse().join('')
      }
   },
})
