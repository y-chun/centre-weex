<template>
    <div class='fuli-body'>
        <c-header text='福利'>
            <text class='fuli-rtext' @click="jump('/')">休息设置</text>
        </c-header>
        <div class="fuli-list-body">
            <c-list></c-list>
        </div>
    </div>
</template>
<style>
.fuli-body{
    width: 750px;
}
.fuli-rtext{
    font-size:24px;
    color: #a31f00;
    position: absolute;
    right: 22px;
    top: 32px;
}
.fuli-list-body{
    padding-left:22px;
    padding-right:22px;
}
</style>
<script>
    import CHeader from './header.vue'
    import CList from './list.vue'
    import mixins from '../../../mixins'
    export default {
        mixins:[mixins],
        components:{
            CHeader,
            CList
        }
    }
</script>