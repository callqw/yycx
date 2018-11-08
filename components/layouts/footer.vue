<template>
    <div id="footer">
        <el-row class="footPc" style="width: 1200px; min-width: 1200px; margin: 0 auto;">
            <el-col :xs="24" :sm="24" :md="24" :lg="24" style="height: 3rem;"></el-col>
            <el-row>
                <el-col :xs="24" :sm="24" :md="12" :lg="6">
                    <img :src="imgUrl.btnInfo">
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24">
                    <div style="text-align: center;margin-top: 3rem">
                        <span style=""> 版权所有 Copyright © 桃花彩娱乐 Reserved</span>
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
            return {
                imgUrl:{
                    logo: require('../../static/img/taohua.jpg'),
                    btnInfo: require('../../static/cp/bottom-info.jpg')
                }
            };
        },
        methods: {},
        mounted() {

        },
    }
</script>
<style>
    #footer{
        margin-top: 30px;
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
