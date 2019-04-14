<template>
  <div class="page-order">
    <el-row>
      <el-col
        :span="4"
        class="navbar"
      >
        <h3>
          <nuxt-link
            to="#"
            style="color: #222; display: inline-block"
          >我的美团</nuxt-link>
        </h3>
        <dl>
          <nuxt-link to="#"><dt>我的订单</dt></nuxt-link>
          <nuxt-link to="#">
            <dd>全部订单<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
          <nuxt-link to="#">
            <dd>待付款<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
          <nuxt-link to="#">
            <dd>待使用<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
          <nuxt-link to="#">
            <dd>待评价<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
        </dl>
        <dl>
          <nuxt-link to="#"><dt>我的收藏</dt></nuxt-link>
          <nuxt-link to="#">
            <dd>收藏的商家<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
          <nuxt-link to="#">
            <dd>收藏的团购<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
        </dl>
        <dl>
          <nuxt-link to="#"><dt>抵用券</dt></nuxt-link>
          <nuxt-link to="#">
            <dd>可用券<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
          <nuxt-link to="#">
            <dd>失效券<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
        </dl>
        <dl>
          <nuxt-link to="#"><dt>个人信息</dt></nuxt-link>
          <nuxt-link to="#">
            <dd>账户设置<i class="el-icon-arrow-right" /></dd>
          </nuxt-link>
        </dl>
        <div class="m-life-downapp">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          >
          <p>美团APP手机版</p>
          <h4><span class="red">1元起</span><em class="gary">吃喝玩乐</em></h4>
        </div>
      </el-col>
      <el-col
        :span="19"
        class="table"
      >
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
        >
          <el-tab-pane
            label="全部订单"
            class="all"
          >
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane
            label="待付款"
            class="unpay"
          >
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane
            label="待使用"
            class="unuse"
          >
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane
            label="待评价"
            class="unreplay"
          >
            <list :cur="cur" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import List from "@/components/order/list.vue";
export default {
  components: {
    List
  },
  data() {
    return {
      activeName: "all",
      list: [],
      cur: []
    };
  },
  watch: {
    activeName: function(val) {
      this.cur = this.list.filter(item => {
        if (val === "unpay") {
          return item.status === 0;
        } else if (val === "all") {
          return true;
        } else {
          return false;
        }
      });
    },
    list: function() {
      let val = this.name;
      this.cur = this.list.filter(item => {
        if (val === "unpay") {
          return item.status === 0;
        } else if (val === "all") {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  methods: {
    handleClick: function(tab) {
      this.activeName = tab.name;
    }
  },
  async asyncData(ctx) {
    let {
      status,
      data: { code, list }
    } = await ctx.$axios.post("/order/getOrders");
    if (status === 200 && code === 0 && list.length) {
      return {
        list: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0].url : "/logo.png",
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status === 0 ? "待付款" : "已付款"
          };
        }),
        cur: list.map(item => {
          return {
            img: item.imgs.length ? item.imgs[0].url : "/logo.png",
            name: item.name,
            count: 1,
            total: item.total,
            status: item.status,
            statusTxt: item.status === 0 ? "待付款" : "已付款"
          };
        })
      };
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/order/index.scss";
@import "@/assets/css/index/index.scss";
dt {
  color: #222;
  &:hover {
    color: #31bbac;
  }
}
dl {
  margin-top: 30px;
}
</style>
