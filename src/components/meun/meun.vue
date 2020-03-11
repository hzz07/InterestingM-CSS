<template>
    <div class="box">
        <ul>
          <li v-for="(item,key) in list" :key="key">
            <a href="javascript:;">
              <span v-for="(items,keys) in item" :key="keys">
                <span class="out" :style="{transitionDelay:0.05*randomNum(item)+'s'}">{{items}}</span>
                <span class="in" :style="{transitionDelay:0.05*randomNum(item)+'s'}">{{items}}</span>
              </span>
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mun",
        data(){
            return{
                list:[
                    'Home',
                    'Archives',
                    'Tags',
                    'Categories',
                    'About'
                ]
            }
        },
        methods:{
            randomNum(arr){
              return Math.floor(Math.random()*arr.length)
            }
        }
    }
</script>

<style scoped lang="scss">
  .box{
    overflow: hidden;
    height: 100%;
    background-color: black;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    ul{
      position: relative;
      color: white;
      display: flex;
      width: 40%;
      li{
        font-family: Lato, sans-serif;
        line-height: 40px;
        list-style-type: none;
        flex: 1;
        flex-shrink: 1;
        display: flex;
        text-align: center;
        position: relative;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        a{
          color: white;
          //text-decoration: none;
          span{
            position: relative;
            overflow: hidden;
            transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
            .out {
              display: inline-flex;
            }

            .in {
              position: absolute;
              left: 0;
              opacity: 0;
              transform: translateX(100%);
            }
          }
        }

      }
      li:after{
        content: '';
        display: block;
        position: relative;
        height: 3px;
        left: 0;
        right: 0;
        width: 0%;
        background-color: #495aff;
        bottom: 0;
        transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      li:hover{
        a{
          span{
            .out {
              opacity: 0;
              transform: translateX(-100%);
            }

            .in {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }
        &:after{
          width: 100%;
        }
      }


    }

  }
</style>
