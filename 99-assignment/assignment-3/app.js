const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },

  watch: {
    result(value) {
      if (value === 37) {
        setTimeout(() => {
          this.result = 0;
        }, 5000);
      }
    },
  },

  computed: {
    currentResult() {
      if (this.result === 0) {
        return "";
      } else if (this.result < 37) {
        return "Not there yet";
      } else if (this.result > 37) {
        return "Too Much";
      } else {
        return this.result;
      }
    },
  },

  methods: {
    updateResult(num) {
      this.result = this.result + num;
    },
  },
});

app.mount("#assignment");
