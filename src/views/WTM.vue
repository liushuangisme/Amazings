<!--
 * @Author: your ls
 * @Date: 2021-07-13 20:28:41
 * @LastEditTime: 2021-07-15 23:46:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xxtx-ui/src/views/WTM.vue
-->

<template>
    <div>
    <!-- 头部 -->
       <Head></Head>
    <!-- /头部 -->
    <!-- lunbo -->
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
    <!-- /lunbo -->
        <!-- 头部 -->
        <div class="header">
           <div class="header_section"></div>
        </div>
        <!-- /头部-->
        <!-- title background -->
        <div class="wtm_back">
        <div class="wtm_back_img">
            <h1>WTM工坊</h1>
            <p>传播女性的成长，为更多女性注入力量，加入WTM，成为我们的一员，让我们共同乘风破浪！</p>
        </div>
        </div>
        <!-- /title background -->
        <!-- body -->
        <div class="wtm_con">
            <div class="wtm_con_detail" v-for="item in wtmDetail" @click="toArticles(item.id)" :key="item.id">
                <div class="wtm_img">
                    <img :src="item.cover" alt="">
                </div>
                <div class="wtm_title">
                    <div class="wtm_tit">{{wtmDetail?item.title:''}}</div>
                    <p>
                        <span>作品整理人:{{item.baseUser.realname}}</span>
                        <span>时间:{{item.publishTime|fmtDate}}</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- /body -->
<!-- 时间轴 -->
        <div class="timeLine">
            <!-- 时间轴标题 -->
            <el-tabs :tab-position="tabPosition" style="height: 200px;width:90%">
                <el-tab-pane label="WTM宗旨">
                    <p>面向女性开发者设立的全球项目，旨在为女性开发者赋能。</p>
                    <p>通过全方位资源支持，帮助女性开发者在职业和技术发展上获得更大提升空间，并为其打造学习、交流和展示自我的平台。</p></el-tab-pane>
                <el-tab-pane label="女性发展现状">
                    <p>江湖传言，很多 IT 公司为了提升性别比例，对女性开发者的招聘做了一些倾斜，可是事实上，女性的开发者的比例依旧不高。
                    在调查中，发现男女比例竟然悬殊到 9:1。</p>小伙伴们，请珍惜你身边的女性开发者，她们非常的珍贵。</el-tab-pane>
                <el-tab-pane label="选择WTM"><p>联结</p>为科技女性搭建交流互动的平台，碰撞迸发更多灵感火花。<p>赋能</p>理论与实践的全方位赋能，助力女性开发者快速提升，解锁新技能。<p>成长</p>通过激励与创新扶持，帮助女性开发者获得更多发展空间，实现价值。</el-tab-pane>
                <el-tab-pane label="I am excellent today">
                    <p>I am a female developer and I am very good. </p>
                    <p>I believe in myself and don't set limits on myself.</p>
                </el-tab-pane>
            </el-tabs>
        </div>
        <!-- /时间轴 -->


        <!-- 尾部 -->

        <!-- /尾部 -->
         <!-- <vue-particles
        color="#dedede"></vue-particles> -->
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
          tabPosition: 'left'
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
/* header */
.header_section{
    height: 100px;
    width: 100%;
    border-radius: 0 0 70px 70px;
}
/* /header */
/*时间轴  */
.timeLine{
    width:75%;
    margin: 20px auto;
    height: 200px;
}
/* /时间轴 */
/* 标题 */
.wtm_back{
    width: 90%;
    margin: 10px auto;
    text-align: center;
    height: 130px;
}
.wtm_back .wtm_back_img{
    width: 100%;
    height: 100%;
    text-align: center;
}

.wtm_back .wtm_back_img h1{
    margin: 0px 30%;
    border-radius: 50px;
    font-weight: 500;
    padding: .5em;
    color:#fff;
    background-color:#4B0C77;
}
.wtm_back .wtm_back_img p:hover{
    color: #b4a078;
}
/* /标题 */
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
    height: 300px;
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

