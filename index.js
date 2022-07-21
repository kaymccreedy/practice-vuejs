/* global Vue */

var App = {
  data: function () {
    return {
      message: "Welcome to Actualize Coding Bootcamp",
      text: "It's week 5, we're starting in on Javascript, and we are testing",
      question: "How does that make you feel?",
      answer: "",
      radio1: "Good",
      radio2: "Bad",
      feelings: "Feelings",
    };
  },
  methods: {
    moreTesting: function () {
      this.text += ", testing";
    },
    lessTesting: function () {
      this.text = "It's week 5, we're starting in on Javascript, and we're just doing a little bit of testing";
    },
  },
};

Vue.createApp(App).mount("#app");
