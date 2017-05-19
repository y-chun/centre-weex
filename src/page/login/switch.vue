<template>
    <div class='c-switch'
         ref='switchBg'
         @click='move' :class="[checkVal?'c-switch-bg':'']">
        <div class='c-switch-y'
             ref='yuan':class="[checkVal?'c-switch-true':'']"></div>
    </div>
</template>
<style type='text/css'>
.c-switch {
    width: 90px;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: #DFDFDF;
    border-radius: 30px;
    position: relative;
}

.c-switch-y {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: absolute;
    border-width: 1px;
    border-style: solid;
    border-color: #DFDFDF;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
.c-switch-true{
    left: 40px;
}
.c-switch-bg{
    background-color: #00ccc9;
    border-color: #00ccc9;
}
</style>
<script>
const animation = weex.requireModule('animation')
export default {
    props: {
        check: Boolean
    },
    data:function() {
        return {
            checkVal: this.check
        }
    },
    mounted:function(){
        // this.move();
    },
    methods: {
        move:function() {
            if (this.checkVal) {
                console.log('1')
                this.checkVal = !this.checkVal
            }else {
                this.checkVal = !this.checkVal
            }
            // console.log(this.checkVal)
            // var moveEl = this.$refs.yuan;
            // var switchBg = this.$refs.switchBg;
            // if (this.checkVal) {
            //     animation.transition(moveEl, {
            //         styles: {
            //             transform: 'translateX(40px)',
            //         },
            //         duration: 350, //ms
            //         timingFunction: 'ease',
            //         delay: 0 //ms
            //     })
            //     animation.transition(switchBg, {
            //         styles: {
            //             backgroundColor: '#00ccc9'
            //         },
            //         duration: 350, //ms
            //         timingFunction: 'ease',
            //         delay: 0 //ms
            //     })
            //     this.checkVal = !this.checkVal;
            // } else {
            //     animation.transition(moveEl, {
            //         styles: {
            //             transform: 'translateX(0px)',
            //         },
            //         duration: 350, //ms
            //         timingFunction: 'cubic-bezier(0.4, 0.4, 0.25, 1.35)',
            //         delay: 0 //ms
            //     })
            //     animation.transition(switchBg, {
            //         styles: {
            //             backgroundColor: '#fff'
            //         },
            //         duration: 350, //ms
            //         timingFunction: 'cubic-bezier(0.4, 0.4, 0.25, 1.35)',
            //         delay: 0 //ms
            //     })
            //     this.checkVal = !this.checkVal;
            // }
        }
    }
}
</script>