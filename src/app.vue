<style>
* {
  --background-blue: #3089DC;
  --basic-orange: #f18f3e;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

html,
body {
  height: 100%;
  overflow-y: hidden;
}

html {
  height: 100%;
}

body {
  width: 750px;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  font-size: 24px;
  /* px */
}

.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: auto;
}
</style>

<template>
  <div class="main">
    <Toolbar :toggleLeftSidenav="toggleLeftSidenav" />
    <Sidebar ref="leftSidenavContainer" />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Toolbar from '../components/toolbar.vue'
import Sidebar from '../components/sidebar.vue'

export default {
  components: {
    Toolbar,
    Sidebar,
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenavContainer.$refs.leftSidenav.toggle();
    }
  }
}
</script>
