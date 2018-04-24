<template>
  <div class="sales-board"  v-if="pie_chartData.data.length !== 0">
      <chart 
      :chartDataList="pie_chartData"
      :chartStyle="chartStyle"
      ></chart>
  </div>
</template>

<script>
import axios from 'axios'
import chart from '@/components/base/chart'
export default {
  components: { chart },
  data() {
    return {
      chartStyle:{
        width: '100%', 
        height: '800px'
      },
      pie_chartData: {
        name: "数量",
        id: "pieChart",
        type: "pie",
        title: "2017年产品份额与比例统计表",
        data: []
      }
    };
  },
  mounted () {
     axios
      .get("/api/getPieChartList")
      .then(res => {
        this.pie_chartData.data = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>


<style scoped>

</style>
