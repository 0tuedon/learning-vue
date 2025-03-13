const frontend = Vue.createApp({
    data(){
        return{
            name:"Tuedon",
            age: 20,
            ageIn5: this.age+5,
            imageLink:"https://learn.bitcoindevs.xyz/_next/image?url=%2Fimages%2Ftools%2Foptech.jpg&w=640&q=75",
        }
    },

    methods:{
        favNumber(){
            return Math.floor(Math.random() * this.age )
        }

    }
});

frontend.mount("#assignment");