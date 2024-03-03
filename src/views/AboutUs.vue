<template>
  <div class="aboutus">
    <Navbar />
    <div class="content">
      <div class="intro">Website Information</div>
      <div class="detail">
        <div class="banner flex_cc">
          <img src="@/assets/banner1.webp" alt="">
        </div>
        <div class="intro_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatiorullamco laboris nisi ut aliguip ex ea commodo
          consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sintoccaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          estlaborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremquelaudantium,
          totam rem aperiam,eague ipsa quae ab illo inventore veritatis et quasarchitecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sitaspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui rationevoluptatem sequi nesciunt.
        </div>
      </div>
    </div>
    <div class="support_area">
      <div class="support_content">
        <div class="title">Support</div>
        <div class="info">
          <span>email:12345678@outlook.com</span>
          <span>phone number:1234567810</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar/index.vue'
</script>

<!-- vue里的一个样式隔离   vue是组件化开发  如果不用scoped的话，其他组件里如果也有当前组件中的类名 类名就重复 -->
<!-- 所以scoped把当前组件的样式隔离  样式只在当前组件生效 -->

<style lang="scss" scoped>
.aboutus {
  width: 100%;
}



.content {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 1400px;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 50px;

  .intro {
    font-size: 24px;
    font-weight: 800;
    padding-right: 50px;
  }

  .detail {
    flex: 1;

    .banner {
      width: 100%;
      height: 350px;
      overflow: hidden; // 溢出隐藏
      margin-bottom: 50px;

      img {
        width: 100%;
      }
    }

    .intro_text {
      line-height: 25px;
    }
  }
}

.support_area {
  width: 100%;
  height: 300px;
  background-color: #979797;

  .support_content {
    width: 1400px;
    position: relative;
    height: 100%;
    margin: 0 auto;
    display: flex;

    .title {
      align-self: flex-start;
      font-size: 24px;
      font-weight: 800;
      padding: 40px 0;
    }

    .info {
      position: absolute;
      left: 45%;
      top: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      span {
        margin-bottom: 20px;
      }
    }
  }

}
</style>

<!-- 登录后后端会返回token凭证  有的页面需要登陆后才能看到  就需要判断token有效性 -->