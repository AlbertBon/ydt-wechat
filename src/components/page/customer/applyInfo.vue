<template>
  <div>
      <div class="bon-head">
        <div class="bon-head_back">
            <i class="fa fa-angle-left fa-2x" style="color: #6fa0f8;" onclick="javascript:history.back();" ></i>
        </div>
        <div class="bon-head_right" style="visibility: hidden;">
            <i class="fa fa-search fa-2x" style="color: #6fa0f8;"></i>
        </div>
        <div class="bon-head_title">
            <p>申&nbsp;&nbsp;请&nbsp;&nbsp;表</p>
        </div>
    </div>
    <div class="bon-bon-apply-info_content">
        <router-link :to="'/customer/applyApproval/'+data.apply.applyId">
            <div class="bon-apply-info_title">
                <div class="bon-apply-info_title_left">
                    <i class="fa fa-gavel" style="color: #659af8;"></i>
                    <p>审批状态</p>
                </div>
                <div class="bon-apply-info_title_right">
                    <p th:text="${data.apply.nodeName}">{{data.apply.nodeName}}</p>
                    <p th:text="${data.apply.statusCn}">{{data.apply.statusCn}}</p>
                </div>
            </div>
        </router-link>

        <div class="bon-apply-info_line"></div>

        <div class="bon-apply-info_title">
            <div class="bon-apply-info_title_left">
                <i class="fa fa-address-card-o" style="color: #f8ab3d;"></i>
                <p>基础信息</p>
            </div>
        </div>

        <div class="bon-apply-info_title_line"></div>

        <div class="bon-apply-info_content">
            <div class="bon-apply-info_content_text">
                <p>产品</p>
                <p th:text="${data.apply.productName}">{{data.apply.productName}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>申请贷款数额</p>
                <p th:text="${data.apply.amount}">{{data.apply.amount}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>申请人</p>
                <p th:text="${data.apply.customerName}">{{data.apply.customerName}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>授信合同</p>
                <p th:text="${data.apply.creditId}">{{data.apply.creditId}}</p>
            </div>
        </div>

        <div class="bon-apply-info_line"></div>

        <div class="bon-apply-info_title">
            <div class="bon-apply-info_title_left">
                <i class="fa fa-credit-card-alt" style="color: #ea68a2;"></i>
                <p >还款信息</p>
            </div>
        </div>

        <div class="bon-apply-info_title_line"></div>

        <div class="bon-apply-info_content">
            <div class="bon-apply-info_content_text">
                <p>期数</p>
                <p th:text="${data.apply.duration}">{{data.apply.duration}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>还款方式</p>
                <p th:text="${data.apply.repayWay}">{{data.apply.repayWay}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>还款途径</p>
                <p th:text="${data.apply.repayMethod}">{{data.apply.repayMethod}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>还款手续费承担方</p>
                <p th:text="${data.apply.feePayer}">{{data.apply.feePayer}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>是否自动扣款还款</p>
                <p th:text="${data.apply.autoRepay}">{{data.apply.autoRepay}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>还款日期类型</p>
                <p th:text="${data.apply.repayType}">{{data.apply.repayType}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>还款天数</p>
                <p th:text="${data.apply.repayDay}">{{data.apply.repayDay}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>是否允许提前还贷</p>
                <p th:text="${data.apply.advRepay}">{{data.apply.advRepay}}</p>
            </div>

        </div>

        <div class="bon-apply-info_line"></div>

        <div class="bon-apply-info_title">
            <div class="bon-apply-info_title_left">
                <i class="fa fa-percent " style="color: #6dcca3;"></i>
                <p>利率</p>
            </div>
        </div>

        <div class="bon-apply-info_title_line"></div>

        <div class="bon-apply-info_content">
            <div class="bon-apply-info_content_text">
                <p>提前还贷利息</p>
                <p th:text="${data.apply.advPunish}">{{data.apply.advPunish}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>利率计算方式</p>
                <p th:text="${data.apply.advDiscount}">{{data.apply.advDiscount}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>年化利率</p>
                <p th:text="${data.apply.rate}">{{data.apply.rate}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>月利率</p>
                <p th:text="${data.apply.monRate}">{{data.apply.monRate}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>日息</p>
                <p th:text="${data.apply.dailyRate}">{{data.apply.dailyRate}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>免罚期限</p>
                <p >{{data.apply.avoidDays}}</p>
            </div>
            <div class="bon-apply-info_content_text">
                <p>罚息</p>
                <p >{{data.apply.penalty}}</p>
            </div>
        </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      data: {}
      //   msg: store.state.tabsValue
    };
  },
  computed: {
      applyId(){
          return this.$route.params.applyId;
      }
  },
  mounted() {
    //   this.getList();
    this.getApplyInfo(
      this.$store.state.PlatformType,
      this.$store.state.customerToken
    );
  },
  methods: {
    getApplyInfo(PlatformType, customerToken) {
    
      this.$axios
        .post(
          "http://localhost:8081/apply/detail.do",
          {applyId:this.applyId},
          {
            headers: {
              "Tg-Platform": PlatformType,
              "Tg-Auth-Token": customerToken
            }
          }
        )
        .then(response => {
          console.log('getApplyInfo');
          this.data = response.data.data;

        });
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
