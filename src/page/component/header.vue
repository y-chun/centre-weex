<template>
    <div class='index-header'>
        <image :src="imageStart+'back'+imageEnd" class="index-himage" @click='back'></image>
        <text class="index-htext">{{text}}</text>
        <slot></slot>
    </div>
</template>
<style type='text/css'>
.index-header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    height: 90px;
    background-color: #ffc822;
    position: relative;
    align-items: center;
}

.index-header .index-htext {
    font-size: 40px;
    color: #a31f00;
}

.index-header .index-himage {
    width: 74px;
    height: 72px;
    position: absolute;
    left: 26px;
    top: 8px;
}

</style>
<script>
import mixins from '../../../mixins'
export default {
     mixins:[mixins],
    name: 'CHeader',
    props: {
        text:String,
    },
    methods:{
        back:function(){
            this.$router.go(-1)
        }
    }
}
</script>