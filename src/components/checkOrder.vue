<template>
  <div>
    <my-dialog :isShow="isShow" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </my-dialog>

    <my-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </my-dialog>

    <my-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </my-dialog>
  </div>
</template>

<script>
import myDialog from "../components/base/dialog"
export default {
    components:{ myDialog },
    props:{
        isShow: {
            type: Boolean,
            default: false
        },
        status: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            isShowCheckOrder: false,
            isShowSuccessDialog: false,
            isShowFailDialog: false
        }
    },
    methods:{
        checkStatus () {
            this.status ? this.isShowSuccessDialog = true : this.isShowFailDialog = true;
            this.$emit('on-close')
        },
        toOrderList () {
            this.isShowSuccessDialog = false;
            this.isShowFailDialog = false;
        }
    },
    mounted () {

    }
}
    
</script>

<style scoped>

</style>

