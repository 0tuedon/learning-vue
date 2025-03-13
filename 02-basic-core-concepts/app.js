const myGoalsApp = Vue.createApp({
    data(){
        return{
            courseGoals:[],
            currentGoalA:"<h3>Finish the course and Master Vue </h3>",
            currentGoalB: "<h3>Master Vue and build amazing Projects</h3>",
            vueLink:"https://vuejs.org",
        }
    },

    methods:{
        randomGoal() {
           let randomNumber = Math.random();
           if(randomNumber <= 0.5){
            return this.currentGoalA
           }
           else {
            return this.currentGoalB
           }
        }
    }
})

myGoalsApp.mount("#user-goal");

