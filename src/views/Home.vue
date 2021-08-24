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
          <img :src="item.url" alt="" style="width:100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- /轮播 -->
    <!-- 项目列表 -->
    <div class="projects">
      <div class="wrapper">
        <!-- 项目 -->
        <div class="project" v-for="i in projects" @click="toArticles(i.id)" :key="i.id">
          <div class="picture">
            <el-image
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
      <div class="project" v-for="i in projects" @click="toArticles(i.id)" :key="i.id">
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
      "url": "http://8.144.165.190/test/img/swipe/lunbo-3.jpeg",
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
@media screen and (max-width: 768px) {
  .el-carousel .el-carousel--horizontal{
    height:300px;
  }
  .el-carousel__container{
  position:relative;
  height:300px;
}
.el-carousel__item{
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    height:300px;
    line-height: 300px;
    margin: 0;
  }
}
@media screen and (min-width:769px){
.el-carousel__container{
  position:relative;
  /* height:500px; */
}
.el-carousel__item{
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    /* line-height: 500px; */
    margin: 0;
  }
}
/* /轮播 */
/* 产品 */
@media screen and (max-width:768px){
  .projects{
    display:none;
  }
}
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
/* 头部 */
.wrapper {
  width: 90%;
  margin: 0 auto;
}
}

/* 产品 */



</style>
