<template>
 <div class="con">
    <div class="login">
     <form class="el-form">
       <div class="name">
       <input type="text" v-model="loginform.username" name="" placeholder="用户名">
     </div>
     <div class="password">
       <input type="text" v-model="loginform.password" name="" placeholder="密码">
     </div>
     <div class="btn">
       <button @click="click()">登录</button>
     </div>
     <div class="forget">
      <a>忘记密码</a>
     </div>
     </form>
   </div>
 </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      loginform:{
        username:'',
        password:''
      }

    };
  },
  methods:{click:function() {
    let _this = this;
    if (this.loginform.username ==='') {
      alert("账号不能为空");
    }
    else if (this.loginform.password ==='') {
      alert("密码不能为空");
    }
    else{
    alert("登录成功");
    }
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{margin:0;padding:0;}
a{text-decoration: none;}
ul li {list-style-type: none;}
.con{background:#324157;height: 700px;width: 100%;position: relative;}
.login{width:380px;height:240px;border-radius: 5px;background: #fff;position: absolute;left:50%;top:50%;margin: -150px 0 0 -190px;}
.el-form{width: 320px;height:200px;margin: 0 auto;margin-top:22px; }
.name input,.password input{padding-left:10px;border: 1px solid #dcdfe6;width: 300px;height:40px;margin-bottom: 22px;}
.btn button{cursor: pointer;width:300px;height: 40px;background: #409eff;border:2px solid #409eff;color:#fff;font-size:20px;}
.forget a{color: #009688;margin-left:40%;cursor: pointer;font-size:12px;}
</style>
