<template>
    <div class='list-body' @click='gouVal(keys)'>
        <text class='list-time':class="[choose?'list-time-choose':'']">{{time}}</text>
        <image src='./static/image/gou.png' class="list-gou" v-if='choose'></image>
    </div>
</template>
<style type='text/css'>
    .list-body{
        width: 694px;
        height: 90px;
        align-items: center;
        justify-content: space-between;
        border-bottom-width:1px;
        border-bottom-color: #e8e8e5;
        border-bottom-style: solid;
        flex-direction: row;
    }
    .list-time{
        font-size: 32px;
        color: #615454;
        line-height: 90px;
    }
    .list-gou{
        width: 33px;
        height: 24px;
    }
    .list-time-choose{
        color: #00ccc9
    }
</style>
<script>
    export default{
        name:'list',
        props:{
            time:{
                type:String,
                require:true
            },
            keys:{
                type:Number,
            },
            choose:{
                type:Boolean
            }
        },
        data:function(){
            return{
            }
        },
        computed:{
        },
        methods:{
            gouVal:function(keys){
            //    this.currentVal=!this.currentVal
                 this.$emit('click',keys)
            }
        }
    }
</script>