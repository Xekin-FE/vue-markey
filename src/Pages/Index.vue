<template>
  <div class="index-wrap">
    
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
                <h3> {{product.title}} </h3>
                <ul>
                  <router-link 
                  v-for="item in product.list" 
                  :to="{path:item.url}" 
                  tag="li"
                  :key="item.Id">
                  {{item.name}} <span v-if="item.hot" class="hot-tag">HOT</span>
                  </router-link>
                </ul>
                <div v-if="!product.last" class="hr"></div>
        </template>
      </div>
        <div class="index-left-block lastest-news">
          <h2>最新消息</h2>
          <ul>
            <li v-for="item in newsList">
              <a :href="item.url">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="index-right">
        <slide-show :slides="slides" :inv="slideSpeed"></slide-show>
        <div class="index-board-list">
          <div 
          class="index-board-item" 
          v-for="(item,index) in boardList" 
          :class="[{'line-last':index % 2 !== 0}, 'index-board-'+item.id]">
            <div class="index-board-item-inner">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <div class="index-board-button">
                <router-link 
                :to="{path: '/detail'}" 
                class="button" 
                tag='a' 
                >立即购买</router-link>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import slideShow from "../components/slideShow";
import axios from "axios";
export default {
  components: {
    slideShow
  },
  mounted() {
    axios
      .get("/api/getNewsList")
      .then(res => {
        this.newsList = res.data.newsList;
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/api/getSlides")
      .then(res => {
        this.slides = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/api/getBoardList")
      .then(res => {
        this.boardList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/api/getProductList")
      .then(res => {
        this.productList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },

  data() {
    return {
      slideSpeed: 2000,
      slides:[],
      boardList:[],
      newsList:[],
      productList:[]
    };
  }
};
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  /* text-align: center; */
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  cursor: pointer;
  transition: background .2s, color .3s;
  padding: 5px;
}
.index-left-block li:hover {
  background: #4fc08d;
  color: #fff;
}
.index-left-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}
.index-board-car .index-board-item-inner {
  background: url("../assets/images/1.png") no-repeat;
}
.index-board-earth .index-board-item-inner {
  background: url("../assets/images/2.png") no-repeat;
}
.index-board-loud .index-board-item-inner {
  background: url("../assets/images/3.png") no-repeat;
}
.index-board-hill .index-board-item-inner {
  background: url("../assets/images/4.png") no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
}
</style>
