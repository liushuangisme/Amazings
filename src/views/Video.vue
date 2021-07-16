<!--
 * @Author: your name
 * @Date: 2021-07-15 16:19:14
 * @LastEditTime: 2021-07-15 22:48:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xxtx-ui/src/views/Video.vue
-->
<template>
    <div>
        <div class="wrapper">
            <div class="page-wrapper page-wrapper--home-page">
                <div class="page page--home">
                    <div class="hero hero--video">
                        <div class="hero__fixed-container">
                        <video data-src="https://content.mindshareapps.com/media/Global.mp4" poster="http://8.144.165.190/test/img/video.jpg" autoplay="autoplay" loop="loop" muted="muted" defaultmuted="" playsinline="" class="hero__background-container" src="https://content.mindshareapps.com/media/Global.mp4" style="transform: matrix(1, 0, 0, 1, 0, 0);"></video>
                        </div>
                    </div>
                </div>
                <div class="block block--heading-subheading">
                    <div class="row">
                        <div class="heading-subheading">
                            <h1 class="heading">We cheer for developers</h1>
                            <p class="subheading">
                                WTM是面向女性开发者设立的全球项目，旨在为女性开发者赋能。通过全方位资源支持，帮助女性开发者在职业和技术发展上获得更大提升空间，并为其打造学习、交流和展示自我的平台。
                            </p>
                            <h1 class="heading wtm_detail" @click="toWTM">
                                点击了解更多女性赋能力量
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="row">
                        <div class="tile-grid">
                            <div>
                                <div class="tile-column">
                                    <div class="tile tile--ending-digital-discrimination-skyy-vodka">
                                        <a href="#" class="smartlink">
                                           <div class="tile__content">
                                               <div class="tile__image-container" style="background-image: url(http://8.144.165.190/test/img/女性赋能.jpeg);opacity: 1;"></div>
                                               <div class="tile__mask-container">
                                                   <div class="tile__mask" style="width: 100%; transform: translate(120%, 0%) matrix(1, 0, 0, 1, 0, 0);"></div>
                                               </div>
                                               <!-- <div class="tile__label" style="opacity:1">
                                                   <span>女性赋能 </span>
                                               </div> -->
                                               <div class="tile__title" style="opacity: 1;">
                                                   <h2>相信自己</h2>
                                                </div>
                                               <div class="tile__link" style="opacity: 1;">
                                                   <a href="#" class="smartlink" title="View Work">
                                                       <span class="smartlink__title">你可以更好</span> 
                                                   </a> 
                                                   <svg version="1.1" viewBox="0 0 22 17" class="tile__link-icon svg-icon svg-fill" aria-hidden="true">
                                                     <defs>
                                                         <path pid="0" id="svgicon_arrow_a" d="M960.046 1671.723a.844.844 0 0 0-.209-.541l-7.086-7.48a.792.792 0 0 0-1.114-.031.818.818 0 0 0-.03 1.113l5.819 6.151h-18.639a.787.787 0 0 0 0 1.575h18.639l-5.82 6.151c-.283.3-.258.82.031 1.114.3.304.83.269 1.114-.03l7.086-7.48c.187-.192.197-.354.21-.542z"></path>
                                                    </defs>
                                                    <use _fill="#fff" xlink:href="#svgicon_arrow_a" transform="translate(-938 -1663)"></use>
                                                    </svg>
                                                </div>
                                           </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="site-footer site-footer--home-page">
                <div class="site-footer__row">
                    <h1 class="smartlink">“她力量”无限大</h1>
                    <p>更好地启发和赋能女性，打破天花板的过程也在“创造更好的自己”</p>
                </div>
            </footer>

        </div>
    </div>
</template>

<script>
export default {
    methods:{
     // wtm专场
        toWTM(){
        this.$router.push({path:"/wtm"})
        },
    }
}
</script>
<style scoped>
/* block */
.block {
    background-color: #1b062e;
}
.heading-subheading {
    text-align: center;
    margin: auto;
    max-width: 43.75rem;
}
.page--home .heading-subheading .heading {
    text-transform: uppercase;
}
.heading-subheading h1, .heading-subheading h2 {
    margin: 0 auto;
}
.wtm_detail{
    cursor: pointer;
    width: 88%;
    background-color: rgb(77, 17, 218);
    border-radius: 30px;
}

