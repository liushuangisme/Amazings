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
import Head from './components/Head' 
export default {
  components:{Head}, // 注册局部组件
  data(){
    return {
      carousels:[],
      projects:[]
    }
  },
  // 生命周期钩子- vue实例刚刚创建完成，页面还没完全渲染出来的时候
  created(){
    this.loadCarousels(); 
    this.loadProjects();
  },
  methods:{
    // 项目
    loadProjects(){
      let url="/index/project/pageQuery?page=1&pageSize=5"
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
/* 产品 */
.projects {
  padding: .5em 0;
}
.projects .project {
  padding: 1em;
  border-bottom: 1px solid #ededed;
  background-color: rgb(248, 247, 247);
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

/* 产品 */

/* 头部 */
.wrapper {
  width: 90%;
  margin: 0 auto;
}

</style>
