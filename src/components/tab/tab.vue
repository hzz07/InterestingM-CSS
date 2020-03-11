<template>
  <div class="box">
      <ul>
        <li><a href="">民主</a></li>
        <li><a href="">富强</a></li>
        <li><a href="">友爱</a></li>
        <li><a href="">仁义</a></li>
        <li><a href="">尊重</a></li>
        <li><a href="">和平</a></li>
        <li><a href="">奋斗</a></li>
      </ul>
  </div>
</template>

<script>
    export default {
        name: "tab",
        data(){
            return{

            }
        },
        mounted() {
            this.$nextTick(()=>{
                document.getElementsByClassName('box')[0].style.height = document.documentElement.clientHeight+'px'
            })

        }
    }
</script>

<style scoped lang="scss">
  body{

  }
  .box{
    background: dodgerblue;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
      list-style: none;
      text-decoration: none;
      display: flex;
      li{
        padding: 20px;
        font-size: 20px;
        background: white;
        float: left;
        position: relative;
        a{
          color: rebeccapurple!important;
        }

      }

      li:after{
        content: '';
        position: absolute;
        left: 100%;
        bottom: 0;
        height: 3px;
        width: 0% ;
        background-color: orangered;
        transition: 0.2s all linear;
      }
      li:hover:after{
        width: 100%;
        left: 0;
      }
      li:hover ~ li::after {
        left: 0
      }
    }
  }
</style>
