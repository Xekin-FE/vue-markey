<template>
  <div class="login-form">
      <div class="g-form">
          <div class="g-form-line">
              <span class="g-form-label">用户名：</span>
              <div class="g-form-input">
                  <input id="user" type="text" v-model="usernameModel" placeholder="请输入用户名" >
              </div>
              <span class="g-form-error">{{ userErrors.errorText }}</span>
          </div>
          <div class="g-form-line">
              <span class="g-form-label">密码：</span>
              <div class="g-form-input">
                  <input id="pass" type="password" placeholder="请输入密码" v-model="passwordModel">
              </div>
              <span class="g-form-error">{{ passwordErrors.errorText }}</span>
          </div>
          <div class="g-form-line">
              <div class="g-form-btn">
                  <a class="button" @click="onLogin" @keydown.enter="onLogin">登录</a>
              </div>
          </div>
          <p>{{ errorText }}</p>
      </div>
  </div>
</template>

<style scoped>

</style>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      usernameModel: "",
      passwordModel: "",
      errorText: "",
      userData: {
        'xekin@vue': 123456
      }
    };
  },
  computed: {
    userErrors() {
      let errorText, status;
      if (!/@/g.test(this.usernameModel)) {
        status = false;
        errorText = "不包含@";
      } else {
        status = true;
        errorText = "";
      } //第一次载入时不报错误信息
      if (!this.userFlag) {
        errorText = "";
        this.userFlag = true;
      }
      return {
        status,
        errorText
      };
    },
    passwordErrors() {
      let errorText, status;
      if (!/^\w{1,6}$/g.test(this.passwordModel)) {
        status = false;
        errorText = "密码不是1-6位";
      } else {
        status = true;
        errorText = "";
      } //同 userFlag
      if (!this.passwordFlag) {
        errorText = "";
        this.passwordFlag = true;
      }
      return {
        status,
        errorText
      };
    }
  },
  methods: {
    onLogin() {
      if (!this.userErrors.status || !this.passwordErrors.status) {
        alert("invalid");
      } else {
        this.errorText = "";
        // axios
        //   .get("/api/login")
        //   .then(res => {
        //     this.$emit("has-log", res.data);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
        if (this.userData[$('#user').val()] && this.userData[$('#user').val()] == $('#pass').val()) {
          this.$emit("has-log", {
            username: $('#user').val()
          });
        }else{
          alert('用户名或者密码有误')
        }
      }
    }
  }
};
</script>


