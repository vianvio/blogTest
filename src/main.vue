<style>
  html {
    background-color: #f18f3e;
    height: 100%;
  }
  body {
    width: 750px;
    display: flex;
    background-position: top left;
    background-repeat: no-repeat;
    background-image: url(../images/taobao.jpg);
    background-size: 750px 282px;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    font-size: 24px; /* px */
  }
  .main {
    font-size: 22px; /*px*/
    line-height: 32px; /*no*/
    background-repeat: no-repeat;
    background-position: top center;
    background-size: 266px 266px;
  }
  .main h1 {
    font-size: 32px; /*px*/
    line-height: 2;
    text-align: center;
    margin: 1em 2em;
  }
  .test-img {
    display: block;
    margin: auto;
    width: 140px;
    height: 140px;
  }
</style>

<template>
  <div class="main">
    <h1>This is a page via <code>just-vue</code> template!</h1>
    <img class="test-img" src="../images/one.png">
    <img class="test-img" :src="testUrl" size="cover"> <!-- can not convert to base64 -->
    <div class="container">
      <t-foo :baz="baz" :list="list" @click.native="changeName">powered by {{name}}</t-foo>
    </div>
  </div>
</template>

<script>
  import cdn from '../lib/lib-cdnurl.js'
  import TFoo from '../components/foo.vue'
  export default {
    components: {TFoo},
    // data() {
    //   return {
    //     name: 'just-vue',
    //     testUrl: '../images/one.png',
    //     baz: 'qux'
    //   }
    // },
    props: {
      name: {
        default: 'just-vue'
      },
      testUrl: {
        default: '../images/one.png'
      },
      baz: {
        default: 'qux'
      },
      list: {
        default() {
          return ['a', 'b', 'c']
        }
      }
    },
    computed: {
    },
    methods: {
      loadData(data) {
        this.name = data.name
      },
      changeName(e) {
        this.$emit('append-name', ', Amfe')
      }
    },
    created() {
      this.$on('append-name', (data) => {
        this.name += data
      })
    },
    mounted() {
      this.$el.style.backgroundImage = 'url(' + cdn('../images/logo.png') + ')'
    }
  }
</script>
