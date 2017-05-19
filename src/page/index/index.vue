<template>
  <div class='index-body'>
    <c-header text='休息设置'></c-header>
    <c-title>请设置宝宝日常的睡眠时间，用于提示宝宝该睡觉了</c-title>
    <div class="index-list-container">
      <image src="local:///cha" class="index-limage"></image>
      <div class="index-list">
        <div class="index-list-cell">
          <text class="index-lcell-text">夜间休息</text>
          <c-switch class="index-switch" @switch='switchFun' :check='switchState'></c-switch>
        </div>
        <div class="index-list-cell" @click="jump('/time/start')">
          <text class="index-lcell-text">起床时间</text>
          <div class="index-lcell-date">
            <text class="index-lcell-dtext">{{startTime}}</text>
          </div>
        </div>
        <div class="index-list-cell" @click="jump('/time/end')">
          <text class="index-lcell-text">睡觉时间</text>
          <div class="index-lcell-date">
            <text class="index-lcell-dtext">{{endTime}}</text>
          </div>
        </div>
      </div>
    </div>
    <c-title>请设置每次使用app的时长，用于提示宝宝适时休息</c-title>
    <div class="index-bom">
      <div class='index-bom-top'>
        <image src="local:///clock" class="index-btop-img"></image>
        <text class="index-btop-text">使用时长</text>
      </div>
    </div>
  </div>
</template>
<style type="text/css">
.index-body {
  width: 750px;
  background-color: #eeeeee;
}

.index-bom {
  background-color: #fff;
  padding-top: 0.2rem;
  padding-left: 32px;
  padding-right: 32px;
}

.index-btop-text {
  margin-left: 15px;
  margin-top: 8px;
  color: #7f2d00;
}

.index-bom-top {
  height: 0.9rem;
  flex-direction: row;
}

.index-btop-img {
  width: 61px;
  height: 61px;
}

.index-list-container {
  background-color: #fff;
  padding-left: 32px;
  flex-direction: row;
}

.index-limage {
  width: 61px;
  height: 61px;
  margin-top: 20px;
}

.index-list {
  width: 620px;
}

.index-list-cell {
  height: 100px;
  border-bottom-color: #e8e8e5;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}

.index-lcell-text {
  font-size: 36px;
  color: #615454;
  line-height: 100px;
  margin-left: 14px;
}

.index-lcell-dtext {
  color: #00ccc9;
  font-size: 30px;
}



/*.weex-switch-checked{
  background-color: #00ccc9;
}*/

.weex-switch-checked {
  background-color: #00ccc9;
  border-color: #00ccc9;
  box-shadow: #00ccc9 0 0 0 0.5333rem inset;
  /*background-color: #00ccc9;*/
}
</style>
<script>
const storage = weex.requireModule('storage');
const modal = weex.requireModule('modal')
import CTitle from './title.vue'
import CHeader from './header.vue'
import CSwitch from './switch.vue'
import mixins from '../../../mixins'
export default {
  mixins: [mixins],
  components: {
    CTitle,
    CHeader,
    CSwitch
  },
  data: function () {
    return {
      startTime: '',
      endTime: '',
      switchState: false
    }
  },
  mounted: function () {
    this.timeData()
  },
  methods: {
    timeData: function () {
      storage.getItem('start', event => {
        this.startTime = event.data
      });
      storage.getItem('end', event => {
        this.endTime = event.data
      });
    },
    switchFun(val) {
      this.switchState = val;
      console.log(this.switchState);
      (this.switchState)?this.toast('已开启'):this.toast('已关闭')
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
