<template>
    <header>
        <div>mobile</div>
    </header>
</template>
<script>
export default{
    data() {
        return {
            activeIndex: '0',
            nav: [
                { path: '/', name: '首页', icon: 'el-icon-tickets'},
                { path: '/package', name: '建站', icon: 'el-icon-tickets'},
                { path: '/demo', name: '案例', icon: 'el-icon-tickets'}
            ]
        }
    },
    created() {
//     console.log(this.$router.options.routes,'aa')
    },
    methods: {

        routerPush(item) {
            this.$router.push(item.path)
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style lang="scss">

</style>