@media (min-width: 769px){
h1 {
    font-size: 48px;
    font-size: 3rem;
    line-height: 3rem;
}
}
h1 {
    font-size: 40px;
    font-size: 2.5rem;
    margin-bottom: 1.5625rem;
    font-weight: 800px;
}
.heading-subheading {
    text-align: center;
    margin: auto;
    max-width: 43.75rem;
}
.block--heading-subheading {
    padding: 5rem 0;
    margin: auto;
}
.page--home .block--heading-subheading {
    padding: 8rem 0 6rem;
}
/* /block上 */
/* block下面的 */
@media (min-width: 769px){
.tile-grid .tile-column:nth-of-type(even) {
    padding-left: 15px;
    top: 120px;
}
}
.tile-column--animate {
    will-change: top;
}

svg:not(:root) {
    overflow: hidden;
}
.tile__link-icon {
    height: 1.0625rem;
    position: relative;
    left: -1.875rem;
    pointer-events: none;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
}
svg {
    fill: currentColor;
}
.tile__link a {
    color: #fff;
    margin: 0;
    font-size: 18px;
    font-size: 1.125rem;
    font-weight: 700;
    letter-spacing: -.01125rem;
    line-height: 2.25rem;
    padding-right: 3.75rem;
}
@media (min-width: 769px){
.tile__link {
    display: none;
}
}

