<template>
    <div class='fuli-list'>
        <div class='fuli-img-body'>
            <image src='local:///fulilist'
                   class='fuli-img'></image>
            <div class='fuli-text-box'>
                <text lines="1"
                      class='fuli-list-text'>aadfsafsafsadfsdafaadfsafsafsadfsdafaadfsafsafsadfsdafaadfsafsafsadfsdaf</text>
            </div>
        </div>
        <div class='fuli-limg-bottom'>
            <div class='fuli-blist-box'>
                <div class='fuli-limg-box'>
                    <image src='local:///all'
                           class='fuli-limg-img'></image>
                </div>
                <div class='fuli-limg-box'>
                    <image src='local:///all'
                           class='fuli-limg-img'></image>
                </div>
                <div class='fuli-limg-box'>
                    <image src='local:///all'
                           class='fuli-limg-img'></image>
                </div>
                <text class='fuli-blist-text'>有340人参与</text>
            </div>
            <div class='fuli-bnum'>
                <image src='local:///all'></image>
                <text></text>
            </div>
        </div>
    </div>
</template>
<style>


.fuli-limg-img {
    height: 50px;
    width: 50px;
}

.fuli-list {
    width: 750px;
    padding-top: 22px;
    /*padding-bottom: 22px;*/
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
}

.fuli-img-body {
    width: 710px;
    height: 230px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.fuli-img {
    width: 100%;
    height: 230px;
}

.fuli-text-box {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    height: 50px;
    display: flex;
    width: 710px;
    bottom: 0px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
}

.fuli-list-text {

    color: #fff;
    font-size: 24px;
    line-height: 50px;
    /*lines:3;*/
}
.fuli-limg-box {
    height: 54px;
    width: 54px;
    border-radius: 50%;
    border-width: 2px;
    border-color: #fff;
    border-style: solid;
    overflow: hidden;
    margin-left: -10px;
}
.fuli-blist-box {
    padding-left: 10px;
    height: 110px;
    align-items: center;
    flex-direction: row;
    width: 600px;
}
.fuli-limg-bottom {
    height: 110px;
     flex-direction: row;
     justify-content: space-around;
}
.fuli-blist-text{
    font-size: 22px;
    color: #615454;
    margin-left: 14px;
}
</style>