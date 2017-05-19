<template>
    <div class='time-body'>
        <c-header text='早起时间'></c-header>
        <c-title>请选择时间</c-title>
        <div class="list-time-body"  v-for='(listTime,keys) in timeVal'>
            <c-list :time="listTime.time" :gouStart='listTime' :keys='keys' @click='keyVal' :choose='listTime.choose'></c-list>
        </div>
    </div>    
</template>
<style>
.time-body{
    width: 750px;
    background-color: #eee;
}
.list-time-body{
    padding-left:28px;
    padding-right: 28px; 
    background-color: #fff;
}
</style>
<script>
    const modal = weex.requireModule('modal')
    const storage = weex.requireModule('storage')
    import CHeader from './header.vue'
    import CList from './list.vue'
    import CTitle from './title.vue'
    import mixins from '../../../mixins'
    export default{
        mixins:[mixins],
        components:{
            CHeader,
            CList,
            CTitle
        },
        data:function(){
            return{
                timeVal:[{
                    time:'6:00',
                    choose:false
                },
                {
                    time:'6:30',
                    choose:false
                },
                {
                    time:'7:00',
                    choose:false
                },{
                    time:'7:30',
                    choose:false
                },{
                    time:'8:00',
                    choose:false
                },{
                    time:'8:30',
                    choose:false
                },{
                    time:'9:00',
                    choose:false
                }]
            }
        },
        mounted:function(){
          
        },
        methods:{
            keyVal:function(key){
                this.timeVal.forEach(function(val) {
                    return val.choose = false;
                });
                this.timeVal[key].choose = true;
                 let timeParam = this.$route.params.param
                 storage.setItem(timeParam,this.timeVal[key].time);
                 modal.toast({
                     message:'设置成功',
                     duration:0.3
                 })
                 setTimeout(()=>{this.$router.back()},300)
                
            }
        }
    }
</script>