<template>
  <div class="cart">
    <div>消息列表</div>
    <ui-nav></ui-nav>
  </div>
</template>
<style lang="less">
  @import "../common/less/common.less";

  .cart {
    div {
      color: @info;
    }
  }
</style>
<script>
  import uiNav from "./../components/uiNav.vue";
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {"ui-nav": uiNav}
  }
</script>
