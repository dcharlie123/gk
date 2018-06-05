<template>
  <div class="headPage">
    <div class="box"></div>
    <router-link to="/mainPage">点击测试</router-link>
  </div>
</template>

<script>
  export default {
    name: 'headPage',
    data() {
      return {
        msg: ''
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
