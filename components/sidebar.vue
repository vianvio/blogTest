<style scoped>
.md-title {
  padding-top: 30px;
}
.list-item {
  display: flex;
  height: 100px;
  flex-direction: row;
  align-items: center;
  font-size: 16px; /* no */
}

.list-item i {
  margin: 0 30px;
  font-size: 16px; /* no */
}
</style>

<template>
  <md-sidenav class="md-left" ref="leftSidenav">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">目录</h3>
      </div>
    </md-toolbar>
    <div class="list-item">
      <i class="iconfont icon-shu"></i>
      <span>博客</span>
    </div>
    <div class="list-item">
      <i class="iconfont icon-tuandui"></i>
      <span>团队</span>
    </div>
    <div class="list-item">
      <i class="iconfont icon-tubiao-"></i>
      <span>招聘</span>
    </div>
  </md-sidenav>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
