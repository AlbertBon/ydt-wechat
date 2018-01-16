<template>
<div>
  <div class="bon-head">
      <div class="bon-head_back">
          <i class="fa fa-angle-left fa-2x" style="color: #6fa0f8;" onclick="javascript:history.back();"></i>
      </div>
      <div class="bon-head_right">
          <i class="fa fa-search fa-2x" style="color: #6fa0f8;visibility: hidden;"></i>
      </div>
      <div class="bon-head_title">
          <p>我</p>
      </div>
  </div>
  <div class="bon-user-info_content">
      <div class="bon-user-info_photo">
          <!--<div class="image">-->
              <img src="../../assets/images/head.png">
          <!--</div>-->
      </div>
      <div class="bon-user-info_name">
          <p v-if="customerInfo.name">{{customerInfo.name}}</p>
          <i v-if="customerInfo.sex==1" class="fa fa-venus" style="color: #ea68a2"></i>
          <i v-if="customerInfo.sex==0" class="fa fa-mars" style="color: #659af8"></i>
      </div>
      <div class="bon-user-info_number">
          <label>账号:&emsp;</label><span v-if="customerInfo.mobile">{{customerInfo.mobile}}</span>&emsp;
          <label>电话:&emsp;</label><span v-if="customerInfo.mobile">{{customerInfo.mobile}}</span>
      </div>

      <div class="bon-user-info_line"></div>

      <div class="bon-user-info_detail">

          <div class="bon-user-info_detail_title">
              <div class="block first active ">
                  <p >{{info.applyAmount}}</p>
                  <p>申请贷款</p>
              </div>
              <router-link to="/customer/applyList">
              <div class="block third">
                  <p >{{info.loanCount}}</p>
                  <p>放款次数</p>
              </div>
              </router-link>
              <router-link to="/customer/productList">
              <div class="block second" >
                  <p >{{info.applyCount}}</p>
                  <p>申请次数</p>
              </div>
              </router-link>
          </div>

          <div style="clear: both;"></div>

          <div id="one" class="bon-user-info_detail_circle"></div>

          <div class="bon-user-info_detail_text">
              已放款金额
          </div>
      </div>
  </div>
</div>
</template>

<script>
import circle from "../../assets/js/circleChart.min.js";
export default {
  data() {
    return {
      info: {},
      code: "",
      param: {
        code: ""
      }
      //   msg: store.state.tabsValue
    };
  },
  computed: {
    customerInfo() {
      return this.$store.state.customerInfo;
    }
  },
  mounted() {
    this.getToken(this.param);
    var that = this;
    if (typeof that.info.loanAmount == "undefined") {
      that.info.loanAmount = 0;
    }
    $("#one").circleChart({
      size: 200,
      value: 75,
      color: "#6fa0f8",
      text: 0,
      textSize: false,
      textCenter: true,
      relativeTextSize: 1 / 10,
      onDraw: function(el, circle) {
        //            circle.text(Math.round(circle.value) + "%");
        circle.text(
          '<p style="padding-top:1.6em;">' + that.info.loanAmount + "</p>"
        );
      }
    });
  },
  methods: {
    getInfo(PlatformType, customerToken) {
      this.$axios
        .post(
          "http://localhost:8081/wx/customer/applyStatistics.do",
          {},
          {
            headers: {
              "Tg-Platform": PlatformType,
              "Tg-Auth-Token": customerToken
            }
          }
        )
        .then(response => {
          console.log("getInfo");
          this.info = response.data.data;
        });
    },
    getCustomer(PlatformType, customerToken) {
      this.$axios
        .post(
          "http://localhost:8081/wx/customer/getCurrentCustomer.do",
          {},
          {
            headers: {
              "Tg-Platform": PlatformType,
              "Tg-Auth-Token": customerToken
            }
          }
        )
        .then(response => {
          console.log("getCustomer");
          this.$store.state.customerInfo = response.data.data;
        });
    },
    getToken(param) {
      this.code = this.$util.getQueryString("code");
      this.param.code = this.code;
      this.$axios
        .post("http://localhost:8081/wx/customer/getToken.do", param)
        .then(response => {
          console.log("getToken");
          this.$store.state.customerToken = response.data.data;
          this.$store.state.PlatformType = "3";

          this.getCustomer(
            this.$store.state.PlatformType,
            this.$store.state.customerToken
          );
          this.getInfo(
            this.$store.state.PlatformType,
            this.$store.state.customerToken
          );
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>

</style>