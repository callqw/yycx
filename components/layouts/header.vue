<template>
    <div>
        <header id="yx_header">
            <el-row>
                <el-col :span="5">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 80px;line-height: 80px;text-align: center">
                        &nbsp
                    </el-menu>
                </el-col>
                <el-col :span="5">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 80px;line-height: 80px;text-align: center">
                        <nuxt-link to="/">
                            <div style="display: flex;flex-direction: row;align-items: center;justify-content: center">
                                <div class="logo_bg" v-bind:style="{backgroundImage:'url('+logo+')'}"></div>
                                <span style="font-size: 28px;font-weight: bold;color: #fd8baf">桃花彩</span>
                            </div>

                        </nuxt-link>
                    </el-menu>
                </el-col>
                <el-col :span="9">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 80px;line-height: 80px;text-align: center">
                        <template v-for="(item, index) in nav">
                            <el-menu-item :index="index+''" :key="item.name">
                                <el-button @click="handDialog(item.dialogVisible)" :type="item.type"><i :class="item.icon" style="color: #fd8baf"></i> {{item.name}}</el-button>

                            </el-menu-item>
                        </template>
                    </el-menu>
                </el-col>
                <el-col :span="5">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 80px;line-height: 80px;text-align: center">
                        &nbsp
                    </el-menu>
                </el-col>


            </el-row>
        </header>
    </div>


</template>
<script>
export default{
    data() {
        return {
            logo:require('../../static/img/taohua.jpg'),
            activeIndex: '0',
            nav: [
                { path: '/', name: '平台登录', icon: 'el-icon-yx-shenfenzheng', type:'default',dialogVisible:true},
                { path: '/', name: '平台注册', icon: 'el-icon-yx-anli', type:'default',dialogVisible:true},
                { path: '/', name: '联系客服', icon: 'el-icon-yx-lianxidianhua',type:'default',dialogVisible:true},
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
        handDialog(val) {
            this.$emit('listen',val)
        },
        routerPush(item) {
            this.$router.push(item.path)
        },
        handleSelect(key, keyPath) {
        }
    }
}
</script>
<style lang="scss">
    #yx_header{
    .logo_bg{margin-right: 10px;
        width: 70px;height: 70px;background-position: center;;background-repeat: no-repeat;background-size: 70px 70px;
    }
            .el-menu--horizontal>.el-menu-item{
                height: 80px;line-height: 80px;
                font-size: 14px;
            }
        .el-menu--horizontal>.el-menu-item.is-active{
            border-bottom: 5px solid #fd8baf;
        }
    }
</style>