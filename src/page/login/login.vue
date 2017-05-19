<template>
  <div class='index-body'>
    <c-header text='手机号登录'>
      <text class='fuli-rtext' @click="jump('/register2')">注册</text>
    </c-header>
    <div class="login-box">
      <div class="login-box-container">
        <c-input border chaIcon :value='tel' @input='inputTel' placeholder='输入手机号'></c-input>
        <c-input icon chaIcon yjIcon :value='mima' @input='inputMima' :type='typeString' @typeSwitch='Switch' placeholder='输入密码'></c-input>
      </div>
    </div>
    <div class="login-link">
      <text class="tar-mima" @click="jump('/register')">忘记密码</text>
      <text class="sq-login">宝宝巴士大全授权登录页</text>
    </div>
    <div class="login-btn-box">
      <div class="login-btn" @click='login'>
        <text class="login-btn-text" >登录</text>
      </div>
    </div>
    <text @click='modalTc' class="login-bom-text">点击授权登录，宝宝巴士大全没有登录怎么办</text>
    <c-modal v-if='modal' class='modal'>
      <text slot='cont' class="modal-cont-text">需前往下载宝宝巴士大全进行授权登录！口袋里的早教专家全球超过1.5亿用户</text>
      <text slot='left' class='modal-cancel' @click="modalClose">取消</text>
      <text slot='right' class='modal-sure' @click="modalClose">前往下载</text>
    </c-modal>
  </div>
</template>
<script>
var modal = weex.requireModule('modal');
import CTitle from './title.vue'
import CHeader from './header.vue'
import CSwitch from './switch.vue'
import mixins from '../../../mixins'
import CInput from './input.vue'
import CModal from './modal.vue'
export default {
  mixins: [mixins],
  components: {
    CTitle,
    CHeader,
    CSwitch,
    CInput,
    CModal
  },
  data() {
    return {
      tel: '',
      mima: '',
      typeString: 'password',
      modal: false
    }
  },
  mounted: function () {
  },
  methods: {
    Switch(val) {
      this.typeString = val;
      // console.log(this.typeString);
    },
    login() {
      // console.log('2');
      let _this = this;
      if ((this.tel != '' && this.mima != '')) {
        if ((/^1[34578]\d{9}$/.test(this.tel))) {
          _this.toast('验证成功');
          setTimeout(()=> {
            _this.jump('/fuli');
          }, 400)

        } else {
          _this.toast('电话号码格式不正确');
        }
      } else if ((this.tel == ''&&this.mima == '')||(this.tel == ''&&this.mima != '')) {
        console.log(this.tel);
        _this.toast('手机号不能为空');
      } else if (this.tel != '' && this.mima == '') {
        _this.toast('密码不能为空');
      }

    },

    modalTc() {
      this.modal = true;
    },
    modalClose(){
      this.modal = false;
    },
    inputTel(val){
      this.tel = val;
    },
    inputMima(val){
      this.mima = val
    },
    toast(text) {
      modal.toast({
        message: text,
        duration: 0.3
      })
    }
  }

}
</script>

<style type="text/css">

.login-bom-text {
  position: absolute;
  width: 750px;
  text-align: center;
  font-size: 24px;
  color: #aaa;
  text-decoration: underline;
  bottom: 50px;
}
.modal-cont-text {
    font-size: 30px;
}
.modal-sure {
    text-align: center;
    line-height: 100px;
    font-size: 36px;
    color: #00ccc9;
}

.modal-cancel {
    text-align: center;
    line-height: 100px;
    font-size: 36px;
}
.login-btn-text {
  font-size: 42px;
  color: #fff;
  line-height: 100px;
  font-weight: 700;
}

.login-link {
  width: 750px;
  height: 76px;
  padding-left: 40px;
  padding-right: 40px;
  flex-direction: row;
  justify-content: space-between;
}

.login-btn-box {
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.login-btn {
  margin-top: 100px;
  height: 100px;
  width: 370px;
  background-color: #00ccc9;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}

.tar-mima {
  font-size: 26px;
  line-height: 76px;
  color: #898989;
}

.sq-login {
  color: #00ccc9;
  font-size: 26px;
  line-height: 76px;
}

.fuli-rtext {
  font-size: 24px;
  color: #a31f00;
  position: absolute;
  right: 22px;
  top: 32px;
}

.login-box {
  padding-left: 40px;
  padding-right: 40px;
}

.login-box-container {
  background-color: #fff;
  height: 200px;
  margin-top: 70px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>

