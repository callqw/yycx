<template>
  <div id="safe">

    <div style="height: 80px;width: 100%"></div>
    <div class="index">
      <article style="width: 100%; max-width: 100%;margin: 0 auto">
        <!--保障-->
        <div style="height: 450px">
          <div class="safe_banner" :style="{backgroundImage: 'url(' + bgimg + ')'}">

            <!--<img alt="产品服务|四大保障；从咨询，购买，设计，开发，上线，售后，为您提供一体化的服务" style="position: relative;left: -25%" src="../static/img/safe.png">-->
          </div>
        </div>
        <!--保障-->
        <el-row style="height: 120px;line-height: 120px; background: #efefef">
          <el-col :xs="24" :sm="24" :md="24" :lg="6" style="text-align: center">
            <a href="#forTui" class="icon-safe">
              <i class="el-icon-yx-tui"></i><span>设计不满意退全款</span>
            </a>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="6"style="text-align: center">
            <a href="#forBao" class="icon-safe">
              <i class="el-icon-yx-woyaotoubiao101420"></i><span>保证提供源码</span>
            </a>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="6"style="text-align: center">
            <a href="#forKuai" class="icon-safe">
              <i class="el-icon-yx-kuai"></i><span>网站问题快速响应</span>
            </a>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="6"style="text-align: center">
            <a href="#forSong" class="icon-safe">
              <i class="el-icon-yx-song" style="font-size: 5.8rem"></i><span>送您终身售后服务</span>
            </a>
          </el-col>
        </el-row>
      </article>
      <article id="forTui" class="forTui">
        <h1>设计不满意退全款</h1>
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="4" class="forTui-i">
            <i class="el-icon-yx-tui"></i>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="20" class="forTui-mes">
            <h1>网站制作流程图：</h1>
            <div class="for_flow">
              <div >
                <span>需求分析</span>
              </div>
              <div>
                <div>
                  <div> ></div>
                </div>
              </div>
            </div>
            <div class="for_flow">
              <div >
                <span>提交订单</span>
              </div>
              <div>
                <div>
                  <div> ></div>
                </div>
              </div>
            </div>
            <div class="for_flow">
              <div >
                <span>网站设计</span>
              </div>
              <div>
                <div>
                  <div> ></div>
                </div>
              </div>
            </div>
            <div class="for_flow">
              <div >
                <span>编写代码</span>
              </div>
              <div>
                <div>
                  <div> ></div>
                </div>
              </div>
            </div>
            <div class="for_flow">
              <div >
                <span>网站开通</span>
              </div>
              <div>
                <div>
                  <div> ></div>
                </div>
              </div>
            </div>
            <div class="for_flow">
              <div >
                <span>终身维护</span>
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="20" class="for_tuiLi">
            <h3>1.&nbsp用户选择好服务，提交订单后，我们设计师开始设计您的网站，效果图设计大约5-6个工作日！</h3>
            <h3>2.&nbsp我们会根据客户的需求设计效果图，设计完后，设计师会一对一的和客户沟通，直到满意为止！如果多次修改不满意的情况下，我们将全额退款！</h3>
            <h3>3.&nbsp网站效果图确定以后，我们的技术编写程序代码，所以程序做好后不会再次对效果图进行更改，所以请认真审核效果图！</h3>
          </el-col>
        </el-row>
      </article>
      <article id="forBao" class="forTui">
        <h1>保证提供源码</h1>
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="4" class="forTui-i">
            <i class="el-icon-yx-woyaotoubiao101420"></i>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="20" class="forTui-mes">
            <h1>网站制作完后的文件：</h1>
            <el-row>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-psd"></i><span>首页源文件</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-psd"></i><span>内页源文件</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-psd"></i><span>Banner</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-ai"></i><span>icon源文件</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-html"></i><span>HTML</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-CSS"></i><span>CSS</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-js"></i><span>JS</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-IMG-"></i><span>IMG</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-js"></i><span>后台代码</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-word"></i><span>域名空间管理权限</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" >
                <i class="el-icon-yx-ROOT"></i><span>网站内容管理权限</span>
              </el-col>
            </el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="20" class="for_tuiLi">
              <h3>1.&nbsp如果用户提供效果图，亿兴创想只负责前端和后台，我们将不提供效果图源文件！</h3>
              <h3>2.&nbsp如果用户提供效果图和前端，我们只负责后台开发，我们将只提供源码！</h3>
              <h3>3.&nbsp如果用户在建站没有特殊需求，我们将使用NODE开发后台，如指定某种语言，请提前告知！</h3>
              <h3>4.&nbsp开发完后，网站对应的域名，后台管理也一并提供给您！</h3>
            </el-col>
          </el-col>
        </el-row>
      </article>
      <article id="forKuai" class="forTui">
        <h1>网站问题快速响应</h1>
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="4" class="forTui-i">
            <i class="el-icon-yx-kuai"></i>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="20" class="for_tuiLi">
            <h3>1.&nbsp网站制作中出现任何问题，您都可以随时联系我们，我们帮您协调安排网站制作相关事宜，尽快完成网站上线！</h3>
            <h3>2.&nbsp网站制作完成上线后出现任何问题，您都可以联系我们,我们这边安排售后专员一对一为您服务，快速解决您的问题！</h3>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="20" class="for_tuiLi" style="text-align: center;font-size: 3rem;color: #666666;font-weight: bold;margin-top: 2rem">
            <i class="el-icon-yx-zaixianzixun" style="font-size: 7rem;color: #F97D00"></i><br>
            人工客服<br>7X24<br>
            <a style="color: #F97D00" href="tel:028-85743042">028-85743042</a>
          </el-col>
        </el-row>
      </article>
      <article id="forSong" class="forTui">
        <h1>送您终身售后服务</h1>
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="4" class="forTui-i">
            <i class="el-icon-yx-song"></i>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="20" class="forTui-mes">
            <el-col :xs="24" :sm="24" :md="24" :lg="20" class="for_tuiLi">
              <h3>1.&nbsp网站制作完成，您对效果图确认，程序测试也没问题，我们将网站上线后，网站就进入我们的售后服务阶段！</h3>
              <h3>2.&nbsp网站后续使用过程中出现问题，我们将终身免维护费，例如，打不开，被攻击，乱码等技术性问题我们都终身维护，保障网站正常运行。</h3>
              <h3>3.&nbsp根据每个客户需求不同，有后台的网站，如果哪里不会操作我们的技术会一对一教会您。</h3>
              <h3>4.&nbsp所有网站制制作完成后均享受终身维护服务。但以下情况除外：</h3>
              <p style="margin-left: 2rem;font-size: 1rem;font-weight: 600;color: #666666">一&nbsp&nbsp不包括给网站进行改版。</p>
              <p style="margin-left: 2rem;font-size: 1rem;font-weight: 600;color: #666666">二&nbsp&nbsp后续因公司发展需要改版的，我们会根据改版的难易程度，适当的收取费用（不高于市场价）。</p>
              <p style="margin-left: 2rem;font-size: 1rem;font-weight: 600;color: #666666">三&nbsp&nbsp终身售后服务只限于在我们公司制作的网站，不包括在其它公司制作的网站。</p>
            </el-col>
          </el-col>
        </el-row>
      </article>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        bgimg: require('../static/img/safe.png'),
        fullscreenLoading: false
      };
    },
    head(){
      return {
        title: '案例保障',
        meta: [
          { hid: 'description', name: 'description', content: '案例保障.设计不满意退全款,保证提供源码,网站问题快速响应,送您终身售后服务' }
        ],
      }
    },
    beforeCreate() {
    },
    created() {
    },
    beforeMount () {

    },

  }
