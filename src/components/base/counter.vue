<template>
    <div class="counter-component" onselectstart="return false">
      <div class="counter-btn" @click="minus" :class="{cantClick:isMin}"> - 

      </div>
      <div class="counter-show">
        <input id="Dinput" type="tel" v-model="number">
      </div>
      <div class="counter-btn" @click="plus" :class="{cantClick:isMax}"> + </div>
    </div>
</template>


<script>
export default {
  props: {
    max: {
      type: Number,
      default: 99
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      number: this.min,
      isMin: true,
      isMax: false
    };
  },
  watch: {
    number () {
      // input 数字处理
      this.number = Math.abs(parseFloat(this.number)) || '';
      this.number > this.max ? this.number = this.max : false;
      // 将值传出
      this.$emit("on-change", this.number);      
      // 传入 class
      this.number >= this.max ? (this.isMax = true) : (this.isMax = false);
      this.number <= this.min ? (this.isMin = true) : (this.isMin = false);
    }
  },
  methods: {
    minus() {
      this.number <= this.min ? false : this.number--;
    },
    plus() {
      this.number >= this.max ? false : this.number++;
    }
  }
};
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  background: #eee;
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.cantClick {
  cursor: not-allowed;
  background: #fff;
  color: #eee;
}
</style>


