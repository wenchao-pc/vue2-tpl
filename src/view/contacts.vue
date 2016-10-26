<template>
  <div class="has-footer">
    <ui-carousel :carousels="carousels"></ui-carousel>
    <ui-nav></ui-nav>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
  import uiNav from './../components/uiNav.vue';
  import uiCarousel from './../components/uiCarousel.vue';
  export default{
    data(){
      return {
        carousels: []
      }
    },
    components: {
      'ui-nav': uiNav,
      'ui-carousel': uiCarousel
    },
    created: function () {
      const self = this;
      this.$get("member_auth");
      this.$post("member_auth", {}, function (data) {
      });
      self.carousels = [{name: 1}, {name: 2}, {name: 3}];
    }
  }
</script>
