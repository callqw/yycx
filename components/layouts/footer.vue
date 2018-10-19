<template>
    <div id="footer">
        <el-row class="footPc" style="width: 1200px; min-width: 1200px; margin: 0 auto;">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="height: 3rem;"></el-col>
            <el-col :xs="14" :sm="14" :md="14" :lg="6">
                <div class="grid-content bg-purple">
                    <nuxt-link to="/"><img src="http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/LOGOforline1.png"
                                                       style="width: 240px;margin-top: 15px"></nuxt-link>
                    <span style="line-height: 2rem; font-weight: 600">
                        <br>版权所有 © 2015年 成都亿兴创想科技有限公司
                        <br>备案：蜀ICP备16012083号-1
                    </span>
                </div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="14" :lg="6">
                <div class="grid-content bg-purple">
                    <div style="width: 100%; text-align: center">
                        <h1 style="font-size: 2.6rem; margin-top: 8px; color: #333333; margin-bottom: 2.4rem">友情链接</h1>
                    </div>
                    <div><span style="font-weight: 600; line-height: 2rem">

                    </span></div>

                </div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="14" :lg="6">
                <div class="grid-content bg-purple">
                    <div style="width: 100%; text-align: center">
                        <h1 style="font-size: 2.6rem; margin-top: 8px; color: #333333; margin-bottom: 2.4rem">联系我们</h1>
                    </div>
                    <div style="text-align: left;margin-left: 6rem"><span style="font-weight: 600; line-height: 2rem;">
                        <i class="el-icon-yx-dianhua"></i>&nbsp;&nbsp;028-85743042<br>
                        <i class="el-icon-yx-youxiang"></i>&nbsp;&nbsp;402555290@qq.com<br>
                        <i class="el-icon-yx-qq"></i>&nbsp;&nbsp;QQ: 402555290<br>
                        <i class="el-icon-yx-ccgl-dizhichaxun-11"></i>&nbsp;&nbsp;成都市高新区中和镇后街19号一层
                    </span></div>

                </div>
            </el-col>
            <el-col :xs="14" :sm="14" :md="14" :lg="6">
                <div class="grid-content bg-purple">
                    <div style="width: 100%; text-align: center">
                        <h1 style="font-size: 2.6rem; margin-top: 8px; color: #333333; margin-bottom: 2.4rem">微信公众号</h1>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="height: 3rem;"></el-col>
        </el-row>
        <el-row class="footM">
            <el-row>
                <el-col :xs="24" :sm="24" :md="12" >
                    <div style=" padding: 1rem 2rem 0 2rem">
                        <a href="http://www.foxy.xin"><img src="http://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/LOGOforline1.png"
                                                           style="width: 160px;margin-top: 15px;"></a>
                        <div style="padding-bottom: .5rem; border-bottom: 2px solid  #333"></div>
                        <p style="line-height: 2rem; font-weight: 600;border-bottom: 1px dashed #333">版权所有 © 2015年
                            成都亿兴创想科技有限公司</p>
                        <p style="line-height: 2rem; font-weight: 600;border-bottom: 1px dashed #333">
                            备案：蜀ICP备16012083号-1</p>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12">
                    <div style="padding: 1rem;">
                        <div style="width: 100%;">
                            <h1 style="font-size: 1.8rem; margin-top: 8px; color: #333333;margin-bottom: .2rem">友情链接</h1>
                        </div>
                        <div style="padding-bottom: .5rem; border-bottom: 2px solid  #333"></div>
                        <div style="text-align: left; padding-top: 1rem">
                            <el-button :plain="true" type="info">
                            </el-button>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row>
              <el-col :xs="24" :sm="24" :md="12">
                <div style="padding: 1rem;">
                    <div style="width: 100%;">
                        <h1 style="font-size: 1.8rem; margin-top: 8px; color: #333333; margin-bottom: .2rem">联系我们</h1>
                    </div>
                    <div style="padding-bottom: .5rem; border-bottom: 2px solid  #333"></div>
                    <div>
                        <p style="line-height: 2rem; font-weight: 600;border-bottom: 1px dashed #333"><i
                                class="el-icon-yx-dianhua"></i>&nbsp;&nbsp;<a href="tel:028-85743042">028-85743042</a>
                        </p>
                        <p style="line-height: 2rem; font-weight: 600;border-bottom: 1px dashed #333"><i
                                class="el-icon-yx-youxiang"></i>&nbsp;&nbsp;402555290@qq.com</p>
                        <p style="line-height: 2rem; font-weight: 600;border-bottom: 1px dashed #333"><i
                                class="el-icon-yx-qq"></i>&nbsp;&nbsp;QQ: 402555290</p>
                        <p style="line-height: 2rem; font-weight: 600;border-bottom: 1px dashed #333"><i
                                class="el-icon-yx-ccgl-dizhichaxun-11"></i>&nbsp;&nbsp;成都市高新区中和镇后街19号一层</p>
                    </div>
                </div>
            </el-col>
            </el-row>
        </el-row>

    </div>
</template>
<script>
    import $ from 'jquery'
    export default {
        data() {
            return {};
        },
        methods: {},
        mounted() {
            var defaultWidth = document.body.clientWidth;
            if (defaultWidth <= '1024') {
                $(".footPc").hide();
                $(".footM").show();
            } else {
                $(".footPc").show();
                $(".footM").hide();
            }
        },
    }
</script>
<style>
    #footer{
    background-color: #f6f9fa;
    .footPc {
        display: none;
    }

    .footM {
        display: none;
    }

    body a {
        text-decoration: none;
        color: #333333
    }

    .el-menu {
        background-color: #f6f9fa;
    }

    .el-menu--horizontal .el-menu-item {
        height: 80px;
        line-height: 80px
    }

    .el-menu .is-active {
        font-weight: 700;
        border-bottom: 5px solid #1cd388;
        font-size: 1.25rem;
    }

    .el-menu a {
        text-decoration: none;
    }
    }


</style>
