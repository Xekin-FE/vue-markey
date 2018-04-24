<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>数据统计</h2>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  产品类型：
              </div>
              <div class="sales-board-line-right" onselectstart="return false">
                  <v-chooser 
                  :selections="buyTypes"
                  @on-change="onParamsChange('buyType', $event)"></v-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  适用地区：
              </div>
              <div class="sales-board-line-right">
                  <v-selection 
                  :selections="districts" 
                  @on-change="onParamsChange('district', $event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  半年
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                 <strong> {{ salePrice }}</strong> 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="payDialogSwitch">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      <div class="sales-board-des">
        <h2>产品说明</h2>
        <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

        <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>安全安保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>办公文教</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>彩票</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>车辆物流</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>成人用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>出版传媒</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>电脑硬件</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>电子电工</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>房地产建筑装修</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>分类平台</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>服装鞋帽</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>箱包饰品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>化工原料制品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>机械设备</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>家庭日用品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>家用电器</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>教育培训</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>节能环保</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>金融服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>礼品</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>旅游住宿</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>美容化妆</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>母婴护理</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>农林牧渔</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>软件</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>商务服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>生活服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>食品保健品</label>
                      </div>
                  </td>
              </tr>
              <tr class="ui-table-row">
                  <td class="col-first">
                      <div class="intro-pic">
                          <label>手机数码</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>通讯服务设备</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>网络服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>医疗服务</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>游戏</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>运动休闲娱乐</label>
                      </div>
                  </td>
                  <td>
                      <div class="intro-pic">
                          <label>招商加盟</label>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      </div>

      <my-dialog 
        :isShow="isShowPayDialog" 
        @on-close="payDialogSwitch">
        <table class="buy-dialog-table">
            <tr>
            <th>产品类型</th>
            <th>适用地区</th>
            <th>有效时间</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ buyType.label }}</td>
            <td>{{ district.label }}</td>
            <td>半年</td>
            <td>{{ salePrice }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onBankChange"></bank-chooser>
        <div class="button buy-dialog-btn" 
        @click="reqBuy">
          确认购买
        </div>
       </my-dialog>

        <check-order :isShow="isShowCheckOrder" :status="status" @on-close="checkOrderSwitch"></check-order>
        
  </div>
</template>

<script>
import axios from "axios";
import vSelection from "../../components/base/selection";
import vChooser from "../../components/base/chooser";
import myDialog from "../../components/base/dialog";
import bankChooser from "../../components/bankChooser";
import checkOrder from "../../components/checkOrder";
export default {
  components: { vChooser, vSelection, myDialog, bankChooser, checkOrder },
  data() {
    return {
      buyType: {},
      district: {},
      buyTypes: [],
      districts: [],
      salePrice: 0,
      status: false,
      bankId: null,
      isShowPayDialog: false,
      isShowCheckOrder: false,
    };
  },
  methods: {
    reqBuy() {
      axios
        .get("/api/getOrderId", {
          salePrice: this.salePrice,
          bankId: this.bankId
        })
        .then(res => {
          this.status = res.data.status;
        })
        .catch(err => {
          console.log(err);
        });
      this.payDialogSwitch();
      this.checkOrderSwitch();
    },
    payDialogSwitch() {
      this.isShowPayDialog = !this.isShowPayDialog;
    },
    checkOrderSwitch() {
      this.isShowCheckOrder = !this.isShowCheckOrder;
    },
    onBankChange(bankObj) {
      this.bankId = bankObj.id;
    },
    onParamsChange(attr, val) {
      this[attr] = val;
      this.getPrice();
    },
    getPrice() {
      this.salePrice = this.buyType.price * this.district.value;
    },
    onParamsChange(attr, val) {
      this[attr] = val;
      this.getPrice();
    }
  },
  mounted() {
    axios
      .get("/api/getInCount")
      .then(res => {
        this.buyTypes = res.data.buyTypes;
        this.buyType = this.buyTypes[0];
        this.districts = res.data.districts;
        this.district = this.districts[0];
        this.getPrice();
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>

</style>

