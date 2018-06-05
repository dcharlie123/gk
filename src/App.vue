<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body,
html {
  /* max-width: 750px; */
  height: 100%;
  overflow: hidden;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #4a4a4a;
  background-color: #fff;
  margin: 0 auto;
}
#app {
  margin: 0 auto;
  width: 100%;
  min-height: 100%;
  background: url("./assets/image/headBG.png") no-repeat top;
  background-size: 100%;
  overflow: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter {
  transform: translateY(5rem);
  opacity: 0;
}
.fade-leave-to {
  transform: translateY(-18.59375rem);
}
</style>
