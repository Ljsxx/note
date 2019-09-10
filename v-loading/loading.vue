<template>
  <div v-show="visible" class="loading-wrap">
    <ul class="loading-box">
      <li class="loading-box__item loading-box__item_one"></li>
      <li class="loading-box__item loading-box__item_two"></li>
      <li class="loading-box__item loading-box__item_three"></li>
      <li class="loading-box__item loading-box__item_four"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.loading-wrap {
  position: absolute;
  left: 0;
  right: 0
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
}
.loading-box {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 60px;
  width: 60px;
  margin-top: -30px;
  margin-left: -30px;
  -webkit-animation: loading-box 1s infinite;
  animation: loading-box 1s infinite;
}
.loading-box__item{
  width: 20px;
  height: 20px;
  background-color: rgba(64, 158, 255, 0.95);
  float: left;
  -moz-border-radius: 50% 50% 50% 50%;
  -webkit-border-radius: 50% 50% 50% 50%;
  border-radius: 50% 50% 50% 50%;
  margin-right: 20px;
  margin-bottom: 20px;
}
.loading-box__item:nth-child(2n+0) {
  margin-right: 0px;
}
.loading-box__item_one{
  -webkit-animation: loading-box__item_one 1s infinite;
  animation: loading-box__item_one 1s infinite;
}
.loading-box__item_two{
  -webkit-animation: loading-box__item_two 1s infinite;
  animation: loading-box__item_two 1s infinite;
}
.loading-box__item_three{
  -webkit-animation: loading-box__item_three 1s infinite;
  animation: loading-box__item_three 1s infinite;
}
.loading-box__item_four{
  -webkit-animation: loading-box__item_four 1s infinite;
  animation: loading-box__item_four 1s infinite;
}
@-webkit-keyframes loading-box{
  100% {
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading-box{
  100% {
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loading-box__item_one{
  50% {
    -ms-transform: translate(20px,20px);
    -webkit-transform: translate(20px,20px);
    transform: translate(20px,20px);
  }
}
@keyframes loading-box__item_one{
  50% {
    -ms-transform: translate(20px,20px);
    -webkit-transform: translate(20px,20px);
    transform: translate(20px,20px);
  }
}

@-webkit-keyframes loading-box__item_two{
  50% {
    -ms-transform: translate(-20px,20px);
    -webkit-transform: translate(-20px,20px);
    transform: translate(-20px,20px);
  }
}
@keyframes loading-box__item_two{
  50% {
    -ms-transform: translate(-20px,20px);
    -webkit-transform: translate(-20px,20px);
    transform: translate(-20px,20px);
  }
}

@-webkit-keyframes loading-box__item_three{
  50% {
    -ms-transform: translate(20px,-20px);
    -webkit-transform: translate(20px,-20px);
    transform: translate(20px,-20px);
  }
}
@keyframes loading-box__item_three{
  50% {
    -ms-transform: translate(20px,-20px);
    -webkit-transform: translate(20px,-20px);
    transform: translate(20px,-20px);
  }
}

@-webkit-keyframes loading-box__item_four{
  50% {
    -ms-transform: translate(-20px,-20px);
    -webkit-transform: translate(-20px,-20px);
    transform: translate(-20px,-20px);
  }
}
@keyframes loading-box__item_four{
  50% {
    -ms-transform: translate(-20px,-20px);
    -webkit-transform: translate(-20px,-20px);
    transform: translate(-20px,-20px);
  }
}
</style>
