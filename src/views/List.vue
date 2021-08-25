<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-07-12 10:56:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-14 18:36:15
-->
<template>
  <div>
    <!-- 头部 -->
    <Head></Head>
    <!-- /头部 -->
  <div class="wrapper">
    <!-- 粘性导航 -->
      <div class="sticky-nav">
        <h3>友情链接：</h3>
        <a href="https://v3.cn.vuejs.org/" target="_blank">Vue</a>
        <a href="http://www.axios-js.com/zh-cn/docs/index.html" target="_blank">Axios</a>
        <a href="https://segmentfault.com/channel/toolkit" target="_blank">VueRouter</a>
        <a href="https://element.eleme.cn/#/zh-CN" target="_blank">ElementUI</a>
        <a href="https://youzan.github.io/vant/v3/#/zh-CN/home" target="_blank">Vant</a>
        <!-- <a href="https://panjiachen.gitee.io/vue-element-admin-site/zh/guide/" target="_blank">VueElementAdmin</a> -->
        <a href="https://less.bootcss.com/#" target="_blank">Less</a>
        <a href="https://www.lodashjs.com/" target="_blank">Lodash</a>
        <a href="https://www.npmjs.com/" target="_blank">npm</a>
        <a href="https://antv.vision/zh/" target="_blank">AntV</a>
        <a href="https://jquery.cuishifeng.cn/jQuery.Ajax.html" target="_blank">JQuery</a>
        <a href="https://es6.ruanyifeng.com/" target="_blank">ES6</a>
        <a href="https://www.runoob.com/w3cnote/bubble-sort.html" target="_blank">排序算法</a>
        <a href="https://developers.weixin.qq.com/miniprogram/dev/component/" target="_blank">小程序</a>
      </div>
      <!-- /粘性导航 -->


    <!-- 列表 -->
      <div class="articles">
        <div class="title">{{name}}</div>
        <ul>
          <li v-for="(item,index) in articleData.list" @click="toArticles(item.id)" :key="item.id">
            <div>（{{index+1}}）{{item.title}}</div>
            <div>[{{item.publishTime|fmtDate}}]</div>
          </li>
        </ul>
      </div>
    <!-- /列表 -->
  </div>
     <!-- 分页 -->
     <div class="el-page">
        <el-pagination
        layout="prev, pager, next"
        @current-change="pageChangeHandler"
        :current-page="articleData.page"
        :page-size="articleData.pageSize"
        :total="articleData.total">
       </el-pagination>
     </div>

    <!-- /分页 -->
</div>
</template>
<script>
import { get } from '../utils/request';
import Head from './components/Head'
export default {
  watch:{
    '$route.query':{
      handler(query){
        this.param.categoryId = query.categoryId;
        this.name=query.name;
        this.loadArticles()
      },
      deep:true
    }
  },
  data(){
    return {
      articleData:{},
      param:{
        page:1,
        pageSize:8
      },
      name:''
    }
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
    // 分页
    pageChangeHandler(page){
      this.param.page = page;
      this.loadArticles();
    },
    // 文章
    loadArticles(){
      let url = "/index/article/pageQuery";
      get(url,this.param).then(resp => {
        this.articleData = resp.data;
      })
    }
  },
  components:{Head},
  created(){
    let categoryId = this.$route.query.categoryId;
    this.param.categoryId = categoryId;
    this.name=this.$route.query.name;
    this.loadArticles();
  }

}
</script>
<style scoped>
.wrapper{
  /* width: 75%; */
  display: flex;
  margin: 0 8%;
}
/* 粘性导航 */
.sticky-nav {
  position: sticky;
  top: 90px;
  flex: 1;
  height: fit-content;
  display: flex;
  flex-direction: column;
  /* margin-top: 10px; */
  padding-right: 10px;
}
.sticky-nav a {
  height: 24px;
  padding: 8px 16px;
  text-decoration: none;
  color: #212529;
  font-size: 16px;
}
.sticky-nav a::before {
  content: "#";
  display: inline;
  color: #BC3FBC;
  padding-right: 8px;
}
.sticky-nav a:hover {
  background-color: #eee;
  border-radius: 4px;
}

/* 粘性导航 */
/* 列表 */
.articles{
 flex:7;
 cursor: pointer;
}
.articles .title{
  font-size: 18px;
  font-weight: 500;
  color: #666;
  padding: .6em 0;
  border-bottom: 1px solid #ededed;
}
.articles ul li{
  padding-top: 1em;
  display: flex;
}
.articles ul li div:first-child{
  flex: 1;
}
.articles ul li div:last-child{
  width: 100px;
  text-align: right;
}
/* /列表 */
/* 分页 */
.el-page{
  text-align: center;
  padding-top:1em ;
}
/* /分页 */
</style>