const app = Vue.createApp({
    data(){
        return {
            enterOutput:"",
            output:"",
        }
    },

    methods:{
        showAlert(){
            alert("Hi I am a Alert")
        },
        updateOutput(event){
            this.output =  event.target.value;
        },
        updateEnterOutput(event){
            this.enterOutput = event.target.value
        }
    }
})

app.mount('#assignment');