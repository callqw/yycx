<template>
    <header id="yx_header">
        <el-row>
                <!--<el-col :span="5">-->
                    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 80px;line-height: 80px;text-align: center">-->
                    <!--&nbsp-->
                    <!--</el-menu>-->
                <!--</el-col>-->
                <el-col :span="10">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 80px;line-height: 80px;text-align: center">
                    <nuxt-link to="/"><img src="../../static/img/LOGOforline1.png" style="width: 240px;"/></nuxt-link>
                </el-menu>
                </el-col>
                <el-col :span="14">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 80px;line-height: 80px;text-align: center">
                    <template v-for="(item, index) in nav">
                        <el-menu-item @click="routerPush(item)" :index="index+''" :key="item.path"><i :class="item.icon"></i><nuxt-link :to="item.path">{{item.name}}</nuxt-link></el-menu-item>
                    </template>
                    </el-menu>
                </el-col>
                <!--<el-col :span="5">-->
                    <!--<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 80px;line-height: 80px;text-align: center">-->
                      <!--&nbsp-->
                    <!--</el-menu>-->
                <!--</el-col>-->


        </el-row>

    </header>
</template>
<script>
export default{
    data() {
        return {
            activeIndex: '0',
            nav: [
                { path: '/', name: '套餐介绍', icon: 'el-icon-yx-jikediancanicon35'},
//                { path: '/package/', name: '建站案例', icon: 'el-icon-yx-anli'},
                { path: '/safe/', name: '案例保障', icon: 'el-icon-yx-baozhang'},
//                { path: '/company/', name: '公司介绍', icon: 'el-icon-yx-gongsi'},
//                { path: '/callUs/', name: '联系我们', icon: 'el-icon-yx-lianxiwomen'}
            ]
        }
    },
    computed: {
        header_list() {

        }


    },
    created() {
        //头部标签数据记录
        for(var i=0; i<this.nav.length; i++){
            if(this.nav[i].path.indexOf(this.$route.path) ==0){
                    if(this.$route.path =='/'){
                        this.activeIndex = '0'
                    }else {
                        this.activeIndex = JSON.stringify(i)
                    }

            }
        }
    },
    methods: {

        routerPush(item) {
            this.$router.push(item.path)
        },
        handleSelect(key, keyPath) {
//            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="scss">
    #yx_header{
            .el-menu--horizontal>.el-menu-item{
                height: 80px;line-height: 80px;
                font-size: 14px;
            }
        .el-menu--horizontal>.el-menu-item.is-active{
            border-bottom: 5px solid #303133;
        }
    }
</style>