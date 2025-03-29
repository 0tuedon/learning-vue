const app = Vue.createApp({
  data() {
    return { 
      inputValue:"",
      goals: []
     };
  },
  methods:{
    addGoal(){
      this.goals.push(this.inputValue)
      this.inputValue = "";
    },
    removeGoal(i){
      this.goals.splice(i, 1);
    }
  }
});

app.mount('#user-goals');
