// const basePath='http://10.1.10.218:8080/dist';//替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)
//const basePath='http://xiazhou.me/example/xiazhou-weex/dist';
const domain='file://assets/dist/';
export default [
    {path:'/',component:'file://assets/dist/index/index.js'},
    {path:'/time/:param',component:domain+'time/time.js'},
    {path:'/fuli',component:domain+'fuli/fuli.js'},
    {path:'/login',component:domain+'login/login.js'},
    {path:'/register',component:domain+'register/register.js'},
    {path:'/register2',component:domain+'register2/register2.js'},
    // {path:'/second',component:'./second/second.js'}
]

