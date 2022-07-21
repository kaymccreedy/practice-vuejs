var App = {
  data: function () {
    return {
      message: "Calculate!",
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
      product: 0,
      difference: 0,
      quotient: 0,
      exponent: 0,
    };
  },
  methods: {
    calculateSum: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
      return this.sum;
    },
    calculateProduct: function () {
      this.product = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
      return this.product;
    },
    calculateDifference: function () {
      this.difference = parseInt(this.number1) - parseInt(this.number2) - parseInt(this.number3);
      return this.difference;
    },
    calculateQuotient: function () {
      this.quotient = parseInt(this.number1) / parseInt(this.number2) / parseInt(this.number3);
      return this.quotient;
    },
    calculateExponent: function () {
      this.exponent = Math.pow(parseInt(this.number1), parseInt(this.number2));
      return this.exponent;
    },
  },
};

Vue.createApp(App).mount("#app");
