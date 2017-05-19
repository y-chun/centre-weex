<template>
  <div class='index-body'>
    <c-header text='手机短信验证'>
        <text class='fuli-rtext' @click="jump('/login')">登录</text>
    </c-header>
    <div class="login-box">
        <div class="login-box-container">
            <c-input border chaIcon v-model='tel' :value='tel' @input='inputTel' placeholder='请输入手机号'></c-input>
            <c-input icon chaIcon v-model="mima" :value='mima' @input='inputMima' inputBtn :type='typeString' @typeSwitch='Switch' placeholder='请输入验证码'></c-input>
        </div>
    </div>
    <div class="login-btn-box">
      <div class="login-btn">
        <text class="login-btn-text">完成注册</text>
      </div>
    </div>
  </div>
</template>
<script>

import CTitle from './title.vue'
import CHeader from './header.vue'
import CSwitch from './switch.vue'
import mixins from '../../../mixins'
import CInput from './input.vue'
export default {
  mixins: [mixins],
  components: {
    CTitle,
    CHeader,
    CSwitch,
    CInput
  },
  data() {
    return {
      startTime: '',
      endTime: '',
      tel:'',
      mima:'',
      typeString:'password'
    }
  },
  mounted:function() {

  },
  methods:{
    Switch(val){
      this.typeString=val
    },
    inputTel(val){
      this.tel = val;
    },
    inputMima(val){
      this.mima = val
    }
  }
  
}
</script>
<style type="text/css">
.login-btn-text{
  font-size: 42px;
  color: #fff;
  line-height: 100px;
  font-weight: 700;
}
.login-btn-box{
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.login-btn{
  margin-top: 100px;
  height: 100px;
  width: 370px;
  background-color: #00ccc9;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}
.tar-mima{
  font-size: 26px;
  line-height: 76px;
  color: #898989;
}
.sq-login{
  color: #00ccc9;
  font-size: 26px;
  line-height: 76px;
}
.fuli-rtext{
    font-size:24px;
    color: #a31f00;
    position: absolute;
    right: 22px;
    top: 32px;
}
.login-box{
padding-left:40px;
padding-right: 40px;
}
.register-box-container{
    background-color: #fff;
    height: 200px;
    margin-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
