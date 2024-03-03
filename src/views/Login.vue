<template>
  <div class="background">
    <div class="logo"></div>
    <div class="login_form">
      <Transition name="fade">
        <div class="form_area" v-if="isLogin">
          <div class="title">Log in</div>
          <div class="form_item">
            <input type="text" placeholder="UserID">
          </div>
          <div class="form_item">
            <input type="password" placeholder="Password">
          </div>
          <div class="checked">
            <input type="checkbox">
            <div class="info">
              By continuing, you agree to the Terms and Conditions and confirm you have read our
              Privacy Notice.
            </div>
          </div>
          <!-- useid password rep email tel  -->
          <div class="submit_area">
            <div class="login">Login</div>
            <div class="signup" @click="isLogin = false">Sign up</div>
          </div>
        </div>
        <div class="form_area signup_form" v-else>
          <div class="title">Sign up</div>
          <div class="form_item">
            <input type="text" placeholder="UserID">
          </div>
          <div class="form_item">
            <input type="text" placeholder="Password">
          </div>
          <div class="form_item">
            <input type="text" placeholder="PasswordConfirmation">
          </div>
          <div class="form_item">
            <input type="text" placeholder="Email">
          </div>
          <div class="form_item">
            <input type="text" placeholder="Phonenumber">
          </div>
          <div class="submit_area">
            <div class="login" style="margin-bottom: 10px;">Sign up</div>
            <div class="signup" @click="isLogin = true">Login</div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isLogin = ref(true)
const form = ref({})

const validate = () => {
  const flag = Object.values(form.value).every(item => item)
  if (flag) {
    // 放行 请求后端接口

  } else {

  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.form_area {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.background {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/login_back.jpg') no-repeat;
  background-size: 100% 100%;
  position: relative;

  .logo {
    // width: 150px;
    // height: 100px;
    // background: url('@/assets/logo.png') no-repeat;
    // background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .login_form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    width: 500px;
    height: 650px;
    background: rgba(255, 255, 255, .5);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 34px;
      font-weight: 800;
      margin: 50px 0;
    }

    .form_item {
      width: 380px;
      height: 50px;
      margin-bottom: 40px;

      input {
        outline: none;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-left: 10px;
      }
    }

    .checked {
      font-size: 14px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      margin-bottom: 40px;

      input {
        position: absolute;
        left: -8%;
        top: 0;
      }

      .info {
        width: 380px;
      }
    }

    .submit_area {
      display: flex;
      flex-direction: column;
      align-items: center;

      .login {
        width: 300px;
        height: 60px;
        border-radius: 15px;
        font-weight: 800;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        background: #535050;
        cursor: pointer;
      }

      .signup {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        height: 30px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
}

.signup_form {
  .form_item {
    margin-bottom: 20px !important;
  }
}
</style>