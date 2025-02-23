
Vue.createApp({
  data() {
    return{
      valueList:[],
      inputValue:''
    }
  },
  methods:{
    addList(){
      console.log("this.input")
      this.valueList.push(this.inputValue);
      this.inputValue = '';
    }
  }
}).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {`
// //   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);