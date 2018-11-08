<template>
    <div>
        <div style="position: fixed;height: 80px;background-color: #fff;z-index: 999;width: 100%">
                <mobile-header v-if="mobileLayout"></mobile-header>
                <yx-header v-else></yx-header>
        </div>
        <nuxt v-if="!isError"></nuxt>
            <errors v-if="isError"></errors>
        <yx-footer></yx-footer>
    </div>

</template>
<script>
    import yxHeader from '~/components/layouts/header'
    import yxFooter from '~/components/layouts/footer'
    import mobileHeader from '~/components/layouts/mobileHeader'
    import errors from '~/layouts/error'
    export default {
        data() {
          return {

          }
        },
        head() {

        },
        components: { yxHeader, mobileHeader, yxFooter,errors},
        computed:{
            mobileLayout () {
                return this.$store.state.mobileLayout
            },
            isError () {
                return this.$store.state.isError
            }
        }
    }
</script>
<style lang="scss">
    @import url("../static/icon/iconfont.css");
</style>