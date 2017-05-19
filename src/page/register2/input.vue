<template>
  <div class='login-body input-border'>
  
    <image src="local:///phone" class="input-left-icon" v-if='icon'></image>
    <image src="local:///s" class="input-left-icons" v-if='!icon'></image>
    <div class="input-box">
      <input :type='type' class="input-ele" ref='inputc'  :value='value' @input='inputVal' :placeholder='placeholder'/>
      <div class="input-box-bs">
        <image src="local:///clear" class="input-clear" v-if='chaIcon' @click='clean'></image>
        <image src="local:///yj" class="input-yj" v-if='yjIcon' @click.native='ptqh'></image>
        <div class="input-hq"  v-if='inputBtn'>
          <text class="input-text-hq" >获取</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mixins from '../../../mixins'
export default {
  mixins: [mixins],
  // data: function () {
  //   return {
  //     val: this.value
  //   }
  // },
  props: {
    placeholder: {
      type: String
    },
    value: {type:String},
    icon: {type:Boolean},
    // border: {type:Boolean,default:false},
    chaIcon: {type:Boolean},
    yjIcon: {type:Boolean},
    type:{type:String},
    inputBtn:{type:Boolean}
  },

  methods: {
    clean() {
      this.$emit('input','')
      event.value = ''
      // this.$emit('input','' )
      // this.$emit('input',val)
    },
    inputVal(event) {
      console.log(event.value);
      this.$emit('input',event.value )
    },
    ptqh(){
      // console.log(this.type);
       // this.type='password';
      if(this.type=='password'){
        this.type='text';
        this.$emit('typeSwitch','text');
      }else{
        this.$emit('typeSwitch','password');
        this.type='password';
      }
    }
  }
}
</script>
<style type="text/css">
.input-hq{
  height: 40px;
  width: 80px;
  background-color: #00ccc9;
  border-radius: 20px;
}
.input-border {
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #dcdcdc;
}
.input-no-border{
border-bottom-width: 0px;
}
.input-text-hq{
  font-size: 24px;
  color: #fff;
  text-align: center;
  line-height: 40px;
}
.input-ele {
  border-width: 0;
  width: 395px;
  flex-direction: row;
  height: 70px;
  line-height: 70px;
}

.input-box-bs {
  margin-top: 15px;
  width: 130px;
  flex-direction: row;
  justify-content: flex-end;
}

.input-yj {
  width: 36px;
  height: 23px;
  margin-left: 10px;
  margin-top: 8px;
}

.input-box {

  width: 560px;
  margin-left: 20px;
  flex-direction: row;
  justify-content: space-between;
}

.login-body {
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.input-left-icon {
  width: 39px;
  height: 54px;
}

.input-left-icons {
  width: 48px;
  height: 53px;
}

.input-clear {
  width: 40px;
  height: 40px;
}
</style>


