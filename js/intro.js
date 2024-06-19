var testdata = "http://localhost/test/conan.json"
const list = Vue.createApp({
    data() {
        return {
            datalist: [],
            cardMove: 0
        }
    },
    mounted() {
        // fetch("http://localhost/test/conan.json")
        //     .then((response) => response.json())
        //     .then((result) =>{
        //         console.log(result)
        //     })
        axios.get(testdata)
            .then((res) => {
                this.datalist = res.data
            })  

    },
    methods: {
        add: function () {            
            this.cardMove += 1
            if (this.cardMove > 2) {
                this.cardMove = 0
            }
        }
    }
}).mount("#content");

