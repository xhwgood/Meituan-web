<template>
  <div>
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="item in list" :key="item">
        <a :href="'#city-' + item">{{ item }}</a>
      </dd>
    </dl>
    <dl v-for="item in block" :key="item.title" class="m-categroy-section">
      <dt :id="'city-' + item.title">{{ item.title }}</dt>
      <dd>
        <span v-for="c in item.city" :key="c">
          <a href="/">{{ c }}</a>
        </span>
      </dd>
    </dl>
  </div>
</template>

<script>
import pyjs from 'js-pinyin'
export default {
  data() {
    return {
      list: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),
      block: []
    }
  },
  async mounted() {
    let self = this
    let blocks = []
    let {
      status,
      data: { city }
    } = await self.$axios.get('/geo/city')
    if (status === 200) {
      let p
      let c
      let d = {}
      city.forEach(item => {
        p = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
        c = p.charCodeAt(0)
        if (c > 96 && c < 123) {
          if (!d[p]) {
            //如果临时对象不在数组里，则声明数组
            d[p] = []
          }
          if (
            item.name != '县' &&
            item.name != '自治区直辖县级行政区划' &&
            item.name.indexOf('省') == -1
          )
            d[p].push(
              item.name.replace(
                /(市|(蒙古|土家族苗族|藏族|傣族景颇族|回族|白族|藏族羌族|彝族|哈尼族|蒙古族|傈僳族|布依族苗族|苗族侗族|壮族苗族|傣族|哈萨克|朝鲜族|蒙古族藏族|哈尼族彝族|)自治州)$/g,
                ''
              )
            )
        }
      })
      for (let [k, v] of Object.entries(d)) {
        blocks.push({
          title: k.toUpperCase(),
          city: v
        })
      }
      blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0)) //排序
      self.block = blocks
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/changeCity/categroy.scss';
</style>
