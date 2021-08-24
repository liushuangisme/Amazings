<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-07-02 10:23:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-14 18:47:49
-->
<template>
  <div id="footer">
    <div class="foot-bg">
      <div class="copyright">
        本站主题采用 HTML5、CSS3、vue、element-ui等技术
        <!-- <a href="#" rel="nofollow">Vue</a> -->
        &nbsp;版权归个人所有!<br />
        <a
          href="https://mp.weixin.qq.com/s/NyHO5gjkupDaOvJR_SvaYA"
          rel="nofollow"
          target="_blank"
          >&nbsp;欢迎关注个人公众号：了不起了不起
          </a>
          <br />
        <a href="https://mp.weixin.qq.com/s/NyHO5gjkupDaOvJR_SvaYA">一起交流前端知识--小刘</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#footer {
  position: relative;
  text-align: center;
  z-index: 103;
  padding: 20px 0 0;
  font-size: 12px;
  font-family: "PingFang SC", "Lantinghei SC", STheiti, Verdana, 微软雅黑, 宋体,
    Geneva, sans-serif;
}

.foot-wrap {
  position: relative;
  width: 1210px;
  margin: 0 auto;
  text-align: left;
  color: #a6a78b;
}

.foot-link {
  float: left;
  display: inline;
  width: 728px;
  overflow: hidden;
  margin-left: 30px;
}

#footer a:hover {
  color: #236898;
}

.foot-about {
  float: right;
  display: inline;
  width: 450px;
  padding-top: 53px;
  color: #abac97;
  text-shadow: 0 1px 0 rgb(255 255 255 / 75%);
  line-height: 24px;
}

.foot-about > p {
  text-indent: 2em;
}

.friend-link,
.friend-link a,
.copyright {
  color: #aaa;
}

.copyright {
  clear: both;
  padding: 25px 0;
  line-height: 2em;
  text-align: center;
  /* background: #4b0c77; */
  color: #888;
}
.copyright a {
  color: #aaa;
}
</style>
</style>