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
      ]
   },
   methods: {
      reverseMessage: function () {
         this.message = this.message.split('').reverse().join('')
      }
   },
})
