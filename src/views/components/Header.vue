<!--
 * @Description: 门户网站头部的组件
 * @Author: charles
 * @Date: 2021-07-01 10:12:43
 * @LastEditors: charles
 * @LastEditTime: 2021-07-02 10:44:56
-->
<template>
  <div class="header">
    <div class="wrapper">
      <div class="logo">{{logo}}</div>
      <div class="title" @click="toHome">{{name}}</div>
      <ul class="nav">
        <li @click="toList(c.id)" v-for="c in categories" :key="c.id">
          <a href="javascript:void(0)">{{c.name}}</a>
        </li>
      </ul>
      <div class="phone" @click="toContact">联系我们</div>
    </div>
  </div>
</template>
<script>
import { get } from '../../utils/request'
export default {
  // 数据
  data(){
    return {
      name:"行学天下",
      logo:"行学天下",
      categories:[]
    }
  },
  // 生命周期
  created(){
    this.queryName();
    this.queryLogo();
    this.loadCategories();
  } ,
  // 方法
  methods:{
    loadCategories(){
      let url = "/index/category/findAll"
      get(url).then(resp => {
        this.categories = resp.data;
      })
    },
    // 查询logo
    queryLogo(){
      let url = "/index/findByKey"
      get(url,{name:"logo"}).then(resp => {
        if(resp.data){
          this.logo = resp.data.val;
        }
      })
    },
    // 查询门户网站名称
    queryName(){
      let url = "/index/findByKey"
      get(url,{name:"name"}).then(resp => {
        if(resp.data){
          this.name = resp.data.val;
        }
      })
    },
    toContact(){
      this.$router.push({ path:"/contact" })
    },
    toHome(){
      this.$router.push({ path:"/" })
    },
    toList(id){
      this.$router.push({ 
        path:"/list" ,
        query : {
          categoryId:id
        }
      })

    }
  }
}
</script>
<style lang="scss" scoped>
// 头部
.header {
  box-shadow: 0 5px 5px #ccc;
  // 居中容器
  .wrapper {
    width: 90%;
    margin: 0 auto;
  }
  padding: 5px 0;
  .wrapper::after {
    clear: both;
    content: "";
    display: block;
  }
  .logo,
  .title,
  .nav,
  .phone {
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .logo {
    width: 60px;
    border-radius: 50%;
    background-color: #4fbc8d;
    color: #fff;
    text-align: center;
    float: left;
  }
  .title {
    float: left;
    padding: 0 1em;
    font-weight: bold;
    font-size: 20px;
  }
  .nav {
    margin: 0;
    padding: 0;
    float: left;
    & > li {
      float: left;
      width: 80px;
      text-align: center;
      a {
        text-decoration: none;
        color: #666;
      }
    }
  }
  .nav::after {
    content:"";
    display: block;
    clear: both;
  }
  
  .phone {
    float: right;
  }
}
</style>