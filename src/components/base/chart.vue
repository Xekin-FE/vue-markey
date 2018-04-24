<template>
  <div class="chartCard" >
    <div :id="chartDataList.id" :style="chartStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    chartStyle: {
      type: Object,
      default: { width: "300px", height: "300px" }
    },
    chartDataList: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      // 横纵坐标(如果需要的话)
      xAxis: { data: [] },
      yAxis: { min: 30 },
      // line
      values: [],
      lineTitle: {
        text: this.chartDataList.title,
        textStyle: {
          fontSize: 30
        }
      },
      lineTooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        }
      },
      lineSeries: [
        {
          name: this.chartDataList.name,
          data: [],
          type: this.chartDataList.type
        }
      ],
      // pie
      pieLegend: {
        orient: "vertical",
        x: "left",
        data: this.xAxis
      },
      pieTitle: {
        text: this.chartDataList.title,
        textStyle: {
          fontSize: 30
        },
        left: "center"
      },
      pieTooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      pieSeries: [
        {
          name: this.chartDataList.name,
          type: this.chartDataList.type,
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.chartDataList.data
        }
      ]
    };
  },
  methods: {
    dataInit() {
      this.chartDataList.data.map(val => {
        this.xAxis.data.push(val.name);
        this.lineSeries[0].data.push(val.value);
      });
    },
    drawLine() {
      let myChart = this.$echarts.init(
        document.getElementById(this.chartDataList.id)
      );
      switch (this.chartDataList.type) {
        case "pie":
          myChart.setOption({
            title: this.pieTitle,
            legend: this.pieLegend,
            tooltip: this.pieTooltip,
            series: this.pieSeries
          });
          break;
        default:
          myChart.setOption({
            title: this.lineTitle,
            tooltip: this.lineTooltip,
            xAxis: this.xAxis,
            yAxis: this.yAxis,
            series: this.lineSeries
          });
      }
    }
  },
  mounted() {
    this.dataInit();
    this.drawLine();
  }
};
</script>

<style scoped>
.chartCard {
  padding: 30px;
}
</style>


