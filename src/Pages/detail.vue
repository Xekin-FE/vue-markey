<template>
    <div class="detail-wrap">
        <div class="detail-left">
            <div class="product-board">
                <img :src="getProductIcon">
                <ul >
                    <router-link 
                    v-for="item in products" 
                    :to="{ path: item.path}" 
                    tag="li"  
                    active-class="active" 
                    :key="item.id">{{ item.name }}</router-link>
                </ul>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <div class="product-board">
                <img :src="displaySrc">
                <ul>
                    <router-link 
                    v-for="item in displayList" 
                    :to="{ path: item.url}" 
                    tag="li" 
                    active-class="active" 
                    :key="item.id"
                    >{{ item.name }}</router-link>
                </ul>
            </div>
        </div>
        <div class="detail-right">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      displayList: [],
      displaySrc: require("../assets/images/4.png"),
      products: [
        {
          id: 1,
          name: "数据统计",
          path: "count",
          icon: require("../assets/images/1.png"),
          active: false
        },
        {
          id: 2,
          name: "数据预测",
          path: "forecast",
          active: false
        },
        {
          id: 3,
          name: "流量分析",
          path: "analysis",
          active: false
        },
        {
          id: 4,
          name: "广告发布",
          path: "publish",
          active: false
        }
      ],
      imgMap: {
        "/detail/count": require("../assets/images/1.png"),
        "/detail/forecast": require("../assets/images/2.png"),
        "/detail/analysis": require("../assets/images/3.png"),
        "/detail/publish": require("../assets/images/4.png")
      }
    };
  },
  mounted () {
    axios
      .get("/api/getProductList")
      .then(res => {
        this.displayList = res.data.products.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {
    getProductIcon() {
      return this.imgMap[this.$route.path] || require("../assets/images/1.png");
    }
  }
};
</script>

<style>
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  transition: background .3s, color .3s;
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
.sales-board {
  background: #fff;
}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f6fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
  display: inline-block;
  width: 100px;
}
.sales-board-line-right {
  display: inline-block;
  width: 75%;
}
.sales-board-line-right strong {
  font-size: 30px;
  font-weight: bold;
  color: rgb(255, 47, 47);
}
.sales-board-des {
  line-height: 1.9;
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
  border: 1px solid #f0f2f5;
  padding: 15px;
}
</style>

