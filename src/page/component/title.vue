<style type="text/css">
    .c-title{
        height: 100px;
        padding-left: 32px;
        justify-content: center
    }
    .c-title .c-title-text{
        color: #7f2d00;
        font-size: 28px;
    }
</style>
<template>
    <div class="c-title">
        <text class="c-title-text">
            <slot></slot>
        </text>
    </div>
</template>

<script>
    export default{
        name:"CTitle"
    }
</script>