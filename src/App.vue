<!--
 * @Author: your name
 * @Date: 2021-07-01 11:24:08
 * @LastEditTime: 2021-07-14 18:39:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /xxtx-ui/src/App.vue
-->
<template>
  <div id="app">
    <vue-particles
        color="#fff"
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
    <router-view/>
  </div>
</template>
<style scoped>
#app{
  background-color:#000;
  opacity:0.9;
}
.lizi{
  position:fixed;
  top:0;
  width:100%;
  z-index:-10;
}
</style>