.tile__link {
    bottom: 2rem;
    left: 2rem;
    -js-display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.tile__title h2 {
    margin: 0;
    font-size: 42px;
    font-size: 2.625rem;
    font-weight: 800;
    letter-spacing: -.02625rem;
    line-height: 2.25rem;
}
@media (min-width: 769px){
.tile__title {
    bottom: 3.625rem;
    left: 3.625rem;
}
}

.tile__title {
    bottom: 4.375rem;
    left: 2rem;
    max-width: 16.875rem;
}
.tile__label {
    -webkit-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    top: 550px;
    width: 550px;
    text-align: right;
    padding-right: 2.5rem;
    padding-top: 1.5625rem;
    font-size: 12px;
    font-size: .75rem;
    font-weight: 600;
    letter-spacing: 1.2px;
    line-height: 2.625rem;
    text-transform: uppercase;
}
.tile__label, .tile__title, .tile__link {
    position: absolute;
    z-index: 10;
    opacity: 0;
    will-change: opacity;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
}
.tile__mask {
    background-color: #791b99;
    height: 100%;
    width: 0;
}
.tile__image-container, .tile__mask-container {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.tile__image-container {
    background-image: url(http://8.144.165.190/test/img/女性赋能.jpeg);
    opacity: 1;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;
    /* opacity: 0; */
    /* -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3); */
    /* -webkit-transition: 0.2s -webkit-transform;
    transition: 0.2s -webkit-transform;
    -o-transition: 0.2s transform;
    transition: 0.2s transform;
    transition: 0.2s transform, 0.2s -webkit-transform; */
}
.tile__image-container::after {
    content: '';
    display: block;
    width: 100%;
    height: 88%;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#1b062e), color-stop(50%, rgba(27,6,46,0.2)));
    background-image: -webkit-gradient(linear, left bottom, left top, from(#1b062e), color-stop(50%, rgba(27,6,46,0.2)));
    background-image: -o-linear-gradient(top, #1b062e 0%, rgba(27,6,46,0.2) 50%);
    background-image: -o-linear-gradient(bottom, #1b062e 50%, rgba(27,6,46,0.2) 0%);
    background-image: linear-gradient(180deg, #1b062e 0%, rgba(27,6,46,0.2) 50%);
    /* background-image: linear-gradient(0deg, #1b062e 0%, rgba(27,6,46,0.2) 50%); */
    position: absolute;
    top: 0;
    left: 0;
}
.tile__mask-container {
    z-index: 20;
    overflow: hidden;
}
.tile__content {
    position: relative;
    height: 100%;
}
.tile a {
    display: block;
    height: 100%;
    width: 100%;
    color: #fff;
}
.tile {
    position: relative;
    height: 580px;
    padding-bottom: 30px;
}
@media (min-width: 769px){
.tile-grid .tile-column:nth-of-type(odd) {
    padding-right: 15px;
}
}
@media (min-width: 769px){
    .tile-grid .tile-column {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
}
}

.tile-grid .tile-column {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
}
.tile-column {
    -js-display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    position: relative;
}
@media (min-width: 960px){
.row, .template--basic-page {
    padding: 0 105px;
}
}
.row, .template--basic-page {
    padding: 0 30px;
}
@media (min-width: 960px){
.tile-grid {
    width: 70%;
}
}
@media (min-width: 769px){
.tile-grid {
    width: 83.3%;
    padding-bottom: 60px;
}
}
.tile-grid {
    margin: auto;
    min-height: 25rem;
}
/* /block */
/* 背景音乐 */
.page-wrapper {
    position: relative;
    width: 100%;
}
.page--home {
    padding-top: 0;
    overflow: hidden;
}
.page {
    /* padding-top: 110px; */
}
.hero--video {
    position: static;
}
.hero {
    width: 100vw;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100vh;
}
.hero--careers::after, .hero--job::after, .hero--job-department::after, .hero--video::after {
    content: '';
    display: block;
    height: 100vh;
    width: 100%;
    background: #1b062e;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.4;
    z-index: -1;
    will-change: transform;
}
.hero--video .hero__fixed-container {
    top: 0;
    left: 0;
    position: fixed;
    z-index: -1;
    height: 100%;
    width: 100%;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    will-change: transform;
    overflow: hidden;
}
.hero--video video {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -webkit-transform: scale(1.1) translate3d(0, 0, 0);
    transform: scale(1.1) translate3d(0, 0, 0);
    will-change: transform;
    background-url: url(http://8.144.165.190/test/img/video.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

/* /背景音乐 */

/* 底部 */
/* .smartlink::after{
    content: '';
    display: inline-block;
    height: 50%;
    width: 100%;
    background-color: #31adff;
    position: absolute;
    left: -1px;
    bottom: -5%;
    z-index: -1;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: all 0.3s cubic-bezier(0.03, 0.79, 0.29, 1);
    -o-transition: all 0.3s cubic-bezier(0.03, 0.79, 0.29, 1);
    transition: all 0.3s cubic-bezier(0.03, 0.79, 0.29, 1);
} */
@media (min-width: 960px){
.site-footer__row:not(:last-of-type) {
    margin-bottom: 2.5rem;
}
}

@media (min-width: 960px){
.site-footer__row {
    padding: 0;
}
}
.site-footer__row {
    z-index: 1;
    padding: 0 30px;
}
.site-footer {
    height: 40rem;
    /* height: 45rem; */
    padding-top: 1.25rem;
    background-color: #1b062e;
    position: relative;
    -js-display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: left;
    -ms-flex-align: left;
    align-items: left;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    will-change: transform;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.site-footer{
    /* justify-content: center; */
    text-align: center;
    margin: 0 auto;
}
.site-footer h1:hover{
    /* box-shadow: 2px 3px 4px #31adff; */
/* color:#31adff; */
}

.site-footer::before {
    content: '';
    display: block;
    background-image: url(https://content.mindshareapps.com/media/static/images/footers/homepage-mobile.jpg);
    background-size: cover;
    background-position: bottom;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.site-footer::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#1b062e), color-stop(50%, rgba(27,6,46,0.2)));
    background-image: -o-linear-gradient(top, #1b062e 0%, rgba(27,6,46,0.2) 50%);
    background-image: linear-gradient(180deg, #1b062e 0%, rgba(27,6,46,0.2) 50%);
    position: absolute;
    top: 0;
    left: 0;
}

@media(min-width: 569px){
.site-footer::before {
    background-image: url(https://content.mindshareapps.com/media/static/images/footers/homepage.jpg);
}
}
/* /底部 */
/* 通用 */
.wrapper {
    color: #fff;
    font: normal 100%/1.6 "proxima-nova","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 15px;
    font-size: .9375rem;
    line-height: 1.6;
    font-weight: normal;
    letter-spacing: 0em;
    -webkit-font-smoothing: antialiased;
}
</style>