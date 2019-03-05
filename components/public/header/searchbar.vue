<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col
        :span="3"
        class="left">
        <a href="#">
          <img 
            src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" 
            alt="美团">
        </a>
      </el-col>
      <el-col 
        :span="15"
        class="center">
        <div class="wrapper">
          <el-input 
            v-model="search" 
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"/>
          <button class="el-button el-button--primary"><i class="el-icon-search"/></button>
          <dl 
            v-if="isHotPlace"
            class="hotPlace">
            <dt>热门搜索</dt>
            <dd href="#">天涯海角</dd>
            <dd href="#">三亚南山文化旅游区</dd>
            <dd href="#">蜈支洲岛</dd>
            <dd href="#">鹿回头风景区</dd>
            <dd href="#">亚龙湾热带天堂森林公园</dd>
            <dd href="#">三亚千古情</dd>
          </dl>
          <dl
            v-if="isSearchList"
            class="searchList">
            <dd
              v-for="(item,idx) in searchList"
              :key="idx">{{ item.name }}</dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#">天涯海角</a>
          <a href="#">三亚南山文化旅游区</a>
          <a href="#">蜈支洲岛</a>
          <a href="#">鹿回头风景区</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link 
              to="/"
              class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link 
              to="/" 
              class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link 
              to="/" 
              class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link 
              to="/" 
              class="appartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link 
              to="/" 
              class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return {
      search:'',
      isFocus: false,
      hotPlace:[],
      searchList:[]
    }
  },
  computed:{
    isHotPlace:function(){
      return this.isFocus&&!this.search
    },
    isSearchList:function(){
      return this.isFocus&&this.search
    }
  },
  methods:{
    focus:function(){
      this.isFocus=true
    },
    blur:function(){
      let self=this;
      setTimeout(function(){
        self.isFocus=false
      },200)
    },
    input:_.debounce(async function(){
      let self=this;
      let city=self.$store.state.geo.position.city.replace('市','')
      self.searchList=[]
      let {status,data:{top}}=await self.$axios.get('/search/top',{
        params:{
          input:self.search,
          city        //上面定义的 city
        }
      })
      self.searchList=top.slice(0,10)
    },300)            //延时以防止一直发出搜索请求
  }
}
</script>