<template>
    <div class='modal-body'>
        <div class="modal-box">
            <div class="modal-cont">
                <div class="modal-cont-p">
                    <slot name='cont'></slot>
                </div>
                <div class="modal-gou">
    
                </div>
            </div>
            <div class="modal-bom">
                <div class="modal-left">
                    <slot name='left'></slot>
    
                </div>
                <div class="modal-right">
                    <slot name='right'></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.modal-right {
    width: 250px;
    border-right-color: #dcdcdc;
    height: 100px;
    border-right-style: solid;
    border-right-width: 1px;
}

.modal-sure {
    text-align: center;
    line-height: 100px;
    font-size: 36px;
    color: #00ccc9;
}

.modal-cont-text {
    font-size: 30px;
}

.modal-cancel {
    text-align: center;
    line-height: 100px;
    font-size: 36px;
}

.modal-bom {
    flex-direction: row;
    height: 100px;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #dcdcdc;
}

.modal-left {
    width: 250px;
    border-right-color: #dcdcdc;
    height: 100px;
    border-right-style: solid;
    border-right-width: 1px;
}

.modal-cont {
    padding-top: 50px;
    padding-left: 40px;
    padding-right: 40px;
}

.modal-cont-p {
    padding-bottom: 40px;
}

.modal-body {
    background-color: rgba(0, 0, 0, 0.3);
    width: 750px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    align-items: center;
}

.modal-box {
    background-color: #fff;
    border-radius: 8px;
    margin-top: 230px;
    width: 500px;
    height: auto;
}
</style>
<script>
import mixins from '../../../mixins'
export default {
    mixins: [mixins],
    name:'CModal'
}</script>