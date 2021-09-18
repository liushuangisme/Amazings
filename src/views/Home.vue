<!--
 * @Description:
 * @Author: LS
 * @Date: 2021-07-12 10:56:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-13 23:36:29
-->
<template>
  <div>
<!-- 头部 -->
<Head></Head>
<!-- /头部 -->

<!-- 轮播 -->
    <div class="carousel">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in carousels" :key="item.id">
          <img :src="item.url" alt="" style="width:100%" @click="toVideo">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 小屏轮播 -->
    <div class="xs_carousel">
      <el-carousel :interval="5000" style="height:12rem">
        <el-carousel-item v-for="item in carousels" :key="item.id" style="height:12rem">
          <img :src="item.url" alt="" style="width:100%;height:12rem" @click="toVideo" >
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 小屏轮播 -->
    <!-- /轮播 -->
    <!-- 项目列表 -->
    <div class="projects">
      <div class="wrapper">
        <!-- 项目 -->
        <div class="project" v-for="i in projects" @click="toArticles(i.id)" :key="i.id">
          <div class="picture">
            <el-image class="img"
            style="width: 380px; height: 280px"
            :src="i.cover"
            fit="cover"></el-image>
          </div>
          <div class="info">
            <div class="title">{{i.title}}</div>
            <div class="time">{{i.publishTime|fmtDate}}</div>
            <div class="introduce">来源于：{{i.category.name}}</div>
          </div>
        </div>
        <!-- /项目 -->
      </div>
    </div>
    <!-- 小于768 显示-->
    <div class="xsprojects">
      <h2 class="xsh2">文章推荐：</h2>
      <div class="project" v-for="i in projects" @click="toArticles(i.id)" :key="i.id">
          <div class="picture">
            <el-image
            style="width: 5em; height: 5em"
            :src="i.cover"
            fit="cover"></el-image>
          </div>
          <div class="info">
            <div class="title">{{i.title}}</div>
            <div class="time">{{i.publishTime|fmtDate}}</div>
            <div class="introduce">来源于：{{i.category.name}}</div>
          </div>
        </div>
    </div>
    <!-- /项目 -->

    <!-- ... -->

    <!-- 底部 -->
    <Footer></Footer>
    <!-- /底部 -->
  </div>
</template>

<script>
import {get} from '../utils/request'
import Head from './components/Head'
import Footer from './components/Footer'
export default {
  components:{
    Head,
    Footer
    }, // 注册局部组件
  data(){
    return {
      carousels:[
        {
      "id": 2,
      "name": "one",
      "introduce": "这是第一张",
      "url": "http://8.144.165.190/test/img/swipe/lunbo-1.jpg",
      "status": "正常"
    },
    {
      "id": 3,
      "name": "two",
      "introduce": "这是第二张",
      "url": "http://8.144.165.190/test/img/swipe/lunbo-2.jpg",
      "status": "正常"
    },
    {
      "id": 4,
      "name": "three",
      "introduce": "这是第三张",
      "url": "http://8.144.165.190/test/img/swipe/lunbo-3.jpg",
      "status": "正常"
    }
      ],
      projects:[]
    }
  },
  // 生命周期钩子- vue实例刚刚创建完成，页面还没完全渲染出来的时候
  created(){
    // this.loadCarousels();
    this.loadProjects();
  },
  methods:{
    // wtm_video专场
    toVideo(){
      this.$router.push({path:"/video"})
    },
    // 文章详情
    // 跳转到列表页面
    toArticles(id){
      this.$router.push({
        path:'/article',
        query:{id}
      })
    },
    // 项目
    loadProjects(){
      let url="/index/article/pageQuery?page=1&pageSize=5"
      get(url).then(resp=>{
        this.projects=resp.data.list;
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
/* 轮播 */
  /* 小轮播 */
@media screen and (max-width: 767px) {
  .carousel{
    /* height: 200px; */
    display: none;
  }
  .xs_carousel{
    /* height: 200px; */
  }
  .el-carousel .el-carousel--horizontal{
    /* height:200px; */
    overflow:hidden;
  }
  .el-carousel__container{
  position:relative;
  /* height:200px!important; */
  overflow:hidden;
}
.el-carousel__item{
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    /* height:200px; */
    /* line-height: 200px; */
    margin: 0;
  }
  .el-carousel__arrow{
    top: 20%;
  }
}
/* 大轮播 */
@media screen and (min-width:768px){
.xs_carousel{
    display:none;
}
.el-carousel__container{
  position:relative;
  height:500px!important;
}
.el-carousel__item{
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
}
/* /轮播 */
/* 产品 */
/* 小产品 */
@media screen and (max-width:768px){
  .projects{
    display:none;
  }
  .project{
    width:90%;
    margin:0 auto;
    height:7em;
    border-bottom:1px solid #ccc;
    display:flex;
  }
  .xsprojects .xsh2{
    padding-left: .6em;
  }
/* .project::after{
  content: "";
  display: block;
  clear: both;
} */
 .project > .picture{
  flex:1;
  padding-top:.9em;
  /* background-color: #ededed; */
}
.project .info{
  flex:3;
  padding-top:.2em;
  /* float: left; */
}
.project .info .title{
  font-weight:400;
  font-size:1.2rem;
}
}
/* 大产品展示 */
@media screen and (min-width:769px){
  .xsprojects{
    display:none;
  }
.projects {
  padding: .5em 0;
  cursor: pointer;
}
.projects .project {
  padding: 1em;
  border-bottom: 1px solid #ededed;
  border-radius: 5px;
}
.projects .project > .picture{
  float: left;
  width: 380px;
  height: 280px;
  line-height: 280px;
  background-color: #ededed;
}
.projects .project > .picture img{
  width: 100%;
}
.projects .project > .info{
  margin-left: 420px;
  height: 300px;
  padding: 0.2rem 0;
}
.project .info .title {
font-size: 20px;
padding: .7em 0;
}
.project .info .title:hover{
  color:#4b0c77;
}
.project .picture{
  overflow: hidden;
}
.project .img{
  cursor: pointer;
  transition: all 0.6s;
}
.project  .img:hover{
  transform: scale(1.2);
}
/* 头部 */
.wrapper {
  width: 90%;
  margin: 0 auto;
}
}

/* 产品 */



</style>
