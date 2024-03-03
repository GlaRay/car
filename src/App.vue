<template>
  <!-- 显示配置好的路由表的每个页面 -->
  <router-view></router-view>
</template>

<script setup>
</script>

<style lang="scss">
body {
  margin: 0 !important;
}

.logo {
  width: 150px;
  height: 80px;
  background: url('@/assets/logo.png') no-repeat;
  background-size: 100% 100%;
}

.flex_cc {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>