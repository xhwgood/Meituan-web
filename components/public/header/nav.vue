<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list">
        <nuxt-link to="/my">我的美团</nuxt-link>
        <dl>
          <dd><nuxt-link to="/mine">我的订单</nuxt-link></dd>
          <dd><nuxt-link to="/mine">我的收藏</nuxt-link></dd>
          <dd><nuxt-link to="/mine">抵用券</nuxt-link></dd>
          <dd><nuxt-link to="/mine">账户设置</nuxt-link></dd>
        </dl>
      </li>
      <li>
        <nuxt-link to="/mapp">手机APP</nuxt-link>
      </li>
      <li class="list bd">
        <nuxt-link to="/">商家中心</nuxt-link>
        <dl>
          <dd><nuxt-link to="/userCenter">登录商家中心</nuxt-link></dd>
          <dd><nuxt-link to="/coop">我想合作</nuxt-link></dd>
          <dd><nuxt-link to="/wap">免费手机开店</nuxt-link></dd>
          <dd><nuxt-link to="/kaipiao">商家申请开票</nuxt-link></dd>
        </dl>
      </li>
      <li class="list site">
        <nuxt-link to="/">网站导航</nuxt-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>国际机票</dd>
            <dd>国内机票</dd>
            <dd>国际机票</dd>
            <dd>国内机票</dd>
            <dd>国际机票</dd>
            <dd>国内机票</dd>
            <dd>国际机票</dd>
            <dd>国内机票</dd>
            <dd>国际机票</dd>
            <dd>国内机票</dd>
          </dl>
          <dl class="foot">
            <dt>吃美食</dt>
            <dd>烤鱼</dd>
            <dd>小吃</dd>
            <dd>火锅</dd>
            <dd>烤鱼</dd>
            <dd>小吃</dd>
            <dd>火锅</dd>
          </dl>
          <dl class="movie">
            <dt>看电影</dt>
            <dd>热映电影</dd>
            <dd>热映电影</dd>
            <dd>高分电影</dd>
            <dd>高分电影</dd>
            <dd>高分电影</dd>
          </dl>
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="#">
                <img 
                  class="appicon" 
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" 
                  title="美团app" 
                  alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img 
                  class="appicon" 
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" 
                  title="美团app" 
                  alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img 
                  class="appicon" 
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" 
                  title="美团app" 
                  alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img 
                  class="appicon" 
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" 
                  title="美团app" 
                  alt="美团app">
              </a>
            </dd>
            <dd>
              <a href="#">
                <img 
                  class="appicon" 
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" 
                  title="美团app" 
                  alt="美团app">
              </a>
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
 @import "@/assets/css/public/header.scss";
</style>
