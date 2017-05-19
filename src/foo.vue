<template>
  <transition name="slide-fade">
    <router-view></router-view>
  </transition>
</template>
<style>
.weex-text {
  font-family: "Microsoft YaHei UI" !important;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateX(750px);
  opacity: 0;
}
</style>
<script>
</script>
