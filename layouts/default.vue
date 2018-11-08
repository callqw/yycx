<template>
<<<<<<< HEAD
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
=======
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
>>>>>>> c2cfcf61ec765ad444435b97222f7c827ed3640e
