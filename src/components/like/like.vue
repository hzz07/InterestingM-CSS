<template>
  <div class="box">
    <div class="loveBox">
      <input type="checkbox" id="like-toggle"/>
      <label for="like-toggle" class="heart"> </label>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div class="ring"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "like"
    }
</script>

<style scoped lang="scss">
  .box {
    background-color: #495aff;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .loveBox {
      position: relative;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      #like-toggle {
        opacity: 0;
      }

      .heart {
        display: block;
        position: relative;
        width: 20px;
        height: 20px;
        background: white;
        cursor: pointer;
        transform: rotate(-45deg);
        z-index: 1;
      }

      .heart::before {
        top: -50%;
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: 50%;
      }

      .heart::after {
        right: -50%;
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: 50%;
      }
      .lines {
        position: absolute;
        left: 52%;
        top: 48%;
        z-index: 1;
        width: 16px;
        height: 16px;
        pointer-events: none;

        .line {
          position: absolute;
          top: 0;
          left: 0;
          width: 16px;
          height: 1px;
          //background-color: #2c3e50;
          opacity: 0.6;

          @for $i from 1 through 6 {
            &:nth-child(#{$i}) {
              transform: rotate($i * 60deg + 30deg) translate(56px);
            }
          }

          &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: red;
            transform: scaleX(0);
            transform-origin: left;
          }
        }
      }
      .ring {
        position: absolute;
        z-index:0;
        width: 55px;
        height: 55px;
        //background-color: #2c3e50;
        left: 33%;
        top: 18%;
        background: transparent;
        border-radius: 50%;
        opacity: 0.3;
        pointer-events: none;
        &::before {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #495aff;
          border-radius: inherit;
          transform: scale(0.8);
          pointer-events: none;
          z-index: -1;
        }
      }

      #like-toggle:checked ~ .heart {

        background-color: red;
        animation: scale-out-elastic 1.2s ease-out reverse forwards;
        //animation: pulse 1s;
      }
      #like-toggle:checked ~ .ring {

        background: red;
        animation: scale-out-bigger 0.75s cubic-bezier(0, 1, 0.5, 1) forwards;
        //animation: pulse 1s;
        &:before{
          animation: scale-out 0.75s cubic-bezier(0, 1, 0.5, 1) forwards;

        }
      }
      #like-toggle:checked ~ .lines {
        .line::before {
          animation: slide-left-right 0.4s ease-in forwards;
        }
      }

      @keyframes pulse {
        from {
          box-shadow: 1px 1px 0 0 #2c3e50;
        }

      }
      @keyframes slide-left-right {
        50% {
          transform: scaleX(1);
          transform-origin: left;
        }
        50.1% {
          transform-origin: right;
        }
        100% {
          transform-origin: right;
        }
      }
      @keyframes scale-out-elastic {
        0% {
          transform: rotate(-45deg) scale(1);
        }

        4% {
          transform: rotate(-45deg) scale(1);
        }

        8% {
          transform: rotate(-45deg) scale(1);
        }

        14% {
          transform: rotate(-45deg) scale(1);
        }

        18% {
          transform: rotate(-45deg) scale(1);
        }

        26% {
          transform: rotate(-45deg) scale(1.01);
        }

        28% {
          transform: rotate(-45deg) scale(1.01);
        }

        40% {
          transform: rotate(-45deg) scale(0.98);
        }

        42% {
          transform: rotate(-45deg) scale(0.98);
        }

        56% {
          transform: rotate(-45deg) scale(1.05);
        }

        58% {
          transform: rotate(-45deg) scale(1.04);
        }

        72% {
          transform: rotate(-45deg) scale(0.87);
        }

        86% {
          transform: rotate(-45deg) scale(1.37);
        }

        100% {
          transform: rotate(-45deg) scale(0);
        }
      }
      @keyframes scale-out-bigger {
        to {
          transform: scale(1.5);
        }
      }
      @keyframes scale-out {
        to {
          transform: scale(1.02);
        }
      }

    }
  }
</style>
