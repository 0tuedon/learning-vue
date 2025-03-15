const app = Vue.createApp({
    data(){
        return{
        classInput: "",
        inlineInput:"",
        showParagraph: true
        }

    },

    methods:{
        toggleParagraph(){
            this.showParagraph = !this.showParagraph
        }
    }
})

app.mount("#assignment");