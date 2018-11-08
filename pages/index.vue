<template>
    <div id="index">
        <div style="width: 100%;height: 80px"></div>
        <template >
            <el-carousel indicator-position="outside"  style="height: 477px">
                <el-carousel-item v-for="(item, index) in imgList" :key="index" style="height: 450px">
                    <!--<img :src="item.url">-->

                    <!--<div :style="{background-image: url('item.url');background-position: center;background-repeat: no-repeat"></div>-->
                    <div class="banner_img" v-bind:style="{backgroundImage:'url(' + item.url + ')'}"></div>
                </el-carousel-item>
            </el-carousel>
        </template>
        <!--建站服务-->
        <div style="margin-top: 5rem">
            <el-row id="ui">
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-row style="text-align: center">
                        <h1 style="font-size: 2rem;margin-bottom: 3rem">我们的建站服务</h1>
                        <h3 style="font-size: 1.5rem">我们致力于提供专业的网站解决方案, 包括产品展示类网站建设，企业管理软件建设，商城类网站建设。 </h3>
                    </el-row>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" style="margin-top: 3rem">
                    <a href="javascript:valid(0)" class="turn" style="text-align: center;">
                        <i class="el-icon-yx-ui donut" style="font-size: 5rem; color: #1cd388"></i><br>
                        <h1>UI设计</h1><hr style="width: 25%">
                        <h6 style="width: 50%;margin: 0 auto;text-align: left;text-indent: 2rem;">好的UI设计不仅是让软件变得有个性有品味，还要让软件的操作变得舒适、简单、自由、充分体现软件的定位和特点.</h6>
                    </a>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" style="margin-top: 3rem">
                    <a href="javascript:valid(0)" class="turn" style="text-align: center;">
                        <i class="el-icon-yx-xiaochengxu1" style="font-size: 5rem; color: #1cd388"></i><br>
                        <h1>微信小程序</h1><hr style="width: 25%">
                        <h6 style="width: 50%;margin: 0 auto;text-align: left;text-indent: 2rem;">微信9亿多的日活动用户，引流和用户沉淀比较简单，企业因此获得客户的成本较低。而且小程序适用于企业、个体工商户、组织和个人，都可以定制开发.</h6>
                    </a>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" style="margin-top: 3rem">
                    <a href="javascript:valid(0)" class="turn" style="text-align: center;">
                        <i class="el-icon-yx-h5-copy donut" style="font-size: 5rem; color: #1cd388"></i><br>
                        <h1>H5网站设计</h1><hr style="width: 25%">
                        <h6 style="width: 50%;margin: 0 auto;text-align: left;text-indent: 2rem;">它跨平台性，兼容PC端与移动端，显著地降低开发与运营成本。而且H5可以让用户欣赏到炫酷的视听效果.</h6>
                    </a>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" style="margin-top: 3rem">
                    <a href="javascript:valid(0)" class="turn" style="text-align: center;">
                        <i class="el-icon-yx-chanpinzhanshi" style="font-size: 5rem; color: #1cd388"></i><br>
                        <h1>产品展示网站建设</h1><hr style="width: 25%">
                        <h6 style="width: 50%;margin: 0 auto;text-align: left;text-indent: 2rem;">简单，快捷，快速的让客户了解您的产品及服务.</h6>

                    </a>
                </el-col>


            </el-row>
        </div>
        <!--建站服务-->

        <!--demo-->
        <div style="margin-top: 3rem">
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <el-row style="text-align: center;margin-bottom: 5rem">
                        <h1 style="font-size: 2rem">精美网站模版展示</h1>
                    </el-row>
                </el-col>
                <div v-for="item in websiteData">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12">
                        <el-row>
                            <el-col :sm="2" :xs="2" :md="item.boolean.val" :lg="item.boolean.val">&nbsp;</el-col>
                            <el-col :sm="20" :xs="20" :md="19" :lg="19">
                                <article
                                        style="position: relative;padding-bottom: 4rem;margin-bottom: 4rem;background: #fff">
                                    <h2 style="position: absolute;left: 0; right: 0;margin: 0;text-align: center;font-size: 2rem;bottom: 1rem;z-index: 19">
                                        <router-link to="/">{{item.name}}</router-link>
                                    </h2>
                                    <a :href="item.href" style="display: block;padding: 1rem;">
                                        <img :src="item.url" style="width: 700px;max-width: 100%;height: auto">
                                    </a>
                                </article>
                            </el-col>
                            <el-col :sm="2" :xs="2" :md="item.boolean.val1" :lg="item.boolean.val1">&nbsp;</el-col>
                        </el-row>
                    </el-col>
                </div>
            </el-row>
        </div>
        <!--demo-->

        <!--news-->
        <div class="news">
            <!--<news></news>-->
        </div>
        <!--news-->
    </div>

