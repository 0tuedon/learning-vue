const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:""
    };
  },
  methods:{
    setName(e){
      this.name = e.target.value;
    },
    increment(num){
      this.counter = this.counter +  num
    },
    decrement(num){
      this.counter =  this.counter -  num
    }
  }
});

app.mount('#events');
