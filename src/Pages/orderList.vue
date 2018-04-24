<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>

      <div class="order-list-option">
        开始日期：
        <date-picker @on-change="getStartDate"></date-picker>
      </div>

      <div class="order-list-option">
        结束日期：
        <date-picker @on-change="getEndDate"></date-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" v-model="query" class="order-query" placeholder="请输入关键词">
        <button @click="getList">查询</button>
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" :class="{active:head.active}">{{ head.label }}</th>
        </tr>
        <tr v-for="(item, index) in tableData" :class="{even: index % 2 === 0}">
          <td v-for="head in tableHeads">{{ item[head.key] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import vSelection from "../components/base/selection";
import datePicker from "../components/base/datePicker";
export default {
  components: { datePicker, vSelection },
  data() {
    return {
      query: "",
      startDate: "",
      endDate: "",
      productId: 0,
      tableHeads: [],
      products: [],
      tableData: []
    };
  },
  mounted() {
    axios
      .get("/api/getInOrderList")
      .then(res => {
        this.tableHeads = res.data.tableHeads;
        this.products = res.data.products;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    getStartDate(date) {
      this.startDate = date;
    },
    getEndDate(date) {
      this.endDate = date;
    },
    productChange(obj) {
      this.productId = obj.Id;
    },
    isEmpty() {
      for(let i in arguments){
        if(arguments[i] !== "") { return false }
        else { return true }
      }
    },
    changeOrderType(headItem) {},
    getList() {
      if (this.isEmpty(this.query)) {
        this.tableData = [];
        return;
      }
      let reqPam = {
        query: this.query,
        productId: this.productId,
        startDate: this.startDate,
        endDate: this.endDate
      };
      axios
        .get("/api/getInOrderList", reqPam)
        .then(res => (this.tableData = res.data.list))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solide #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option button {
  margin-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}

.order-list-table tr.even {
  background: #e4e4e4;
}
</style>


