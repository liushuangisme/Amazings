<!--
 * @Author: your name
 * @Date: 2021-07-13 09:20:39
 * @LastEditTime: 2021-07-15 16:24:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xxtx-ui/src/views/Head.vue
-->
<template>
<div class="header">
  <div class="wrapper">
    <div class="logo">
      <img :src="logo" alt="">
    </div>
    <div class="title" @click="toIndex">{{name}}</div>
    <ul class="category">
      <li v-for="item in categories" @click="toList(item.id,item.name)" :key="item.id">{{item.name}}</li>
    </ul>
    <div class="wtm" @click="toWTM">WTM专场</div>
    <div class="wtm" @click="toVideo">Video</div>
   <div class="contact">
      <i v-html="phone"></i>
      <a href="#">联系我们</a>
    </div>
  </div>
</div>
</template>

<script>
import {get} from '../../utils/request'
export default {
  data(){
    return{
      categories:[],
      name:'行学天下',
      logo:'',
      phone:'phone',
    }
  },
  methods:{
    // 回首页
    toIndex(){
      this.$router.push({path:"/"})
    },
    // video页面
    toVideo(){
      this.$router.push({path:"/video"})
    },
    // wtm专场
    toWTM(){
      this.$router.push({path:"/wtm"})
    },
    // 跳转到列表页面
    toList(categoryId,name){
      this.$router.push({
        path:'/list',
        query:{categoryId,name}
      })
    },
     // 加载phone的icon
    loadPhone(){
        let url = "/index/findByKey"
        get(url,{name:'phone'}).then(resp => {
          if(resp.data){
            this.phone=resp.data.val; 
          }
        })
    },
    // 加载网站logo
    loadWebLogo(){
      let url="/index/findByKey"
      get(url,{name:'logo'}).then(resp=>{
        if(resp.data){
          this.logo=resp.data.val;
        }
      })
    },
    // 加载网站名称
    loadWebName(){
      let url="/index/findByKey"
      get(url,{name:'name'}).then(resp=>{
        if(resp.data){
          this.name=resp.data.val;
        }
      })
    },
    // 目录分类
    loadCategories(){
        let url = "/index/category/findAll"
        get(url).then(resp => {
          this.categories=resp.data;
        })
      }, 
  },
  created(){
    this.loadCategories();
    this.loadWebName();
    this.loadWebLogo();
    this.loadPhone()
  }
}
</script>
<style scoped>
.header {
  padding: .5em 0;
  box-shadow: 1px 2px 5px #ccc;
}
.wrapper {
  width: 90%;
  margin: 0 auto;
}
.header .wrapper::after {
  content: "";
  display: block;
  clear: both;
}
.header .wrapper > * {
  float: left;
  height: 60px;
  line-height: 60px;
}
.header .logo {
  width: 60px;
  overflow: hidden;
}
.header .logo img{
  width: 100%;
}
.header .title {
  font-weight: bold;
  font-size: 20px;
  padding: 0 1em;
  cursor: pointer;
}
.header ul.category::after{
  content: "";
  display: block;
  clear: both;
}
.header ul.category > li{
  float: left;
  width: 80px;
  text-align: center;
  cursor: pointer;
}

.header .contact {
  float: right;
}
/* wtm */
.wtm{
  cursor: pointer;
  padding-left: 15px;
}
/* /wtm */
</style>
