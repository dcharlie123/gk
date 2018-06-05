<template>
  <div>
    <div :class="isSlide?'slide':''" class="wrapper">
      <div>{{questionCurrent.question}}</div>
      <div class="item1 item" :class="selectItem=='A'?'active':''" data-index="A" @click="next">A:{{questionCurrent.answer1}}</div>
      <div class="item2 item" :class="selectItem=='B'?'active':''" data-index="B" @click="next">B:{{questionCurrent.answer2}}</div>
      <div class="item3 item" :class="selectItem=='C'?'active':''" data-index="C" @click="next">C:{{questionCurrent.answer3}}</div>
      <div class="item4 item" :class="selectItem=='D'?'active':''" data-index="D" @click="next">D:{{questionCurrent.answer4}}</div>
    </div>
  </div>
</template>

<script>
import {randomNumInArr} from "../assets/js/util.js";
  export default {
    data() {
      return {
        i: 0,//第几题
        isSlide: false,//是否滑动
        selectItem: "",//选择哪个选项
        questions: [{
            question: "1、以下哪个你最擅长？",
            answer1: "玩拼图游戏、长时间阅读",
            answer2: "布置一个与众不同的环境",
            answer3: "手工制作、收纳",
            answer4: "帮别人解决个人危机"
          }, {
            question: "2、以下哪一项对你而言最重要？",
            answer1: "超强的逻辑思维",
            answer2: "出众的穿着打扮",
            answer3: "强壮而敏捷的身体",
            answer4: "让人羡慕的人际关系"
          }, {
            question: "3、你通常更倾向于哪种问题解决方式？",
            answer1: "研读所有事实，有逻辑地分析",
            answer2: "忘掉旧经验，寻求新方法",
            answer3: "寻找历史经验和方法",
            answer4: "借着和别人交谈来解决问题"
          }, {
            question: "4、相对而言，你更喜欢哪种环境？",
            answer1: "寂静的可独处冥想的",
            answer2: "有音乐和美丽色彩的",
            answer3: "清洁，有条不紊的",
            answer4: "有很多交谈对象的"
          }, {
            question: "5、在群体活动中，你喜欢承担什么任务？",
            answer1: "解决技术难题",
            answer2: "策划创意",
            answer3: "整理具体事务",
            answer4: "拉赞助"
          },
          {
            question: "6、你希望有一份什么样的工作？",
            answer1: "研究未知领域的",
            answer2: "放飞自我的",
            answer3: "踏实稳定的",
            answer4: "充满竞争的"
          }
        ], //题目及选项
        resultList: [],
        typeArr: ["A", "B", "C", "D", "E"],
        result: null
      }
    },
    computed: {
      questionCurrent() {//当前是哪道题目
        return this.questions[this.i]
      }
    },
    methods: {
      next(e) {//点击切换题目
        this.selectItem = e.target.dataset.index;//当前选择的是哪个选项A,B,C,D
        this.resultList.push(e.target.dataset.index)//把用户每个题的选项推入答案数组
        if (this.i < 5) {//题目还没完毕
          this.isSlide = true;//滑动
          this.i = this.i + 1;//下一题
          setTimeout(() => {//
            this.isSlide = false;
            this.selectItem = "";
          }, 300)

        } else {
          var ACount = this.countOccurrences(this.resultList, "A"),
            BCount = this.countOccurrences(this.resultList, "B"),
            CCount = this.countOccurrences(this.resultList, "C"),
            DCount = this.countOccurrences(this.resultList, "D");
          var countArr = [ACount, BCount, CCount, DCount];
          var countMax = Math.max(...countArr);
          var MaxIndex = countArr.indexOf(countMax);
          if (countMax >= 4) { //如果是4,那就只有一种类型
            this.result = this.typeArr[MaxIndex]; //取是那种类型
          } else if (countMax == 3) {
            if (countArr.lastIndexOf(3) !== MaxIndex) { //如果从尾取最大值的位置跟从头取最大值位置不同，则有多个最大值
              this.result = this.typeArr[randomNumInArr([MaxIndex, countArr.lastIndexOf(3)])] //随机取一个类型
              console.log(this.result);
            } else { //位置相同，3就是最大，那就只有一种类型
              this.result = this.typeArr[MaxIndex];
            }
          } else if (countMax == 2) {
            var index = 0;
            var posArr=[];
            for (var i = 0; i < countArr.length; i++) {
              var pos = countArr.indexOf(2, index);
              if (pos === -1) break;
              posArr.push(pos);
              index = pos + 1
            }
            if(posArr.length>2){
              this.result=this.typeArr[4];
            }else{
              this.result=this.typeArr[randomNumInArr(posArr)];
            }
          }
          console.log(this.result);
          this.$router.push({
            name: 'resultPage',
            query:{type:this.result}
          })
        }
      },
      countOccurrences(arr,  val) {
        return arr.reduce((a,  v)  =>  (v  ===  val  ?  a  +  1  :  a  +  0),  0)
      }
    }
  }

</script>

<style scoped>
  .slide {
    transform: translateX(-6.4rem);
  }

  .wrapper {
    transition: all 1s;
  }

  .show-enter-active,
  .show-leave-active {
    transition: all .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .item1 {
    position: absolute;
    top: 100px;
  }

  .active {
    color: red;
  }

</style>
