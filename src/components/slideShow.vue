<template>
  <div 
  class = "slide-show" 
  @mouseover="clearInv()" 
  @mouseout="runInv()">
    <template v-if="slides.length !== 0">
      <div class="slide-img">
        <a :href="slides[nowIndex].href">
            <transition name="slide-trans">
                <img 
                v-if="isShow" 
                :src="slides[nowIndex].src">
            </transition>
            <transition name="slide-trans-old">
                <img 
                v-if="!isShow" 
                :src="slides[nowIndex].src" >
            </transition>
        </a>
      </div>
      <h2>{{slides[nowIndex].title}}</h2>
      <ul class="slide-pages" onselectstart=" return false ">
          <li @click="goto(prevIndex)">&lt;</li>
          <li v-for="(item, index) in slides" @click="goto(index)">
              <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
          </li>
          <li @click="goto(nextIndex)">&gt;</li>
      </ul>
    </template>
  </div>
</template>

<style scoped>
/* 由右往左滑动 */
.slide-trans-enter-active {
  transition: all 0.5s;
}
.slide-trans-enter {
  transform: translateX(900px);
}
.slide-trans-old-leave-active {
  transition: all 0.5s;
  transform: translateX(-900px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 350px;
  overflow: hidden;
}
.slide-show ul {
  -moz-user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  color: #fff;
  background: #000;
  opacity: 0.5;
  bottom: 0;
  height: 30px;
  text-align: left;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-pages li .on {
  text-decoration: underline;
}
</style>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      nowIndex: 0,
      isShow: true
    };
  },
  computed: {
    //计算幻灯片 index 值 将方法绑在按钮上
    prevIndex() {
      if (this.nowIndex === 0) {
        return this.slides.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    nextIndex() {
      if (this.nowIndex === this.slides.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  methods: {
    goto(index) {
      //通用的切换图片方法
      if (index === this.nowIndex) {
        //如果点击的是当前图片则不切换
        return false;
      }
      this.isShow = false;
      setTimeout(() => {
        //产生新旧图片
        this.isShow = true;
        this.nowIndex = index;
      }, 100);
    },
    runInv() {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex);
      }, this.inv);
    },
    clearInv() {
      clearInterval(this.invId);
    }
  },
  mounted() {
    this.runInv();
  }
};
</script>
