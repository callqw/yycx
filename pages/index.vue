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
                        <h1 style="font-size: 2rem;margin-bottom: 3rem;color: #fd8baf">诚信</h1>
                        <h3 style="font-size: 1.5rem;color: #666">我们致力于提供最专业的的平台, 及带单方案。 </h3>
                    </el-row>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" style="margin-top: 3rem">
                    <a href="javascript:valid(0)" class="turn" style="text-align: center;">
                        <span class="iconBg donut" v-bind:style="{backgroundImage:'url('+ iconBg.cqssc +')'}"></span>
                        <h1 style=";color: #fd8baf">重庆时时彩</h1><hr style="width: 25%">
                        <h6 style="width: 50%;margin: 0 auto;text-align: left;text-indent: 2rem;color: #666">线路流畅，1000兆光纤，稳如老狗，告别卡顿的烦恼。</h6>
                    </a>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" style="margin-top: 3rem">
                    <a href="javascript:valid(0)" class="turn" style="text-align: center;">
                        <span class="iconBg donut" v-bind:style="{backgroundImage:'url('+ iconBg.bjpk10 +')'}"></span>
                        <h1 style=";color: #fd8baf">北京PK拾</h1><hr style="width: 25%">
                        <h6 style="width: 50%;margin: 0 auto;text-align: left;text-indent: 2rem;color: #666">跨平台，兼容PC端与移动端</h6>
                    </a>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" style="margin-top: 3rem">
                    <a href="javascript:valid(0)" class="turn" style="text-align: center;">
                        <span class="iconBg donut" style="font-size: 22px; background: linear-gradient(to top, #ffa506, #ff6f9f, #ff0032);-webkit-background-clip: text;color: transparent;font-weight: bold; ">腾讯<br>分分彩</span>
                        <h1 style=";color: #fd8baf">腾讯分分彩</h1><hr style="width: 25%">
                        <h6 style="width: 50%;margin: 0 auto;text-align: left;text-indent: 2rem;color: #666">专业的人工数据分析师团队，快上车吧。</h6>
                    </a>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" style="margin-top: 3rem">
                    <a href="javascript:valid(0)" class="turn" style="text-align: center;">
                        <span class="iconBg donut" v-bind:style="{backgroundImage:'url('+ iconBg.lhc +')'}"></span>
                        <h1 style="color: #fd8baf">六合彩</h1><hr style="width: 25%">
                        <h6 style="width: 50%;margin: 0 auto;text-align: left;text-indent: 2rem;color: #666">实力巨惠，优惠不断，惊喜连连</h6>

                    </a>
                </el-col>


            </el-row>
        </div>
        <!--建站服务-->
    </div>

</template>
<script>
    import $ from 'jquery/dist/jquery.min'
    export default {
        props:{
        },
        data() {
            return {
                iconBg: {cqssc: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/cqssc.png',bjpk10: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/pk10.png',txffc:'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/lhc.png',lhc: 'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/lhc.png',},
                show: false,
                imgList:[
                        {url:'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/cp_banner.png'},
                        {url:'https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/cp_banner2.png'
                        }
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
        components: {
        },
        head(){
            return {
                title: '腾讯分分彩官网-桃花彩',
                titleTemplate: '桃花彩对接团队',
                meta: [
                    { charset: 'utf-8' },
                    { 'http-equiv': 'cleartype', content: 'on' },
                    { 'http-equiv': 'Cache-Control' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
                    { hid: 'description', name: 'description', content: '桃花彩（thccn）是CP技能带单学习平台。桃花彩(thccn)提供了丰富的腾讯分分彩带单、重庆时时彩带单、北京PK拾官网、腾讯分分彩一天刷40万流水以及分分彩最聪明的玩法。并且正规富有交互性的玩彩趣味，你还可以和朋友一起玩彩盈利,桃花彩对接团队TT2017930。' },
                    { hid: 'keywords', name: 'keywords', content: '腾讯分分彩官网|腾讯分分彩带单|重庆时时彩带单|北京PK拾官网|腾讯分分彩是国家的吗|腾讯分分彩一个月赢50W|分分彩最聪明的玩法|分分彩一天刷10万流水|pk10如何将100玩到一万|腾讯分分彩计划精准版' },
                    { name: 'author', content: 'TT2017930' }
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
                        $('#ui a').eq(num).find('span').css(sty)
                        that.boo[num] = false;
                        setTimeout(function () {
                            var sty = {
                                animation: '',
                            }
                            $('#ui a').eq(num).find('span').css(sty)
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
        created(){
        },
        methods: {
        }
    }
</script>
<style lang="scss">

#index{
        .iconBg{
            width: 80px;height: 80px;background-size: 80px 80px;background-repeat: no-repeat;display: inline-block;
        }
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