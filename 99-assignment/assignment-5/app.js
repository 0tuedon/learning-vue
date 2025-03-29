const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      showList:  true,
      tasks: [],
    };
  },

  methods: {
    addTask(){
        this.tasks.push(this.inputValue);
        this.inputValue = "";
    },
    toggleList(){
        this.showList =  !this.showList
    }
  },
});

app.mount("#assignment");