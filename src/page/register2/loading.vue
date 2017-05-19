<template>
    <div class='loading-body'>
        <div class="loading-box">
            <image :src="imageStart+'loading1.png'" v-show="state" class="loading-img"></image>
            <image :src="imageStart+'loading2.png'" v-show="!state" class="loading-img"></image>
         </div>
    </div>
</template>
<style>
.loading-box{
    margin-top: 100px;
}
.loading-body{
    background-color: rgba(0, 0, 0, 0.3);
    width: 750px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    align-items: center;
}
.loading-img{
    width: 450px;
    height: 459px;
}
</style>
<script>
import mixins from '../../../mixins'
export default {
    mixins: [mixins],
    name:'CLoading',
    data(){
        return{
        state:false
        }
    },
    mounted(){
        
        let _this = this
        setInterval(function() {
            _this.state = !_this.state
        }, 150);
    }
}</script>