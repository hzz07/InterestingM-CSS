<template>
  <div class="box">
    <a href="javascript:;" @click="showC">点击弹出confirm</a>
    <div class="shadow" v-show="show">
      <div class="tips">
        <header>
          <img src="../../img/confirmTips.png" alt="">
        </header>
        <div>
          <h1>提示</h1>
          <p>点击确定按钮完成此confirm事件</p>
        </div>
        <footer>
          <a href="javascript:;" class="confirm" @click="confirmCli"> <span>确定</span></a>
          <a href="javascript:;" class="cancel" @click="cancelCli"><span>取消</span> </a>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "confirm",
        data(){
          return{
              show:false
          }
        },
        methods:{
            showC(){
              this.show = true
            },
            confirmCli(){
              this.$router.push({path:'/'})
            },
            cancelCli(){
                this.show = false
            }
        },
        mounted() {
            this.$nextTick(()=>{
                document.getElementsByClassName('box')[0].style.height = document.documentElement.clientHeight+'px'
            })

        }
    }
</script>

<style scoped lang ='scss'>
  .box{
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      padding:8px 20px;
      border-radius: 5px;
      background-color: orangered;
      color: white;
    }
    a:hover{
      background-color: orange;
    }
    .shadow{
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.4s ease all;
      .tips{
        color: white;
        background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
        border: transparent;
        border-radius: 12px;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
        width: 320px;
        height: 220px;
        transition-delay: 0.1s;
        animation: sc 0.4s;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px;
        header{
          img{
            width: 60px;
            height: 60px;
            margin-top: 20px;
            animation: move 0.5s ease 0.2s forwards;
            opacity: 0;
          }
        }
        div{
          h1{
            font-size: 20px;
            font-weight: 600;
            line-height: 50px;
            text-align: center;
            animation: move 0.5s ease 0.32s forwards;
            opacity: 0;
          }
          p{
            display: inline-block;
            line-height: 25px;
            animation: move 1s ease 0.5s forwards;
            opacity: 0;
          }
        }
        footer{
          margin-top: 1rem;
          display: flex;
          justify-content: space-around;
          a{
            display: flex;
            border-radius: 20px;
            background-color: white;
            padding: 30 20px;
            margin: 0 10px;
            position: relative;
            overflow: hidden;
            z-index: 20;
            opacity: 0;
            span{
              color: white;
              position: relative;
              z-index: 20;

            }
          }
          a:first-child{
            animation: move 0.5s ease 0.68s forwards;
            span{

              color: #48c774!important;
            }

          }
          a:last-child{
            animation: move 0.5s ease 0.8s forwards;
            span{
              color: hsl(348, 86%, 61%)!important;
            }

          }
          .confirm:after{
            content: '';
            top:0;
            left: 0;
            position: absolute;
            width: 100%;
            display: block;
            height: 100%;
            transform: translate3d(100%,0,0);
            border-radius: 20px;
            transition: 0.4s cubic-bezier(0.75, 0, 0.25, 1);
          }
          .confirm:hover{
            span{
              transition: 0.4s cubic-bezier(0.75, 0, 0.25, 1);
              color: white!important;
            }
          }
          .confirm:hover:after{
            transform: translate3d(0,0,0);
            background: #48c774;
            z-index: 10;

          }

          .cancel:after{
            content: '';
            top:0;
            left: 0;
            position: absolute;
            width: 100%;
            display: block;
            height: 100%;
            transform: translate3d(-100%,0,0);
            border-radius: 20px;
            transition: 0.4s cubic-bezier(0.75, 0, 0.25, 1);
          }
          .cancel:hover{
            span{
              transition: 0.4s cubic-bezier(0.75, 0, 0.25, 1);
              color: white!important;
            }
          }
          .cancel:hover:after{
            transform: translate3d(0,0,0);
            background: hsl(348, 86%, 61%);
            z-index: 10;

          }
        }
      }
    }
    @keyframes sc {
      0%{
        transform: scale(0.85);
      }
      80%{
        transform: scale(1.15);
      }
      100%{
        transform: scale(1);
      }
    }
    @keyframes move {
      0%{
        transform: scale(0.4);
      }

      50%{
        transform: scale(1.2);
        opacity: 1;
      }

      100%{
        transform: scale(1);
        opacity: 1;
      }
    }
  }
</style>
