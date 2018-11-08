<template>
    <div>
        <div style="position: fixed;height: 80px;background-color: #fff;z-index: 999;width: 100%">
                <mobile-header v-if="mobileLayout"></mobile-header>
                <yx-header v-else v-on:listen="show"></yx-header>
        </div>
        <nuxt v-if="!isError"></nuxt>
            <errors v-if="isError"></errors>
        <yx-footer></yx-footer>
        <yx-dialog :showData.sync="showData" v-on:listenHidden="hidden"></yx-dialog>
    </div>

</template>
<script>
    import yxDialog from '~/components/dialog/index'
    import yxHeader from '~/components/layouts/header'
    import yxFooter from '~/components/layouts/footer'
    import mobileHeader from '~/components/layouts/mobileHeader'
    import errors from '~/layouts/error'
    export default {
        data() {
          return {
            showData:false
          }
        },
        head() {

        },
        components: { yxHeader, mobileHeader, yxFooter, errors, yxDialog},
        computed:{
            mobileLayout () {
                return this.$store.state.mobileLayout
            },
            isError () {
                return this.$store.state.isError
            }
        },
        methods:{
            hidden(val){
                this.showData = val
            },
            show(val) {
                this.showData = val
                this.$store.commit('dialog',val)
            }
        }
    }
</script>
<style lang="scss">
    @import url("../static/icon/iconfont.css");
</style>