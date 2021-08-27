<!--
 * @Description:
 * @Author: ls
 * @Date: 2021-07-01 11:24:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-14 16:29:28
-->
<template>
  <div class="container">
    <!-- 头部 -->
    <Head></Head>
    <!-- /头部 -->
    <!-- 文章 -->
    <div class="wrapper">
      <div class="title">{{articleContent?articleContent.title:''}}</div>
      <div class="title_detail">
        <span>时间：{{articleContent.publishTime|fmtDate}}</span>
        <span>分类：{{articleContent.category?articleContent.category.name:''}}</span>
        <span>作品整理人：{{articleContent.baseUser?articleContent.baseUser.realname:''}}</span>
      </div>
      <div class="body" v-html="articleContent.content"></div>
    </div>

    <!-- /文章 -->

  </div>
</template>
<script>
import { get } from '../utils/request';
import Head from './components/Head'
export default {
  components:{Head},
  watch:{
    '$route.query':{
      handler(query){
        this.id = query.id;
        this.loadArticle()
      },
      deep:true
    }
  },
  data(){
    return{
      articleContent:[],
      id:''
    }
  },
  methods:{
    // 文章详情
    loadArticle(){
      let url = "/index/article/findById";
      get(url,{id:this.id}).then(resp => {
        this.articleContent = resp.data;
      })
    }
  },
  created(){
    let id = this.$route.query.id;
    this.id = id;
    this.loadArticle();
  }
}
</script>
<style scoped>
.container .wrapper{
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  word-break: break-all;
}
.wrapper .title{
  font-size: 18px;
  padding: 0.7em 0;
  text-align: center;
  font-weight: 500;
}
.title_detail{
  display: flex;

}
.title_detail span{
  flex: 1;
  text-align: center;
}
</style>