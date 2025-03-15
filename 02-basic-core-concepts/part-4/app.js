const app = Vue.createApp({
    data(){
        return{
            boxesSelected:[]
        }
    },

    methods:{
        selectBox(box){
            if(this.boxesSelected.includes(box)){
                this.boxesSelected = this.boxesSelected.filter((currentBox)=>currentBox !== box);
            }
            else{
                this.boxesSelected.push(box)
            }
        }
    }
})

app.mount("#styling");