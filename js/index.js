// var conandata = "http://localhost/conan/conan.json"
const boardlist = Vue.createApp({
    data() {
        return {
            datalist: [],
            topFivedata: []
        }
    },
    mounted() {        
        axios.get("https://raw.githubusercontent.com/mirukudango/Conan/main/conan.json")
            .then((res) => {
                this.datalist = res.data
                const sortData = this.datalist.sort((a, b) => b.boxOffice_Jp - a.boxOffice_Jp);
                this.topFivedata = sortData.slice(0, 5);
            })
    }
}).mount("#board");


const list = Vue.createApp({
    data() {
        return {
            datalist: [],
            selectedId: -1
        }
    },
    mounted() {
        // fetch("http://localhost/conan/conan.json")
        //     .then((response) => response.json())
        //     .then((result) =>{
        //         console.log(result)
        //     })
        axios.get("https://raw.githubusercontent.com/mirukudango/Conan/main/conan.json")
            .then((res) => {
                this.datalist = res.data
            })       
    },
    watch: {
        selectedId(newVal, oldVal) {
            // 選中的id改變時，使用jQuery來進行fadeIn的動畫效果
            //oldVal的值是用來比較舊的選擇值是否和新的選擇值相同，如果相同則不需要做任何事情
            $(`.introduction:eq(${newVal})`).fadeIn(600);

            const textInfo = $(`.introduction:eq(${newVal}) .infoText`);

            // 啟動 typewriter 動畫
            let index = 0;
            const text = textInfo.text();
            textInfo.text("");

            const type = () => {
                textInfo.text(text.substr(0, index++));
                if (index <= text.length) {
                    setTimeout(type, 30);
                }
            };
            setTimeout(type, 500);
        }
    }
}).mount("#movielist");
