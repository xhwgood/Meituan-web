# 美团网页版高仿

基于 **Vue 全家桶** 制作的美团网页版。

## :book: 技术栈

【前端】

- **Vue**
- **Vue-router**
- **vuex**
- **SSR**
- **Element-ui**
- **axios**
- **Scss**
- **ES6**

【后端及数据库】

- **Node.js**
- **MongoDB**
- **Redis**

【自动化构建及其他工具】

- **vue-cli**
- **ESLint**

## :closed_book: 我学到了

1. 对 Vue 的组件、指令、选项、模版渲染、事件绑定、计算属性等有了一定了解
2. 了解了 Vue 组件之间的交互、传值
3. 熟悉了在 Vue 项目中使用第三方插件
4. 熟悉了组件化、模块化的开发思维
5. 熟悉了 vue-router 控制路由和子路由的方式
6. 体会到组件化、模块化开发带来的便捷

## :pencil: 实现细节

主要功能：首页、城市切换页、注册登录页

### 首页

预览：
![首页](http://m.qpic.cn/psb?/V103EO2s2J4gkQ/op57IhkAAXOxy8BL*IolT32ZDwYRrgUFV6p8uo7skA4!/b/dL8AAAAAAAAA&bo=QAaDAwAAAAARB*Y!&rf=viewer_4 "首页")

该页面主要实现了搜索栏获得焦点时显示热门搜索，输入文字时查询有关商家。左边鼠标移动可显示菜单栏，中部使用了Element的走马灯。页面下部分有五个小分类可选，移动到任意一个上会显示下属的订单和商家。

### 登录注册页

![登录页](http://m.qpic.cn/psb?/V103EO2s2J4gkQ/8gjRh7aj6BtipOlFBIpjYgKOt41ozuIeqqktKrnWixg!/b/dMIAAAAAAAAA&bo=QAaDAwAAAAARF.Y!&rf=viewer_4 "登录页")

![注册](http://m.qpic.cn/psb?/V103EO2s2J4gkQ/ERhl0lcVZKtcWLITFrz5oF29SLrs4XPS9NdOS91TinA!/b/dMIAAAAAAAAA&bo=QAaDAwAAAAARF.Y!&rf=viewer_4 "注册")

注册页定义了不同输入框的输入规则

### 城市切换页

![城市切换](http://m.qpic.cn/psb?/V103EO2s2J4gkQ/kbwtFrNCYtgJi5u3CEhQ9Npnh12V2ak8F4wr5EFE7pg!/b/dL8AAAAAAAAA&bo=QAaDAwAAAAARF.Y!&rf=viewer_4 "城市切换")

该页面上部分使用了公共组件，下面可以输入中文自动搜索城市，以及拼音首字母定位不同的城市进行选择

## :package: Build Setup

``` bash
# clone the repo into your disk.
$ git clone https://github.com/xhwgood/Meituan-web

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev
```
