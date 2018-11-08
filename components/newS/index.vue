<template>
   <div id="news">
      <!--news-pc-->
      <section v-if="mobileLayout ===false" class="pc" style="margin-top: 3rem">
         <el-row v-for="item in defaultData" :key="item.name">
            <el-col :span="6">
              &nbsp
            </el-col>
            <el-col class="pc_content" :span="12" style="color: #959595">
               <nuxt-link to="item.link" style="font-size: 1.6rem; font-weight: bold;line-height: 40px;color: #333">{{item.title}}</nuxt-link>
               <div style="color: #333"><span style="font-size: 16px;font-weight: bold">{{item.description}}...</span></div>
               <div v-if="item.imgUrl.length !=0" style="display: flex;flex-direction: row;align-items: center;justify-content: flex-start">
                  <img v-for="imgList in item.imgUrl" :key="imgList.urlList" :src="imgList.urlList" width="30%" style="padding: 10px 5px 0 5px">
               </div>
               <el-row class="pc_content_description" style="font-size: 14px;line-height: 40px">
                  <el-col :span="12">
                     <nuxt-link to="/" style="">
                         <div style="display: inline-block">
                            <div style="display: flex;flex-direction: row;align-items: center;height: 80px">
                            <div class="pc_content_description_bg" v-bind:style="{backgroundImage:'url('+item.avatarUrl+')'}"></div>
                               <el-button type="text" style="display: inline-block;line-height: 80px;margin-left: 7px">{{item.name}}</el-button>
                               <div style="display: inline-block;line-height: 80px;margin-left: 7px">{{item.createTime}}</div>
                            </div>
                         </div>


                     </nuxt-link>
                  </el-col>
                  <el-col :span="12" >
                     <div style="display: inline-block;width: 100%">
                        <div style="display: flex;flex-direction: row;align-items: center;height: 80px;flex-grow: inherit;justify-content: flex-end">
                           <el-button type="text" style="float: right">{{item.pv}}<span style="margin-left: 5px;color: #959595">阅读</span></el-button>
                           <el-button type="text" style="float: right">{{item.comment}}<span style="margin-left: 5px;color: #959595">评论</span></el-button>
                        </div>
                     </div>

                  </el-col>

               </el-row>
            </el-col>
            <el-col :span="6">
               &nbsp
            </el-col>
         </el-row>
      </section>
      <!--news-pc-->
      <!--news-mobile-->
      <section v-if="mobileLayout ===true" class="mobile">
         <el-row>
            <el-col :span="24">
               <h1 style="font-size: 1.2rem">{{defaultData.title}}mobile</h1>
            </el-col>
         </el-row>
      </section>
      <!--news-mobile-->

   </div>
</template>
<script>
    import moment from 'moment'
    export default{
        data() {
            return {
               defaultData:[{"id":17,"userId":1,pv:'123',name:'name',comment:'3232',link:'',"createTime":"2018-10-20 23:21:41","lastVisiteTime":"2018-10-20 23:21:41","title":"Python系列之 - python循环语句","description":"基于安卓平台的快应用开发简单，上手快速，即刻报名参赛还将获得价值512元CSDN知识付费频道Gitchat年度超级","tab":"tab","type":null,"content":"undefined","imgUrl":[{urlList:'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/jiaju.png'},{urlList:'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/jiaju.png'},{urlList:'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/jiaju.png'}],avatarUrl:require('../../static/img/head_icon.jpg')}]
            }
        },
        computed: {
           mobileLayout:function () {
              return this.$store.state.mobileLayout
           }

        },
        created() {
           for(var i=0;i<this.defaultData.length;i++){
              this.defaultData[i].createTime = moment(this.defaultData[i].createTime).format('YYYY-MM');
           }

         console.log(this.mobileLayout)
        },
        methods: {

        }
    }
</script>
<style lang="scss">
    #news{
      .pc{
         .pc_content{
            .pc_content_description{
               .pc_content_description_bg{
                  width: 40px;height: 40px;background-repeat: no-repeat;background-position: center;background-size: 40px 40px ;border-radius: 50%;display: inline-block;
               }
            }
         }
      }
    }
</style>

