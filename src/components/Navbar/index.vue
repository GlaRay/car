<template>
  <div class="navbar_area">
    <div class="logo"></div>
    <div class="navbar">
      <div class="nav_item" v-for="(item, index) in navbar" :key="index">{{ item }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const navbar = ref(['Home', 'Transcation', 'CarWiki', 'Community', 'Abuout us', 'My Account'])
</script>

<style lang="scss" scoped>
.navbar_area {
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  position: sticky;
  background: #fff;
  top: 0;

  .navbar {
    display: flex;

    .nav_item {
      width: 150px;
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #6d6d6d;
      transition: color .3s;

      &:hover {
        color: #000;
      }
    }
  }
}
</style>