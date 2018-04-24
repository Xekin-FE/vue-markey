<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>数据预测</h2>
        <p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
      </div>
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  购买数量：
              </div>
              <div class="sales-board-line-right">
                  <v-counter @on-change="onParamsChange('count', $event)"></v-counter>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  媒介：
              </div>
              <div class="sales-board-line-right">
                  <v-mul-chooser 
                  :selections="versionList" 
                  @on-change="onParamsChange('version', $event)"></v-mul-chooser>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  有效时间：
              </div>
              <div class="sales-board-line-right">
                  一年
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  <strong>{{ salePrice }}</strong> 元
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
        <p>我们已经知道实现数据的双向绑定，首先要对数据进行劫持监听，所以我们需要设置一个监听器Observer，用来监听所有属性。如果属性发上变化了，就需要告诉订阅者Watcher看是否需要更新。因为订阅者是有很多个，所以我们需要有一个消息订阅器Dep来专门收集这些订阅者，然后在监听器Observer和订阅者Watcher之间进行统一管理的。接着，我们还需要有一个指令解析器Compile，对每个节点元素进行扫描和解析，将相关指令对应初始化成一个订阅者Watcher，并替换模板数据或者绑定相应的函数，此时当订阅者Watcher接收到相应属性的变化，就会执行对应的更新函数，从而更新视图。因此接下去我们执行以下3个步骤，实现数据的双向绑定：</p>
        <br>
        <p>1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。</p>
        <br>
        <p>2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。</p>
        <br>
        <p>3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。</p>
      </div>

              <my-dialog 
        :isShow="isShowPayDialog" 
        @on-close="payDialogSwitch">
        <table class="buy-dialog-table">
            <tr>
            <th>购买数量</th>
            <th>媒介</th>
            <th>有效时间</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ count }}</td>
            <td>{{ versionString }}</td>
            <td>一年</td>
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
import vMulChooser from "../../components/base/multiplyChooser";
import vCounter from "../../components/base/counter";
import myDialog from "../../components/base/dialog";
import bankChooser from "../../components/bankChooser";
import checkOrder from "../../components/checkOrder";
export default {
  components: { vMulChooser, vCounter, myDialog, bankChooser, checkOrder },
  data() {
    return {
      versionString: "",
      version: [],
      versionList: [],
      salePrice: 0,
      count: 1,
      bankId: null,
      status: false,
      isShowPayDialog: false,
      isShowCheckOrder: false
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
      if (this.salePrice === 0) {
        return;
      };
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
      let final = 0;
      let arr = [];
      for (let i in this.version) {
        arr.push(this.version[i].label);
        final += this.version[i].price;
      }
      this.versionString = arr.join("，");
      this.salePrice = final * this.count;
    },
    onParamsChange(attr, val) {
      this[attr] = val;
      this.getPrice();
    }
  },
  mounted() {
    axios
      .get("/api/getInForecast")
      .then(res => {
        this.versionList = res.data.versionList;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>

</style>

