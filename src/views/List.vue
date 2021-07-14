<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-07-12 10:56:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-13 19:41:09
-->
<template>
  <div>
    <!-- 头部 -->
    <Head></Head>
    <!-- /头部 -->
<div class="wrapper">
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
        pageSize:2
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
/* 列表 */
.wrapper{
  width: 60%;
  margin: 0 auto;
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