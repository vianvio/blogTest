<style scoped>
.md-toolbar {
  padding-top: 30px;
}
.icon-caidan {
  cursor: pointer;
}
</style>

<template>
  <md-toolbar>
    <md-button class="md-icon-button" @click="toggleLeftSidenav">
      <i class="iconfont icon-caidan"></i>
    </md-button>
  
    <h2 class="md-title">手淘ATC团队</h2>
  </md-toolbar>
</template>

<script>
export default {
  props: {
    toggleLeftSidenav: {
      type: Function
    }
  },
  data() {
    return {}
  },
}
</script>