</script>
<style lang="scss">
  #safe{
  .safe_banner{
    width: 100%; height: 450px;background-position: center;background-repeat: no-repeat;
  }
      #forSong{background: rgb(239, 239, 239);margin-top: 5rem;padding-bottom: 5rem}
      #forBao .forTui-mes >div span{font-size: 1.5rem;}
      #forBao .forTui-mes >div i{font-size: 3rem; color: #F97D00;padding-right: 1rem;vertical-align: middle}
      #forBao .forTui-mes >div{margin-top: 2rem}
      #forBao{background: rgb(239, 239, 239);margin-top: 5rem;padding-bottom: 5rem}
      .for_tuiLi h3{margin-top: 2rem;color: #666666}
      .for_flow >div:nth-child(1){width: 8rem;height: 3rem;border-radius: 2rem;background: #1cd388;position: absolute;}
      .for_flow >div:nth-child(1) span{position:relative;z-index:3;left: 25%;top: 25%;color: white;font-weight: bold}
      .for_flow >div:nth-child(2){width: 5rem;height: 3rem;border-radius: 2rem;background: #1cd388;position: absolute;z-index: 2}
      .for_flow >div:nth-child(2) >div:nth-child(1){width: 100%;border-bottom: 1px dashed red;position: relative;left: 160%;top: 15%}
      .for_flow >div:nth-child(2) >div:nth-child(1) >div:nth-child(1){width: 10%;position: relative;right: -100%;top: 8px;color: red}
      .for_flow{height: 3rem;width: 14rem;float: left}
      .forTui .forTui-mes{font-size: 1rem}
      .forTui{padding: 3rem 2rem 2rem;background: white}
      .forTui .forTui-i i{font-size: 8rem;color: orangered;padding-top: 2rem}
      .forTui .forTui-i{text-align: center}
      .forTui>h1{text-align: center;font-size: 3rem}
      .forHead{height: 45px;display: none}
      .icon-safe{text-align: center}
      .icon-safe i{font-size: 6rem;vertical-align: middle;padding-right: 1rem;color: orangered}
      .icon-safe span{font-size: 2rem;color: orangered}
  }

</style>