<style scoped>
p {
  display: block;
  text-align: center;
}

p.qux {
  margin: 1em 2em;
}
</style>

<template>
  <p :class="baz">
    <slot></slot>
    <span v-for="(item, index) in list" :key="index">{{item}}</span>
  </p>
</template>

<script>
export default {
  // props: ['baz'],
  props: {
    baz: {
      default: 'qqq'
    },
    list: {
      default() {
        return ['a']
      }
    }
  },
  components: {
  },
  data() {
    return {}
  }
}
</script>
