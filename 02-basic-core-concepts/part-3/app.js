const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "Schwarzmüller"
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetAll(){
        this.counter = 0;
        this.name= ""
    }
  }
});

app.mount('#events');
