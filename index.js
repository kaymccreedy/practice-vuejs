/* global Vue */

var App = {
  data: function () {
    return {
      message: "Welcome to Actualize Coding Bootcamp",
      text: "It's week 5, we're starting in on Javascript, and we are testing",
      question: "How does all this testing make you feel?",
      answer: "",
      feelings: [],
      feeling: "",
      showInfo: true,
      color_toggle: "Rust",
      checked: false,
      selected: "",
    };
  },
  methods: {
    moreTesting: function () {
      this.text += ", testing";
    },
    lessTesting: function () {
      this.text = "It's week 5, we're starting in on Javascript, and we're just doing a little bit of testing";
    },
    addFeeling: function () {
      this.feelings.push(this.feeling);
      this.feeling = "";
    },
  },
};

Vue.createApp(App).mount("#app");
