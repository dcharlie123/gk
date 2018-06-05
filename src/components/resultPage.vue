<template>
  <div class="resultPage">
    <transition name="fade">
      <div class="loading" v-show="loading">
        <img src="../assets/image/小图.gif" alt="">
        <p>正在匹配适合您的职业...</p>
      </div>
    </transition>
    <img :src="resultImg" alt="" class="resultImg">
    <p class="longPress"><span>+</span>长按保存图片</p>
    <div class="showM" @click="showModal"></div>
    <div class="mask" @click="hideModal" v-show="showM">
      <div class="modal" @click.stop>
        <img src="../assets/image/小程序二维码.png" alt="">
        <div class="close" @click="hideModal">X</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    randomNumInArr
  } from "../assets/js/util.js";
  export default {
    data() {
      return {
        resultArr: {
          A: {
            type: "研究型",
            remark: "喜欢独立工作、解决问题，逻辑性强，充满好奇。",
            carerr: ["IT工作者", "核工程师", "医生", "天文学家", "哲学家"]
          },
          B: {
            type: "艺术型",
            remark: "开放，独立，富有想象力和创造性，对美有着灵敏的嗅觉。",
            carerr: ["小说家", "记者", "插画家", "导演", "摄影师"]
          },
          C: {
            type: "常规型",
            remark: "喜欢整理、安排事务，细心，做事有条理、有耐心。",
            carerr: ["会计", "图书管理员", "厨师", "机电设备运维工程师", "园艺师"]
          },
          D: {
            type: "社会型",
            remark: "喜欢与人打交道，热情，善于合作，具有领导才能。",
            carerr: ["公关", "教师", "市场营销人员", "律师", "外交官"]
          },
          E: {
            type: "复合型",
            remark: "复合型人才！在任何行业你都能成为翘楚，走上人生巅峰",
            carerr: ["任何职业"]
          }
        },
        result: {},
        carerr: null,
        loading: true,
        resultImg: null,
        showM: false
      };
    },
    methods: {
      showModal() {
        this.showM = true;
      },
      hideModal() {
        this.showM = false;
      }
    },
    created() {
      this.result = this.resultArr[this.$route.query.type];
      this.carerr = randomNumInArr(this.result.carerr);
      this.resultImg = require("../assets/image/" +
        this.result.type +
        "/" +
        this.carerr +
        ".jpg");
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }
  };

</script>

<style lang="scss" scoped>
  .resultPage {
    // background: none no-repeat bottom;
    // background-size: contain;
    min-height: 100vh;
    position: relative;
    background: #000;
  }
  .longPress{
    width: .48rem;
    font-size: 14px;
    position: absolute;
    right: .1rem;
    top:30%;
    color: #000;
    // font-weight: 700;
  }
  .longPress span{
    color: #fff;
    display: block;
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
    background: #000;
    text-align: center;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .loading {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 1);
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
      margin-top: 3.9rem;
    }
    p {
      font-size: 14px;
      color: #999;
    }
  }

  .resultImg {
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 98.5%;
    height: 110%;
    bottom: -20px;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 98;
    background: rgba(0, 0, 0, 0.6);
    .modal {
      position: fixed;
      z-index: 100;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 5.5rem;
      max-height: 5.5rem;
      background: #fff;
      border-radius: 5px;
      padding: 10px;
    }
    .modal img{
      width: 5rem;
      height: 5rem;
      // -webkit-touch-callout:default;
      // pointer-events: none;
    }
    .close {
      width: 1rem;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: 22px;
      // font-weight: 700;
      color: #fff;
      border: 2px solid #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -1.8rem;
      border-radius: 50%;
    }
  }

  .showM {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem; 
  }

</style>
