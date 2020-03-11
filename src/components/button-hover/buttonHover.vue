<template>
  <div class="box">
    <div class="bu1">
      <button>
        鼠标悬停查看效果
        <div class="btn-borders">

          <div class="border-top"></div>
          <div class="border-right"></div>
          <div class="border-bottom"></div>
          <div class="border-left"></div>
        </div>
      </button>
    </div>
    <div class="bu2">
      <button>
        HOVER ME
      </button>
    </div>
    <div class="bu3">
      <button>
        HOVER ME
      </button>
    </div>
  </div>

</template>

<script>
    export default {
        name: "buttonHover",
        mounted() {
            this.$nextTick(()=>{
                document.getElementsByClassName('box')[0].style.height = document.documentElement.clientHeight+'px'
            })

        }

    }
</script>

<style scoped lang="scss">
  .box{
    display: flex;
    justify-content: space-around;
    align-items: center;

    .bu1{
      button{
        padding: 10px 20px;
        background-color: white;
        border: 1px solid darkred ;
        color: palevioletred;
        position: relative;
        outline: transparent;
        transition: 0.2s ease all;
      }
      .btn-borders{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        .border-top{
          position: absolute;
          top: -1px;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          background-color: red;
          transition: 0.2s  cubic-bezier(1, 0, 0.8, 0);


        }
        .border-right{
          position: absolute;
          right: -1px;
          width: 2px;
          height:100%;
          transform: scaleY(0);
          transform-origin: bottom;
          background-color: red;
          transition: 0.2s  cubic-bezier(1, 0, 0.8, 0);

        }
        .border-bottom{
          position: absolute;
          bottom: -1px;
          width: 100%;
          height: 2px;
          transform: scaleX(0);
          transform-origin: left;
          background-color: red;
          transition: 0.6s 0.2s cubic-bezier(0.2, 1, 0.2, 1);;
          //transition: 0.2s cubic-bezier(1, 0, 0.8, 0);
        }
        .border-left{
          position: absolute;
          bottom: 0;
          left: -1px;
          width:  2px;
          height:100%;
          transform: scaleY(0);
          transform-origin: bottom;
          background-color: red;
          transition: 0.6s 0.2s cubic-bezier(0.2, 1, 0.2, 1);;
        }

      }
      button:hover{
        /*border: none;*/
        .btn-borders{
          .border-top,.border-bottom{
            transform: scaleX(1);
          }
          .border-left,.border-right{
            transform: scaleY(1);
          }
          .border-left{
            transition: 0.2s cubic-bezier(1, 0, 0.8, 0);
          }
          .border-bottom{
            transition: 0.2s cubic-bezier(1, 0, 0.8, 0);
          }
          .border-top{
            transition: 0.6s 0.2s cubic-bezier(0.2, 1, 0.2, 1);
          }
          .border-right{
            transition: 0.6s 0.2s cubic-bezier(0.2, 1, 0.2, 1);
          }
        }
      }
    }
    .bu2{
      button{
        padding: 10px 20px;
        background-color:#00017e;
        border: 1px solid #00017e ;
        color: white;
        position: relative;
        outline: transparent;
        transition: 0.2s ease all;
        overflow: hidden;
      }
      button:before{
        position: absolute;
        width: 100%;
        height: 100%;
        content: '';
        background: linear-gradient(120deg, transparent, rgba(189, 189, 214, 1), transparent);
        top: 0;
        left: 0;
        transform: translate3d(-100%,0,0);
        transition: 0.5s ease;
      }
      button:hover:before{
        transform: translate3d(100%,0,0);
      }
      button:hover{
        box-shadow: 0px 0px 10px 6px #bdbdd6;
      }
    }
    .bu3{

      button{
        position: relative;
        display: block;
        padding: 10px 20px;
        //color: white;
        background: transparent;
        z-index: 1;
        color: white;
        border:1px solid #48c774;
        outline: transparent;
        &:before{
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          z-index: -1;
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #48c774;
          border:inherit;
          transition: 0.3s;
        }
        &:after{
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          z-index: 0;
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          transform: scale(0.8);
          background-color: transparent;
          border:inherit;
          transition: 0.3s;
        }
      }
      button:hover{
        color: #48c774;

        &:before{
          background-color:white;
          border: none;
          transform: scale(1.15);
        }
        &:after{
          transform: scale(1)
        }

      }

    }
    button:focus{
      color: none;
      outline: none;
    }
  }
</style>
