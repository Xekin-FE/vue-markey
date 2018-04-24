<template>
  <div class="sales-board"  v-if="bar_chartData.data.length !== 0">
      <chart 
      :chartDataList="bar_chartData"
      :chartStyle="chartStyle"
      ></chart>
      <chart 
      :chartDataList="line_chartData"
      :chartStyle="chartStyle"
      ></chart>
  </div>
</template>

<script>
import axios from "axios";
import chart from "@/components/base/chart";
export default {
  components: { chart },
  data() {
    return {
      chartStyle: {
        width: "100%",
        height: "800px"
      },
      bar_chartData: {
        name: "销量",
        id: "store_barChart",
        type: "bar",
        title: "2017 年产品销售情况表",
        data: []
      },
      line_chartData: {
        name: "销量",
        id: "storelineCharts",
        type: "line",
        title: "2017年产品情况变化表",
        data: []
      }
    };
  },
  mounted() {
    axios
      .get("/api/getLineChartList")
      .then(res => {
        this.bar_chartData.data = res.data;
        this.line_chartData.data = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style scoped>

</style>
