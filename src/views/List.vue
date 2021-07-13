<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-07-12 10:56:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-13 13:08:18
-->
<template>
  <div>
    <!-- 头部 -->
    <Head></Head>
    <!-- /头部 -->

    <!-- 列表 -->
    <div class="articles">
      <ul>
        <li v-for="item in articleData.list" :key="item.id">{{item.title}}</li>
      </ul>
    </div>
    <!-- /列表 -->

     <!-- 分页 -->
     <el-pagination
      layout="prev, pager, next"
      @current-change="pageChangeHandler"
      :current-page="articleData.page"
      :page-size="articleData.pageSize"
      :total="articleData.total">
    </el-pagination>
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
      }
    }
  },

  methods:{
    pageChangeHandler(page){
      this.param.page = page;
      this.loadArticles();
    },
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
    this.loadArticles();
  }

}
</script>