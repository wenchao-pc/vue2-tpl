<template>
  <div>
    <label>
      <span>用户名</span>
      <input placeholder="请输入用户名" v-model="userName">
    </label>
    <label>
      <span>密码</span>
      <input placeholder="请输入密码" v-model="pwd">
    </label>
    <button @click="login">登录</button>
  </div>
</template>
<style lang="less" scoped>
  label {
    display: flex;
    span {
      display: inline-block;
      width: 100px;
    }
    input {
      flex: 1;

    }
  }
</style>
<script>
  export default{
    data(){
      return {
        userName: "xuwenchao",
        pwd: "xwc1234"
      }
    },
    components: {},
    methods: {
      login(){
        var self = this;
        console.log("lll");
        self.$store.commit('login', {
          userName: this.userName,
          pwd: this.pwd,
          loginCallback(message) {
            console.log(message);
            self.$router.push({name: "messages"});
          }
        });
      }
    }
  }
</script>
