<!--
 * @Description: 
 * @Author: LS
 * @Date: 2021-07-12 10:56:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-12 16:39:28
-->
<template>
  <div>
<!-- 头部 -->
<div class="header">
  <div class="wrapper">
    <div class="logo">
      <img src="/images/logo.jpg" alt="">
    </div>
    <div class="title">行学天下</div>
    <ul class="category" v-for="item in categories" :key="item.id">
      <li>{{item.name}}</li>
    </ul>
   <div class="contact">
      <i>phone</i>
      <a href="">联系我们</a>
    </div>
  </div>
</div>

<!-- /头部 -->

<!-- 轮播 -->
    <div class="carousel">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in carousels" :key="item.id">
          <img :src="item.url" alt="" style="width:100%;">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- /轮播 -->
    <!-- 项目列表 -->
    <div class="projects">
      <div class="wrapper">
        <!-- 项目 -->
        <div class="project" v-for="i in projects" :key="i.id">
          <div class="picture">
            <img :src="i.figure" alt="" style="width:100%;">
          </div>
          <div class="info">
            <div class="title">{{i.name}}</div>
            <div class="time">{{i.beginTime|fmtDate}} ~ {{i.endTime|fmtDate}}</div>
            <div class="introduce">{{i.introduce}}</div>
          </div>
        </div>
        <!-- /项目 -->
      </div>
    </div>
    <!-- /项目 -->

    <!-- ... -->

    <!-- 底部 -->
    <!-- /底部 -->
  </div>
</template>

<script>
import {get} from '../utils/request'
export default {
  data(){
    return {
      carousels:[],
      categories:[],
      projects:[]
    }
  },
  // 生命周期钩子- vue实例刚刚创建完成，页面还没完全渲染出来的时候
  created(){
    this.loadCarousels();
    this.loadCategories();
    this.loadProjects();
  },
  methods:{
    loadProjects(){
      let url="/index/project/pageQuery?page=1&pageSize=5"
      get(url).then(resp=>{
        this.projects=resp.data.list;
      })

    },
    loadCategories(){
      let url = "/index/category/findAll"
      get(url).then(resp => {
        this.categories=resp.data;
      })
    },
    // 加载轮播图数据
    loadCarousels(){
      let url = "/index/carousel/findAll"
      get(url).then( (resp) => {
        this.carousels = resp.data;
      })
    }
  }
}
</script>
<style scoped>
/* 产品 */
.projects {
  padding: .5em 0;
}
.projects .project {
  padding: .5em 0;
  border-bottom: 1px solid #ededed;
}
.projects .project > .picture{ 
  float: left;
  width: 400px;
  height: 300px;
  background-color: #ededed;
}
.projects .project > .picture img{
  width: 100%; 
}
.projects .project > .info{ 
  margin-left: 420px;
  height: 300px;
}

/* 产品 */

/* 头部 */
.header {
  padding: .5em 0;
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
}

.header .contact {
  float: right;
}
</style>
