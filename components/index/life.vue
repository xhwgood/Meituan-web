<template>
  <div class="m-life">
    <el-row>
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <a href="#">
          <div class="m-life-pic" />
        </a>
      </el-col>
      <el-col :span="6">
        <div
          v-if="!user"
          class="m-life-login"
        >
          <h4>
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg"
              alt=""
            >
          </h4>
          <p class="m-life-login-name">Hi！你好</p>
          <p>
            <nuxt-link to="/register">
              <el-button
                round
                size="medium"
              >注册</el-button>
            </nuxt-link>
          </p>
          <p>
            <nuxt-link to="/login">
              <el-button
                round
                size="medium"
              >立即登录</el-button>
            </nuxt-link>
          </p>
        </div>
        <div
          v-else
          class="m-life-login"
        >
          <h4>
            <img
              src="//s0.meituan.net/bs/fe-web-meituan/e3064a3/img/head-img.png"
              alt="你的头像">
            <a href="#"><p class="m-life-login-user">{{ user }}</p></a>
            <a href="#"><p>我的订单</p></a>
          </h4>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <a href="#">
        <div class="m-life-hotel" /></a>
      </el-col>
      <el-col :span="7">
        <a href="#">
        <div class="m-life-music" /></a>
      </el-col>
      <el-col :span="4">
        <a href="#">
        <div class="m-life-coop" /></a>
      </el-col>
      <el-col :span="6">
        <div class="m-life-downapp">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          >
          <p>美团APP手机版</p>
          <h4><span class="red">1元起</span><em class="gary">吃喝玩乐</em></h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Slider from "./slider.vue";
export default {
  components: {
    Slider
  },
  data() {
    return {
      user: ""
    };
  },
  async mounted() {
    //get返回的是promise对象，最后可以用then
    const {
      status,
      data: { user }
    } = await this.$axios.get("/users/getUser");
    if (status === 200) {
      this.user = user;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>
