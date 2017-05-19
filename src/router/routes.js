import index from '../page/index/index.vue'
// import second from '../page/second/second.vue'
import time from '../page/time/time.vue'
// import fuli from '../page/fuli/fuli.vue'
import login from '../page/login/login.vue'

export default[
{
	path :'/',
	component:index
},{
	path:'/time/:param',
	component:time
}]