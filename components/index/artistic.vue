<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd 
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd 
        :class="{active:kind==='part'}"
        kind="part" 
        keyword="美食">约会聚餐</dd>
      <dd 
        :class="{active:kind==='spa'}"
        kind="spa" 
        keyword="丽人">丽人SPA</dd>
      <dd 
        :class="{active:kind==='movie'}"
        kind="movie" 
        keyword="电影">电影演出</dd>
      <dd 
        :class="{active:kind==='travel'}"
        kind="travel" 
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li 
        v-for="item in cur" 
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }" 
          shadow="never">
          <img 
            :src="item.img" 
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos">
              <span>{{ item.pos }}</span>
            </li>
            <li class="price">￥
              <em>{{ item.price }}</em>
              <span>/起</span>
            </li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: "all",
      list: {
        all: [
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大中华店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华西店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华南店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华北店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大日本省店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          }
        ],
        part: [
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大中华店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华西店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华南店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华北店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大日本省店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          }
        ],
        spa: [
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大中华店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华西店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华南店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华北店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大日本省店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          }
        ],
        movie: [
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大中华店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华西店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华南店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华北店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大日本省店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          }
        ],
        travel: [
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大中店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华东店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大华西店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          },
          {
            img:
              "http://p0.meituan.net/merchantpic/b02b296fb78ab3cc6a7deb46ffe9dbf8390220.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c",
            title: "奈瑞儿美颜塑身SPA（大护额店）",
            pos: "奈瑞儿美颜塑身SPA（大中华店）",
            price: "99"
          }
        ]
      }
    };
  },
  computed: {
    cur: function() {
      return this.list[this.kind];
    }
  },
  methods: {
    over: async function(e) {
      let dom = e.target;
      let tag = dom.tagName.toLowerCase();
      let self = this;
      if (tag === "dd") {
        this.kind = dom.getAttribute("kind");
      }
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
