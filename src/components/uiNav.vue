<template>
  <div class="nav">
    <div>
      <router-link to="messages" exact>消息</router-link>
    </div>
    <div>
      <router-link to="contacts" exact>联系人</router-link>
    </div>
    <div>
      <router-link to="somethings" exact>动态</router-link>
    </div>
  </div>
</template>
<style lang="less">
  @import "../common/less/common";

  @nav-height: 50px;
  .nav {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: @nav-height;
    background: #f5f5f5;
    box-shadow: 0 -1px 1px #eee;
    div {
      flex: 1;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: @nav-height;
        text-decoration: none;
        color: black;
        &.router-link-active {
          color: @info;
        }
      }
    }
  }
</style>
