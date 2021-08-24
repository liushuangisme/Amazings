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
       <!-- 头部 -->
        <div class="header">
           <div class="header_section">
               <h1>欢迎来到WTM工坊</h1>
               <p>让我们一起分享文章与见闻</p>
           </div>
        </div>
        <!-- /头部-->

        <!-- bodyWTM工坊内容 -->
        <div class="wtm_container">
        <!-- title WTM标题 -->
            <div class="wtm_back">
                <div class="wtm_back_img">
                    <h1>WTM工坊</h1>
                    <p>传播女性的成长，为更多女性注入力量，加入WTM，成为我们的一员，让我们共同乘风破浪！</p>
                </div>
            </div>
            <!-- /title-->
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
        </div>
        <!-- /bodyWTM工坊内容  -->
        <!-- 时间轴 -->
        <div class="wtm_time">
        <!-- 时间轴标题 -->
            <div class="wtm_back">
                <div class="wtm_back_img">
                    <h1 class="wtm_View" @click="toWTM_View()">点击查看WTM</h1>
                    <p>传播女性的成长，为更多女性注入力量，加入WTM，成为我们的一员，让我们共同乘风破浪！</p>
                </div>
            </div>
            <!-- /时间轴标题 -->

            <div class="timeLine">
                <!-- 时间轴-->
                <el-tabs :tab-position="tabPosition" style="height: 200px;width:90%">
                    <el-tab-pane label="WTM宗旨">
                        <h3>&nbsp;&nbsp;面向女性开发者设立的全球项目，旨在为女性开发者赋能。</h3>
                        <p>&nbsp;&nbsp;通过全方位资源支持，帮助女性开发者在职业和技术发展上获得更大提升空间，并为其打造学习、交流和展示自我的平台。</p></el-tab-pane>
                    <el-tab-pane label="女性发展现状">
                        <p>&nbsp;&nbsp;江湖传言，很多 IT 公司为了提升性别比例，对女性开发者的招聘做了一些倾斜，可是事实上，女性的开发者的比例依旧不高。
                        在调查中，发现男女比例竟然悬殊到 9:1。</p>
                        <h5>&nbsp;&nbsp;小伙伴们，请珍惜你身边的女性开发者，她们非常的珍贵。</h5></el-tab-pane>
                    <el-tab-pane label="选择WTM">
                        <p>联结：&nbsp;&nbsp;为科技女性搭建交流互动的平台，碰撞迸发更多灵感火花。</p>
                        <p>赋能：&nbsp;&nbsp;理论与实践的全方位赋能，助力女性开发者快速提升，解锁新技能。</p>
                        <p>成长：&nbsp;&nbsp;通过激励与创新扶持，帮助女性开发者获得更多发展空间，实现价值。</p>
                    </el-tab-pane>
                    <el-tab-pane label="I am excellent today">
                        <h3> &nbsp;&nbsp;I am a female developer and I am very good. </h3>
                        <h3> &nbsp;&nbsp;believe in myself and don't set limits on myself.</h3>
                    </el-tab-pane>
                </el-tabs>
            </div>
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
        // wtm_view专场
        toWTM_View(){
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
.header_section{
    position: static;
    top: 0;
    text-align: center;
    color: #fff;
    height: 180px;
    width: 100%;
    border-radius: 0 0 70px 70px;
    background-color: #4B0C77;;
    margin-bottom: 25px;
    padding-top: 120px;
}
.header_section h1{
    font-size: 50px;
}
/* /头部 */
/*时间轴  */
.wtm_time{
    background-color: #ededed;
    padding: 1.2em 0;
}
.timeLine{
    width:75%;
    margin: 20px auto;
    height: 200px;
}
/* /时间轴 */
/* 背景标题 */
.wtm_back{
    width: 90%;
    margin: 10px auto;
    text-align: center;
    height: 130px;
}
.wtm_back .wtm_back_img{
    width: 100%;
    height: 100%;
    /* background: url(http://8.144.165.190/test/img/1_02.jpg) no-repeat; */
    text-align: center;
}

.wtm_back .wtm_back_img h1{
    cursor: pointer;
    margin: 15px 30%;
    border-radius: 50px;
    font-weight: 500;
    padding: .5em;
    color:#fff;
    background-color: #4B0C77;;
}
.wtm_back .wtm_back_img p:hover{
    color: #b4a078;
}
/* /背景标题 */
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
    padding: 1em 0;
}
/* /banner */

/* bodyWTM工坊内容 */
.wtm_container{
    /* background-color: rgb(245, 205, 231); */
    padding: 1.2em 0;
}
.wtm_con{
    width: 90%;
    margin: 0 auto;
}
.wtm_con:after{
    content: '';
    display: block;
    clear: both;
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
/* /bodyWTM工坊内容 */
</style>

