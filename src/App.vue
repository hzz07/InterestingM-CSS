<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import './common/reset.scss';
  #app{
    position: relative;
    overflow: hidden;
    height: 100%;
  }
  a{
    text-decoration: none;
    color: black;
  }
</style>
