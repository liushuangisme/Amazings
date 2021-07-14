<!--
 * @Author: your ls
 * @Date: 2021-07-13 20:28:41
 * @LastEditTime: 2021-07-14 16:33:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xxtx-ui/src/views/WTM.vue
-->

<template>
    <div>
    <!-- 头部 -->
       <Head></Head>
    <!-- /头部 -->
        <!-- 轮播 -->
        <div class="wtm_banner">
            <div class="wtm_carousels" style="width:100%">
                <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="item in carousels" :key="item.id">
                  <!-- <h3 class="medium">{{ item }}</h3> -->
                  <img :src="item.url" alt="" style="width:100%">
                  </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <!-- /轮播 -->
        <!-- body -->
        <div class="wtm_con">
            <div class="wtm_con_detail" v-for="item in wtmDetail" @click="toArticles(item.id)" :key="item.id">
                <div class="wtm_img">
                    <img :src="item.cover" alt="">
                </div>
                <div class="wtm_title">
                    <div class="wtm_tit">{{wtmDetail?item.title:''}}</div>
                    <p>
                        <span>作者:{{item.baseUser.realname}}</span>
                        <span>时间:{{item.publishTime|fmtDate}}</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- /body -->

        

        <!-- 尾部 -->

        <!-- /尾部 -->
         <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        class="lizi"
      >
      </vue-particles>
    </div>
</template>
<script>
import {get} from '../utils/request'
import Head from './components/Head'
export default {
    components:{Head},
    data(){
        return{
          wtmDetail:[],
          carousels:[],
        }
    },
    created(){
      this.loadWtm(),
      this.loadCarousels(); 
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
        loadWtm(){
            let url="/index/article/pageQuery?page=1&pageSize=6&categoryId=7"
            get(url).then( (resp) => {
              this.wtmDetail = resp.data.list;
            //   alert(JSON.stringify(resp.data));
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
/* 粒子 */
.lizi{
    position:fixed;
    top:0;
    width:100%;
    z-index:-10;
}
/* /粒子 */
/* banner */
.wtm_banner{
    width: 100%;
}
/* /banner */

/* body */
.wtm_con{
    width: 90%;
    margin: 0 auto;
    z-index:999;
}
.wtm_con .wtm_con_detail{
    width: 320px;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
    margin: 10px;
    float: left;
    cursor: pointer;
    box-shadow: 0px 1px 5px #ededed;
}
.wtm_con .wtm_con_detail:hover{
    background-color: #ededed;
    box-shadow: 1px 2px 5px #ccc;
}
.wtm_con .wtm_con_detail .wtm_img{
    width: 300px;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
    margin: 10px;
}
.wtm_con .wtm_con_detail .wtm_img img{
    width: 100%;
    /* height: 100%; */
}
.wtm_con .wtm_con_detail .wtm_img img:hover{
    transition: 1s;
    transform: scale(1.1);
}
.wtm_con .wtm_con_detail .wtm_title .wtm_tit{
    width: 90%;
    height: 100%;
    margin: 0 auto;
    background-color: #b4a078;
    border-radius: 10px;
    color:#fff;
    box-shadow: 1px 2px 3px #ededed;
}
.wtm_con .wtm_con_detail .wtm_title .wtm_tit:hover{
    background-color: #e79176;
}
.wtm_con .wtm_con_detail .wtm_title p{
    display: flex;
}
.wtm_con .wtm_con_detail .wtm_title p span{
    flex: 1;
    text-align: center;
}
/* /body */
</style>

