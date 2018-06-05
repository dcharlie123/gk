<template>
  <div class="headPage">
      <div class="people"></div>
      <div class="text">
        <p>你适合什么职业？</p>
        <p>本测试共6道题目，仅供娱乐，不构成高考报考参考， 请根据第一感觉作答。</p>
      </div>
      <router-link to="/mainPage" tag="div" class="goTest"></router-link>
  </div>
</template>

<script>
export default {
  name: "headPage",
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headPage {
  width: 100%;
  height: 15.75rem;
  background: url("../assets/image/build.png") no-repeat bottom left;
  background-size:16.390625rem 15.5rem;
  position: absolute;
  z-index: 1;
  bottom:0px;
  .people{
    background: url("../assets/image/people.png") no-repeat bottom left;
    background-size:10rem 13.5rem;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: .15625rem;
    z-index: 2;
  }
  .text{
    position: absolute;
    z-index: 3;
    top:6rem;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    width: 8.734375rem;
    text-align: center;
    color: #fff;
    p:first-child{
      font-weight: 600;
      font-size: 1rem;
    }
    p:last-child{
      padding: 0 10px;
      text-align: left;
      font-size: 14px;
    }
  }
  .goTest{
    position: absolute;
    z-index: 4;
    top:9.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 4rem;
    height: 4rem;
    // background: red;
  }
}
</style>
