<template>
  <div>
    <transition name="fade">
      <div class="loading" v-show="loading">
        <img src="../assets/image/小图.gif" alt="">
        <p>正在分析...</p>
      </div>
    </transition>
    <h1>{{result.type}}</h1>
    <p>{{result.remark}}</p>
    <p>{{carerr}}</p>
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
          "A": {
            type: "研究型",
            remark: "喜欢独立工作、解决问题，逻辑性强，充满好奇。",
            carerr: ["IT工作者", "核工程师", "医生", "天文学家", "哲学家"]
          },
          "B": {
            type: "艺术型",
            remark: "开放，独立，富有想象力和创造性，对美有着灵敏的嗅觉。",
            carerr: ["小说家", "记者", "插画家", "导演", "摄影师"]
          },
          "C": {
            type: "常规型",
            remark: "喜欢整理、安排事务，细心，做事有条理、有耐心。",
            carerr: ["会计", "图书馆管理员", "厨师", "机电设备运维工程师", "园艺师"]
          },
          "D": {
            type: "社会型",
            remark: "喜欢与人打交道，热情，善于合作，具有领导才能。",
            carerr: ["公关", "教师", "市场营销人员", "律师", "外交官"]
          },
          "E": {
            type: "复合型",
            remark: "复合型人才！在任何行业你都能成为翘楚，走上人生巅峰",
            carerr: ["IT工作者", "核工程师", "医生", "天文学家", "哲学家", "小说家", "记者", "插画家", "导演", "摄影师", "会计", "图书馆管理员", "厨师",
              "机电设备运维工程师", "园艺师", "公关", "教师", "市场营销人员", "律师", "外交官"
            ]
          }
        },
        result: {},
        carerr:null,
        loading: true
      }
    },
    created() {
      this.result = this.resultArr[this.$route.query.type];
      this.carerr = randomNumInArr(this.result.carerr);
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 1000)
      
    }
  }

</script>

<style lang="scss" scoped>
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 1);
    text-align: center;
    img {
      width: 2rem;
      height: 2rem;
      margin-top: 3.8rem;
    }
    p {
      font-size: 12px;
      color: #999;
    }
  }

</style>
