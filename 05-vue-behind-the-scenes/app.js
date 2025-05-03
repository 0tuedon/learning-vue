const app = Vue.createApp({
    data() {
      return {
        currentUserInput: '',
        message: 'Vue is great!',
      };
    },
    methods: {
      saveInput(event) {
        this.currentUserInput = event.target.value;
      },
      setText() {
        // this.message = this.currentUserInput;
        // this.message = this.$refs.userText

        console.log(this.$refs.userText)
      },
    },
    beforeCreate(){
        console.log("beforeCreate()");
    }
  });
  
  app.mount('#app');

  

// const data = {
//     message:"Hello",
//     longMessage: this.message + "World!!!"
// }

// const handler = {
//     set(target,key,value){
//         if(key === "message"){
//             target.longMessage = value  + "World!!!"
//         }

//         target.message = value
//     }
// }

// const proxy = new Proxy(data, handler);

// proxy.message = "tuedon";

// console.log(proxy.longMessage)