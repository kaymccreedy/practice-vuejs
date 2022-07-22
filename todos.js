/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Add a To-Do",
      todos: [],
      title: "",
    };
  },
  created: function () {
    this.loadTodos();
  },
  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        //handle success
        console.log(response.data);
        this.todos = response.data;
      });
    },
    pushTodo: function () {
      var params = {
        userId: 420,
        title: this.title,
        completed: false,
      };
      axios
        .post("https://jsonplaceholder.typicode.com/todos", params)
        .then((response) => {
          console.log(response.data);
          this.todos.push(response.data);
          this.title = "";
        })
        .then(this.loadTodos());
    },
  },
  // beforeMount() {
  //   this.loadTodos();
  // },
};

Vue.createApp(App).mount("#app");
