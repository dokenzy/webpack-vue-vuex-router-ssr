<template>
  <router-view class="view"></router-view>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';

html {
  height: 100%;
  width: 100%;
  font-size: 62.5%;
}

body {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
