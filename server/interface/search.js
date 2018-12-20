import Router from 'koa-router'
// import axios from './utils/axios'
import Poi from '../dbs/models/poi'

let router = new Router({
  prefix: '/search'
})

// const sign = 'abcd'; //没有签名。。。

router.get('/top', async (ctx) => {
  try {
    let top = await Poi.find({
      'name': new RegExp(ctx.query.input),
      city: ctx.query.city
    })
    ctx.body = {
      code: 0,
      top: top.map(item => { //top.slice(0,10)，也可以限制查询十条
        return {
          name: item.name,
          type: item.type
        }
      }),
      type: top.length ? top[0].type : ''
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      top: []
    }
  }
})

router.get('/hotPlace', async (ctx) => {
  //   let {status,data:{result}}=await axios.get(``)
  let city = ctx.store ? ctx.store.geo.position.city : ctx.query.city
  try {
    let result = await Poi.find({
      city,
      type: ctx.query.type || '景点'
    }).limit(10)

    ctx.body = {
      code: 0,
      result: result.map(item => {
        return {
          name: item.name,
          type: item.type
        }
      })
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      result: []
    }
  }
})

// router.get('/resultsByKeywords', async(ctx)=>{
//   const {city,keyword} = ctx.query;
//   let {status,data:{count,pois}} = await axios.get('http://cp-tools.cn/search/resultsByKeywords',{
//     params:{
//       city,
//       keyword
//     }
//   })
//   ctx.body={
//     count:status===200?count:0,
//     pois:status===200?pois:[]
//   }
// })

export default router
