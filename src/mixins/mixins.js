import weexVueRouter from '../../weex-vue-router'
import routes from '../router/native-router'//web端的路由在web-router里定义，在app.js里引用
Vue.use(weexVueRouter,{routes,weex})

export default {
  methods: {
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    }
  }
}
