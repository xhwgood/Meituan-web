import Router from 'koa-router'
import Cart from '../dbs/models/cart'
import md5 from 'crypto-js/md5'

let router = new Router({
  prefix: '/cart'
})

router.post('/create', async ctx => {
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: -1,
      msg: "请登录"
    }
  } else {
    let time = Date()
    let cartNo = md5(Math.random() * 1000 + time).toString()
    let {
      params: {
        id,
        detail
      }
    } = ctx.request.body
    let cart = new Cart({
      cartNo,
      id,
      time,
      user: ctx.session.passport.user,
      detail
    })
    let result = await cart.save()
    if (result) {
      ctx.body = {
        code: 0,
        msg: '',
        id: cartNo
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '失败了'
      }
    }
  }
})

router.post('/getCart', async ctx => {
  let {
    id
  } = ctx.request.body
  try {
    let result = await Cart.findOne({
      cartNo: id
    })
    ctx.body = {
      code: 0,
      data: result ? result.detail[0] : {}
    }
  } catch (e) {
    ctx.body = {
      code: -1,
      data: {}
    }
  }
})

export default router
