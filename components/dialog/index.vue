<template>
    <div id="dialog">
        <!--弹窗-->
        <el-dialog
                title="VX:TT2017930"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <div>
                <img src="https://yxcx.oss-cn-beijing.aliyuncs.com/yxcximg/banner/cpCode.png" style="" alt="二维码">
            </div>
            <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">确 定</el-button>
            </span>
        </el-dialog>
        <!--弹窗-->
    </div>



</template>
<script>
export default{
    props: {
        showData: Boolean,
    },
    computed: {
        changShow(val) {
        }
    },
    watch:{
        showData:function (indexVal,oldVal) {
            if(indexVal){
                this.dialogVisible= true
            }else {
                this.dialogVisible= false
            }
        }

    },
    data() {
        return {
            dialogVisible: false
        }
    },
    components: {

    },
    created() {
    },
    methods: {
        handleClose(){
            this.$emit('listenHidden',false)
        }
    }
}
</script>
<style lang="scss">
    #dialog{

    }
</style>