<template>
  <div class="box">
<!--    <div class="bg">-->
<!--      <div v-for="item in imgs">-->
<!--        <div class="space"></div>-->
<!--        <div class="progressive">-->
<!--          <img class="preview" v-progressive="item.src" :data-srcset="item.srcset" :src="item.preview" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <header>
      <div class="headerbg">
         <h1>
<!--           <span style="animation-delay: 0s;">h</span>-->
<!--           <span style="animation-delay: 0.2s;">z</span>-->
<!--           <span style="animation-delay: 0.4s;">z</span>-->
           <span style="animation-delay: 0.6s;">有</span>
           <span style="animation-delay: 0.8s;">趣</span>
           <span style="animation-delay: 1s;">的</span>
           <span style="animation-delay: 1.2s;">代</span>
           <span style="animation-delay: 1.4s;">码</span>
           <span style="animation-delay: 1.6s;">动</span>
           <span style="animation-delay: 1.8s;">画</span>
           <span style="animation-delay: 2s;">模</span>
           <span style="animation-delay: 2.2s;">块</span>
         </h1>
      </div>
    </header>
    <div class='list'>
      <ul v-for="(item ,index) in itmes">
        <li v-for="(detail,index) in item" class="wow slideInUp" data-wow-offset="100" >
          <router-link :to="detail.path">
            <div class="itmeBox progressive ">
              <img class="preview" v-progressive="detail.icon" :data-srcset="detail.srcset" :src="detail.preview" />
<!--              //<img :src="detail.icon" v-pro  alt="">-->
                <div class="textBox">
                  {{detail.name}}
                </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
    import {WOW} from 'wowjs'
    export default {
        name: "home",
        mounted(){
            this.$nextTick(() => { // 在dom渲染完后,再执行动画
                var wow = new WOW({
                    boxClass: 'wow',
                    animateClass: 'animated',
                    offset: 0,
                    mobile: true,
                    live:true
                })
                wow.init()
            })
        },
        data(){
            return{
                itmes:[
                    [
                        {
                            icon:require('../img/tab.jpg'),
                            preview: 'http://ww1.sinaimg.cn/large/007UgRf1gy1gaup8hulg2j30dc07iwel.jpg',
                          path:'/tab',
                          name:'tab底部滚动跟随'
                        },
                        {
                            icon:require('../img/comfirm.jpg'),
                            preview: 'http://ww1.sinaimg.cn/large/007UgRf1gy1gaup8hulg2j30dc07iwel.jpg',
                            path:'/confirm',
                            name:'confirm动态弹出层'
                        },
                        {
                            icon:require('../img/buttonHover.jpg'),
                            preview: 'http://ww1.sinaimg.cn/large/007UgRf1gy1gaup8hulg2j30dc07iwel.jpg',
                            path:'/buttonHover',
                            name:'按钮悬停动态边框'
                        },
                        {
                            icon:require('../img/love.jpg'),
                            preview: 'http://ww1.sinaimg.cn/large/007UgRf1gy1gaup8hulg2j30dc07iwel.jpg',
                            path:'/like',
                            name:'红心点赞动画效果'
                        },
                        {
                            icon:require('../img/loading.jpg'),
                            preview: 'http://ww1.sinaimg.cn/large/007UgRf1gy1gaup8hulg2j30dc07iwel.jpg',
                            path:'/loading',
                            name:'loading旋转效果'
                        },
                        {
                            icon:require('../img/meun.jpg'),
                            preview: 'http://ww1.sinaimg.cn/large/007UgRf1gy1gaup8hulg2j30dc07iwel.jpg',
                            path:'/meun',
                            name:'不规则滚动菜单'
                        },
                    ],
                ]
            }
        },
    }
</script>

<style scoped lang="scss">
.box{
  margin:0 10% 0 10% ;
  header{
    border-radius: 5px;
    height: 220px;
    //background:rgba(255,255,255,0.5) ;
    margin: 2%  0 0 0;
    background: url("./header.jpg") no-repeat center;
    background-size: cover;
    fill-rule: evenodd;
    overflow: hidden;
    transition: 0.4s ease all;
    .headerbg{
      background: rgba(0,0,0,0.25);
      position: relative;
      z-index: 10;
      vertical-align: middle;
      width: 100%;
      height: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
      h1{
        color: white;
        font-size: 22px;
        font-weight: 600;
      }
    }
  }
  header:hover{
    box-shadow: 10px 10px 10px rgba(0,0,0,0.3);
    transform: scale(1.05);
    .headerbg{
      h1{
        span{
          display: inline-block;
          animation: bulge 2s infinite;
        }
      }
    }
  }
  @keyframes bulge {
    50%{
      transform: translate3d(0,-10px,0);
    }
  }
  .list{
    margin-top: 2%;

    ul{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      li{
        flex-basis: 230px;
        margin: 10px 10px;
        flex-shrink: 1;

        a{
          .itmeBox{
            height: 130px;
            width: 230px;
            box-shadow: 9px 10px 6px 0px rgba(0,0,0,0.2);
            position: relative;
            .preview{
              position: absolute;
              width: 100%;
              height: 100%!important;
            }
            .textBox{
              transition: 0.4s ease all;
              text-align: center;
              display: flex;
              align-items: center;
              height: 100%;
              width: 100%;
              opacity: 0;
              justify-content: center;
              position: absolute;
            }
          }
        }
      }
      li:hover{
        a{
          .textBox{
            opacity: 1;
            background-color: #2c3e50;
            text-align: center;
            display: flex;
            align-items: center;
            color: white;
            transform: rotateY(360deg);
            transition: 0.4s ease all;
            height: 100%;
            animation: pulse 1s;
            box-shadow: 0 0 0 1em transparent;
          }
        }
        @keyframes pulse {
          from {
            box-shadow: 1px 1px 0 0 #2c3e50;
          }

        }

      }
    }
  }
}

</style>
