<template>
    <div class="chooser-component">
        <ul class="chooser-list" onselectstart="return false">
          <li
          v-for="(item, index) in selections"
          @click="chosenSelection(index)"
          :title="item.label"
          :class="{active:hasChosen[index]}"
          >{{ item.label }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [
        {
          label: "test",
          value: 1
        }
      ]
    }
  },
  data() {
    return {
      hasChosen: []
    };
  },
  methods: {
    hasChosenInit() {
      for (let i in this.selections) {
        this.hasChosen[i] = false;
      }
    },
    chosenSelection(index) {
      this.$set(this.hasChosen, index, !this.hasChosen[index]);
      let out = [];
      for (let i in this.hasChosen) {
        this.hasChosen[i] ? out.push(this.selections[i]) : false;
        };
      this.$emit("on-change", out);
    }
  },
  mounted() {
    this.hasChosenInit();
  }
};
</script>

<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li {
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
