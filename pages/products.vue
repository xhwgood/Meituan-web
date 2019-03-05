<template>
  <el-row class="page-product">
    <el-rol :span="19">
      <crumbs :keyword="keyword" />
      <categroy
        :types="types"
        :areas="areas"
      />
      <list :list="list" />
    </el-rol>
    <el-rol :span="5">
      <amap
        v-if="point.length"
        :width="230"
        :height="290"
        :point="point"
      />
    </el-rol>
  </el-row>
</template>

<script>
import Curmbs from "@/components/products/crumbs.vue";
import Categroy from "@/components/products/categroy.vue";
import List from "@/components/products/list.vue";
import Amap from "@/components/public/map.vue";
export default {
  comments: {
    Curmbs,
    Categroy,
    List,
    Amap
  },
  data() {
    return {
      list: [],
      types: [],
      areas: [],
      keyword: '',
      point: []
    };
  },
  async asyncData(ctx){
    let keyword = encodeURIComponent(ctx.query.keyword)
    let city = encodeURIComponent(ctx.store.state.geo.position.city)
    let {status,data:{count,pois}} = await ctx.$axios.get('/search/resultsByKeywords',{
      params:{
        keyword,
        city
      }
    })
    let {status:status2,data:{areas,types}} = await ctx.$axios.get('/categroy/crumbs',{
      params:{
        city
      }
    })
    if(status === 200 && count>0&&status2 === 200) {
      return {
        list: pois.filter(item=>item.photos.length).map(item=>{
          return {
            types: item.type,
            img: item.photos[0].url,
            name: item.name,
            comment: Math.floor(Math.random()*10000),
            rate: Number(item.biz_ext.cost),
            scene: item.tag,
            tel: item.tel,
            status: '可定明日',
            location: item.location,
            module: item.type.split(';')[0]
          }
        }),
        keyword,
        areas: areas.filter(item=>item.type!=='').slice(0,5),
        types: types.filter(item=>item.type!=='').slice(0,5),
        point:(pois.find(item=>item.location).location||'').split(',')
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>
