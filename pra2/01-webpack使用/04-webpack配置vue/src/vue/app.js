export default {
    //组件存放
    template:'<div><h2>{{ message }}</h2><button @cilck="btnClick()">按钮</button><h2>{{ name }}</h2></div>',
        data () {
    return {
        message:'meaaage',
        name:"name"
    }
},
    methods: {
        btnClick () {
            console.log("aaa")
        }
    }
}