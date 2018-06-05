<template>
  <div class="mainPage">
  <div class="box"></div>
    <div :class="isSlide?'slide':''" class="wrapper">
      <div class="Qwrap">
        <div class="Qindex">第
          <span>{{i+1}}</span>题</div>
        <div class="Q" v-bind:class="(i==0)?'mt': ''">
          {{questionCurrent.question}}
        </div>
      </div>

      <div class="xuanBG">
        <div class="item1 item" :class="selectItem=='A'?'active':''" data-index="A" @click="next">{{questionCurrent.answer1}}</div>
        <div class="item2 item" :class="selectItem=='B'?'active':''" data-index="B" @click="next">{{questionCurrent.answer2}}</div>
        <div class="item3 item" :class="selectItem=='C'?'active':''" data-index="C" @click="next">{{questionCurrent.answer3}}</div>
        <div class="item4 item" :class="selectItem=='D'?'active':''" data-index="D" @click="next">{{questionCurrent.answer4}}</div>
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
        i: 0, //第几题
        isSlide: false, //是否滑动
        selectItem: "", //选择哪个选项
        questions: [{
            question: "以下哪个你最擅长？",
            answer1: "玩拼图游戏、长时间阅读",
            answer2: "布置一个与众不同的环境",
            answer3: "手工制作、收纳",
            answer4: "帮别人解决个人危机"
          },
          {
            question: "以下哪一项对你而言最重要？",
            answer1: "超强的逻辑思维",
            answer2: "出众的穿着打扮",
            answer3: "强壮而敏捷的身体",
            answer4: "让人羡慕的人际关系"
          },
          {
            question: "你通常更倾向于哪种问题解决方式？",
            answer1: "研读所有事实，有逻辑地分析",
            answer2: "忘掉旧经验，寻求新方法",
            answer3: "寻找历史经验和方法",
            answer4: "借着和别人交谈来解决问题"
          },
          {
            question: "相对而言，你更喜欢哪种环境？",
            answer1: "寂静的可独处冥想的",
            answer2: "有音乐和美丽色彩的",
            answer3: "清洁，有条不紊的",
            answer4: "有很多交谈对象的"
          },
          {
            question: "在群体活动中，你喜欢承担什么任务？",
            answer1: "解决技术难题",
            answer2: "策划创意",
            answer3: "整理具体事务",
            answer4: "拉赞助"
          },
          {
            question: "你希望有一份什么样的工作？",
            answer1: "研究未知领域的",
            answer2: "放飞自我的",
            answer3: "踏实稳定的",
            answer4: "充满竞争的"
          }
        ], //题目及选项
        resultList: [],
        typeArr: ["A", "B", "C", "D", "E"],
        result: null,
        hasClick:false
      };
    },
    computed: {
      questionCurrent() {
        //当前是哪道题目
        return this.questions[this.i];
      }
    },
    methods: {
      next(e) {
        //点击切换题目
        if(this.hasClick) return;
        this.selectItem = e.target.dataset.index; //当前选择的是哪个选项A,B,C,D
        this.resultList.push(e.target.dataset.index); //把用户每个题的选项推入答案数组
        this.hasClick=true
        if (this.i < 5) {
          //题目还没完毕
          
          setTimeout(() => {
            //
            this.isSlide = true; //滑动
            this.i = this.i + 1; //下一题
            this.isSlide = false;
            this.hasClick=false;
            this.selectItem = "";
          }, 300);
        } else {
          var ACount = this.countOccurrences(this.resultList, "A"),
            BCount = this.countOccurrences(this.resultList, "B"),
            CCount = this.countOccurrences(this.resultList, "C"),
            DCount = this.countOccurrences(this.resultList, "D");
          var countArr = [ACount, BCount, CCount, DCount];
          var countMax = Math.max(...countArr);
          var MaxIndex = countArr.indexOf(countMax);
          if (countMax >= 4) {
            //如果是4,那就只有一种类型
            this.result = this.typeArr[MaxIndex]; //取是那种类型
          } else if (countMax == 3) {
            if (countArr.lastIndexOf(3) !== MaxIndex) {
              //如果从尾取最大值的位置跟从头取最大值位置不同，则有多个最大值
              this.result = this.typeArr[
                randomNumInArr([MaxIndex, countArr.lastIndexOf(3)])
              ]; //随机取一个类型
              console.log(this.result);
            } else {
              //位置相同，3就是最大，那就只有一种类型
              this.result = this.typeArr[MaxIndex];
            }
          } else if (countMax == 2) {
            var index = 0;
            var posArr = [];
            for (var i = 0; i < countArr.length; i++) {
              var pos = countArr.indexOf(2, index);
              if (pos === -1) break;
              posArr.push(pos);
              index = pos + 1;
            }
            if (posArr.length > 2) {
              this.result = this.typeArr[4];
            } else {
              this.result = this.typeArr[randomNumInArr(posArr)];
            }
          }
          console.log(this.result);
          this.$router.push({
            name: "resultPage",
            query: {
              type: this.result
            }
          });
        }
      },
      countOccurrences(arr, val) {
        return arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);
      }
    }
  };

</script>

<style scoped lang="scss">
  .mainPage {
    overflow: hidden;
    position: absolute;
    width: 100%;
    min-height: 100%;
    background: url("../assets/image/bg.png") no-repeat bottom;
    background-size: 100% 100%;
    bottom: 0;
    top: 0;
    .xuanBG {
      position: absolute;
      background: url("../assets/image/xuanx.png") no-repeat bottom;
      width: 100%;
      min-height: 11.828125rem;
      background-size: 8.9rem 11.828125rem;
      bottom: -1rem;
      .item {
        font-size: .32rem;
        font-weight: 600;
        position: absolute;
        width: 5rem;
        height: 1.53125rem;
        // background: rgba(0, 0, 0, .2);
        display: flex;
        align-items: center;
        justify-content: center;
        &.item1 {
          width: 50%;
          // justify-content: flex-end;
          bottom: 9.16rem;
          left: 0;
          padding-left: 1.78rem;
          padding-right: 0.2rem;
        }
        &.item2 {
          bottom: 6.92rem;
          left:0;
          padding-left: 1.78rem;
          padding-right: 0.2rem;
        }
        &.item3 {
          bottom: 7.96rem;
          right: 0;
          padding-right: 1rem;
          padding-left: 1rem;
        }
        &.item4 {
          bottom: 5.7rem;
          right: 0;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

    }
    .Qwrap {
      bottom: 10.75rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      position: absolute;
      width: 8.265625rem;
      height: 3.3125rem;
      background: url('../assets/image/questionW.png') no-repeat;
      background-size: 100%;
      .Qindex {
        font-size: 16px;
        padding-top: .3rem;
        span {
          display: inline-block;
          width: .48rem;
          height: .48rem;
          line-height: .5rem;
          text-align: center;
          border-radius: 50%;
          margin: 0 10px;
          background: #000;
          color: #fff;
          font-weight: 600;
        }
      }
      .Q {
        padding: 0 6px;
        height: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
      }
    }
  }

  .slide {
    opacity: 0;
    transform: translateX(-100vw);
    transition: all 1s;
  }

  .wrapper {
    transition: all 1s;
  }

  // .mt {
  //   margin-top: 0.5rem;
  //   padding: 0 !important;
  //   text-align: center;
  // }

  .show-enter-active,
  .show-leave-active {
    transition: all 0.5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .active {
    color: rgb(200, 90, 10);
    font-weight: 700;
  }
@media (min-width: 700px) {

}
</style>
