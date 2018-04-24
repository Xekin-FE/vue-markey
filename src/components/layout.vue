<template>
  <div @click="resetComponent">  <!-- 监听所有组件 点击空白部分 eventHub监听-->
    <div class="app-head" >
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img src="../assets/logo.png">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li> {{ username }} </li>
            <li v-if="hasLogin" class="nav-pile">|</li>    
            <li v-if="hasLogin" @click="quit">退出</li>                    
            <li v-if="!hasLogin" @click="logClick">登录</li>
            <li v-if="!hasLogin" class="nav-pile">|</li>
            <li  v-if="!hasLogin" @click="regClick">注册</li>
            <li class="nav-pile">|</li>
            <router-link 
            :to="{path: '/orderList'}" 
            tag="li" 
            >订单列表</router-link>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="app-foot">
      <p>@copy 2018 fishenal MIT</p>
    </div>
    <my-dialog :is-show="isShowLogDialog" @on-close="quitDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>
        <my-dialog :is-show="isShowRegDialog" @on-close="quitDialog('isShowRegDialog')">
      <reg-form></reg-form>      
    </my-dialog>
        <my-dialog :is-show="isShowAboutDialog" @on-close="quitDialog('isShowAboutDialog')">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni nobis culpa voluptatem ducimus vero blanditiis, necessitatibus aliquam harum molestiae cum quod minus neque, amet labore modi dolore est. Enim, porro.</p>  
    </my-dialog>
  </div>
</template>

<script>
import { eventBus } from "../eventBus"
import myDialog from "./base/dialog";
import logForm from "./logForm";
import regForm from "./regForm";

export default {
  components: {
    myDialog,
    logForm,
    regForm
  },
  data() {
    return {
      username: "",
      hasLogin: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      isShowAboutDialog: false
    };
  },
  methods: {
    logClick() {
      this.isShowLogDialog = true;
    },
    regClick() {
      this.isShowRegDialog = true;
    },
    aboutClick() {
      this.isShowAboutDialog = true;
    },
    quitDialog(info) {
      this[info] = false;
    },
    quit() {
      this.hasLogin = false;
      this.username = "";
    },
    onSuccessLog(data) {
      this.hasLogin = true;
      this.username = data.username;
      this.quitDialog("isShowLogDialog");
    },
    resetComponent () {
      eventBus.$emit('resetComponent');
    }
  }
};
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB",
    "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {
}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}

.buy-dialog-tile {
  font-size: 16px;
  font-weight: bold;
}
.but-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
