<template>
  <div class='index-body'>
    <div class="register2-box" v-if='box'>
    <c-header text='手机号登录'>
        <text class='fuli-rtext'  @click="jump('/login')">登录</text>
    </c-header>
    <div class="login-box">
        <div class="register2-box-container">
            <c-input border chaIcon v-model='tel' :value='tel' @input='inputTel' placeholder="请输入手机号"></c-input>
            <c-input icon border chaIcon yjIcon :value='mima' @input='inputMima' :type='typeString' @typeSwitch='Switch' placeholder="输入8-16位字母或数字密码"></c-input>
             <c-input icon chaIcon yjIcon :type='doubleTypeString' @typeSwitch='doubleSwitch' placeholder="重新输入密码" :value='reset' @input='inputReset'></c-input>
        </div>
    </div>
    <div class="login-btn-box">
      <div class="login-btn">
        <text class="login-btn-text">完成注册</text>
      </div>
    </div>
    </div>
    <c-modal v-if='modal'>
        <text slot='cont' class="modal-cont-text">需前往下载宝宝巴士大全进行授权登录！口袋里的早教专家全球超过1.5亿用户</text>
        <text slot='left' class='modal-cancel'>取消</text>
        <text slot='right' class='modal-sure'>前往下载</text>
    </c-modal>
    <c-loading v-if='loading'></c-loading>
  </div>
</template>
<script>

import CTitle from './title.vue'
import CHeader from './header.vue'
import CSwitch from './switch.vue'
import CModal from './modal.vue'
import mixins from '../../../mixins'
import CInput from './input.vue'
import CLoading from './loading.vue'
export default {
  mixins: [mixins],
  components: {
    CTitle,
    CHeader,
    CSwitch,
    CInput,
    CModal,
    CLoading
  },
  data() {
    return {
      startTime: '',
      endTime: '',
      tel:'',
      mima:'',
      typeString:'password',
      doubleTypeString:'password',
      reset:'',
      modal:false,
      loading:true,
      box:false,
    }
  },
  mounted:function() {
    setTimeout(()=>{
      this.loading=false;
      this.box=true;
    },1000)
  },
  methods:{
    Switch(val){
      this.typeString=val;
    },
    doubleSwitch(val){
        this.doubleTypeString = val;
    },
    inputTel(val){
      this.tel = val;
    },
    inputMima(val){
      this.mima = val;
    },
    inputReset(val){
      this.reset = val;
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
.login-link{
  width: 750px;
  height: 76px;
  padding-left:40px;
  padding-right:40px; 
  flex-direction: row;
  justify-content: space-between;
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
.register2-box-container{
    background-color: #fff;
    height: 300px;
    margin-top: 70px;
    padding-left: 20px;
    padding-right: 20px;
}
</style>
