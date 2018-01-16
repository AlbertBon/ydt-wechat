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
        <p>产&nbsp;&nbsp;品&nbsp;&nbsp;明&nbsp;&nbsp;细</p>
    </div>
</div>
<div class="bon-product-info_content">
    <div class="bon-product-info_title">
        <span th:text="${data.name}">{{data.name}}</span>
    </div>
    <div class="bon-product-info_text">
        <label>发布日期</label><span th:text="${data.releaseDate}">{{data.releaseDate}}</span>
    </div>
    <div class="bon-product-info_text">
        <label>停售日期</label><span th:text="${data.closeDate}">{{data.closeDate}}</span>
    </div>
    <div class="bon-product-info_chart">
        <div class="bon-product-info_chart_left">
            <div id="onecircle" class="c100 p75 big green_bon" style="font-size: 8em;">
                <span th:text="${data.stdAmount}">{{data.stdAmount}}</span>
                <div class="slice">
                    <div class="bar"></div>
                    <div class="fill"></div>
                </div>
            </div>
            <div class="bon-product-info_chart_left_text">
                <p>建议申请数额</p>
            </div>
        </div>
        <div class="bon-product-info_chart_right">
            <div class="bon-product-info_chart_right_text">
                <label>最高数额</label><span th:text="${data.maxAmount}">{{data.maxAmount}}</span>
            </div>
            <div class="bon-product-info_chart_right_chart" style="background-color:#6fa0f8; width: calc(100% - 1em); "></div>
            <div class="bon-product-info_chart_right_text">
                <label>最低数额</label><span  th:text="${data.minAmount}">{{data.minAmount}}</span>
            </div>
            <div class="bon-product-info_chart_right_chart" style="background-color:#f8ab3d; width: calc(20% - 1em); "></div>
        </div>
    </div>
    <div class="bon-product-info_cell">
        <div class="text">
            <p  th:text="${data.rate}+'%'">{{data.rate}}</p>
            <p>利率</p>
        </div>
        <div class="text">
            <p th:text="${data.advPunish}+'%'">{{data.advPunish}}</p>
            <p>提前还贷罚息</p>
        </div>
        <div class="text">
            <p th:text="${data.penalty}">{{data.penalty}}</p>
            <p>罚息</p>
        </div>
    </div>
    <div class="bon-product-info_line"></div>
    <div class="bon-product-info_text">
        <label>还款方式</label><span th:text="${data.repayWayCn}">{{data.repayWayCn}}</span>
    </div>
    <div class="bon-product-info_text">
        <label>期数（月）</label><span th:text="${data.duration}">{{data.duration}}</span>
    </div>
    <div class="bon-product-info_text">
        <label>免罚期限</label><span th:text="${data.avoidDays}">{{data.avoidDays}}</span>
    </div>
    <div class="bon-product-info_text">
        <label>提前还款</label><span th:if="${data.advRepay}">{{data.name}}</span>
        <span th:if="${data.advRepay}==false">{{data.advRepay}}</span>
    </div>
</div>
<div style="clear: both;height: 5em;"></div>
<router-link :to="'/customer/addApply/'+productId"></router-link>
<div class="bon-product-info_bottom" th:onclick="'javascript:redirect('+${data.productId}+');'">
    <i class="fa fa-pencil-square-o" style="color: #f8ab3d;padding-right: 0.5em"></i><span>我要申请</span>
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
      productId(){
          return this.$route.params.productId;
      }
  },
  mounted() {
    //   this.getList();
    this.getProductInfo(
      this.$store.state.PlatformType,
      this.$store.state.customerToken
    );
  },
  methods: {
    getProductInfo(PlatformType, customerToken) {
    
      this.$axios
        .post(
          "http://localhost:8081/product/detail.do",
          {productId:this.productId},
          {
            headers: {
              "Tg-Platform": PlatformType,
              "Tg-Auth-Token": customerToken
            }
          }
        )
        .then(response => {
          console.log('getProductInfo');
          this.data = response.data.data;

        });
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('../../../assets/css/percircle.css');

</style>