</template>
<script>
    import $ from 'jquery/dist/jquery.min'
    import news from '../components/newS/index.vue'
    export default {
        data() {
            return {
                imgList:[
                        {url:require('../static/img/allline2.jpg')},
                        {url:require('../static/img/html1.jpg')},
                        {url:require('../static/img/yizhanshi1.jpg')}
                        ],
                websiteData: [
                    {
                        boolean: {val: 4, val1: 1},
                        name: "TIMER",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/timer.png",
                        href: "https://ws.yixingcx.com/timer"
                    },
                    {
                        boolean: {val: 1, val1: 4},
                        name: "BEAN",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/net.png",
                        href: "https://ws.yixingcx.com/bean"
                    },
                    {
                        boolean: {val: 4, val1: 1},
                        name: "面包屋",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/cake.png",
                        href: 'https://ws.yixingcx.com/cake'
                    },
                    {
                        boolean: {val: 1, val1: 4},
                        name: "企业网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/duorui1.png",
                        href: "https://ws.yixingcx.com/aboutcompany/compony"
                    },
                    {
                        boolean: {val: 4, val1: 1},
                        name: "电影网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/movie.png",
                        href: "https://ws.yixingcx.com/movie"
                    },
                    {
                        boolean: {val: 1, val1: 4},
                        name: "电影网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/kankan.png",
                        href: "https://ws.yixingcx.com/kankan"
                    },
                    {
                        boolean: {val: 4, val1: 1},
                        name: "健身网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/jianshen.png",
                        href: "https://ws.yixingcx.com/jianshen"
                    },
                    {
                        boolean: {val: 1, val1: 4},
                        name: "装修网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/jiaju.png",
                        href: "https://ws.yixingcx.com/jiaju"
                    },
                    {
                        boolean: {val: 4, val1: 1},
                        name: "游戏网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/game.png",
                        href: "https://ws.yixingcx.com/game"
                    },
                    {
                        boolean: {val: 1, val1: 4},
                        name: "装饰网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/door.png",
                        href: "https://ws.yixingcx.com/door"
                    },
                    {
                        boolean: {val: 4, val1: 1},
                        name: "儿童网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/baby.png",
                        href: "https://ws.yixingcx.com/baby"
                    },
                    {
                        boolean: {val: 1, val1: 4},
                        name: "直播网站",
                        url: "http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/demo/bilibili.png",
                        href: "https://ws.yixingcx.com/bili"
                    },
                ],
                boo: [true, true, true, true]
            }
        },
        components:{
            news
        },
        head(){
            return {
                title: '[亿兴创想]-成都亿兴创想科技有限公司,网站建设,网站设计,建站公司,微商城服务,小程序开发,PC端,移动端,webAPP,H5+,成都商城网站建设,成都企业网站建设,手机网站建设',
                meta: [
                    { hid: 'description', name: 'description', content: '成都亿兴创想科技有限公司-专业从事:成都网站建设,成都网站设计,建站公司,微商城服务,各种系统研发,例如(PC端、移动端、微商城、小程序、OA系统、APP等),联系电话：028-85743042' }
                ],

            }
        },
        mounted() {
            var that = this;
            $(function () {
                $(document).on('mouseenter', '.turn', function () {
                    var num = $('#ui a').index(this)
                    if(that.boo[num]){
                        var sty = {
                            animation: 'turn 2s 1',
                        }
                        $('#ui a').eq(num).find('i').css(sty)
                        that.boo[num] = false;
                        setTimeout(function () {
                            var sty = {
                                animation: '',
                            }
                            $('#ui a').eq(num).find('i').css(sty)
                            that.boo[num] = true
                        },2000)
                    }
                })

            })
            if(document.body.clientWidth <= 800){
                $(".sliderPC").hide();
                $(".sliderM").show();
            }else {
                $(".sliderPC").show();
                $(".sliderM").hide();
            }
            this.imgLeft = (document.body.clientWidth/2) - (1920/2);
            this.imgMobile = (document.body.clientWidth/2) - (800/2);
            this.buttonLeft = (document.body.clientWidth/2)-65;
            this.buttonMobile = (document.body.clientWidth/2)-38;
        },
    }
</script>
<style lang="scss">

#index{
        .turn{display: block;  }
        @keyframes turn {to {transform: rotateY(360deg)}}
        @-moz-keyframes turn {to {transform: rotateY(360deg)}}
        @-webkit-keyframes turn {to {transform: rotateY(360deg)}}
        @-o-keyframes turn {to {transform: rotateY(360deg)}}
       .banner_img {
           width: 100%;height: 450px;background-position: center;background-repeat: no-repeat;overflow: hidden;
       }
        .el-carousel__container {
            height: 450px;
        }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 450px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
}
</style>