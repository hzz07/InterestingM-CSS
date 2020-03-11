<template>
  <div class="content">
    <div class="box">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <div class="box2">
      <div class="item2"></div>
      <div class="item2"></div>
      <div class="item2"></div>
      <div class="item2"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped lang="scss">
  .content{
    height: 100%;
    background-color: antiquewhite;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .box{
      --loading-width:80px;
      width: 80px;
      height: 80px;
      position: relative;
      transform: rotate(75deg);
      .item{
        position: absolute;
        animation: 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
        &:nth-child(1){
          bottom:  calc(var(--loading-width) / 3);
          width:  calc(var(--loading-width) / 3);
          height: 100%;
          background: #0984e3;
          transform: scaleY(0);
          transform-origin: bottom;
          animation-name: slide-bottom-top;
        }
        &:nth-child(2) {
          left: calc(var(--loading-width) / 3);
          width: 100%;
          height: calc(var(--loading-width) / 3);
          background: #d63031;
          transform: scaleX(0);
          transform-origin: left;
          animation-name: slide-left-right;
        }

        &:nth-child(3) {
          top: calc(var(--loading-width) / 3);
          right: 0;
          width: calc(var(--loading-width) / 3);
          height: 100%;
          background: #fdcb6e;
          transform: scaleY(0);
          transform-origin: top;
          animation-name: slide-top-bottom;
        }

        &:nth-child(4) {
          right: calc(var(--loading-width) / 3);
          bottom: 0;
          width: 100%;
          height: calc(var(--loading-width) / 3);
          background: #00b894;
          transform: scaleX(0);
          transform-origin: right;
          animation-name: slide-right-left;
        }


      }
    }
    .box2{
      --loading-width:80px;
      width: 80px;
      height: 80px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: rotateAll 1s linear infinite;
      .item2{
        position: absolute;
        width: var(--loading-width);
        height:var(--loading-width);
        border-radius: 50%;
        &:nth-child(1){
          border: 20px solid transparent;
          border-top-color:#0984e3 ;
        }
        &:nth-child(2) {
          border: 20px solid transparent;
          border-right-color:#d63031 ;
        }

        &:nth-child(3) {
          border: 20px solid transparent;
          border-bottom-color:#fdcb6e ;
        }

        &:nth-child(4) {
          border: 20px solid transparent;
          border-left-color:#00b894 ;
        }
      }
    }
  }
  @keyframes rotateAll {
    to{transform:rotate(0deg);}
    /*25%{transform:rotate(90deg);}*/
    /*50%{transform:rotate(180deg);}*/
    /*75%{transform:rotate(270deg);}*/
    from{transform:rotate(360deg);}
  }
  @each $start ,$end ,$transform in (bottom,top,scaleY(1)),(left,right,scaleX(1)),(top,bottom,scaleY(1)),(right,left,scale(1)){
    @keyframes slide-#{$start}-#{$end} {
      50% {
        transform: #{$transform};
        transform-origin: #{$start};
      }

      50.1% {
        transform-origin: #{$end};
      }

      to {
        transform-origin: #{$end};
      }
    }
  }
</style>
