<template>
<div>
  <div class="bon-head">
      <div class="bon-head_back">
          <i class="fa fa-angle-left fa-2x" style="color: #6fa0f8;" th:onclick="'javascript:history.back();'"></i>
      </div>
      <div class="bon-head_right">
          <i class="fa fa-search fa-2x" style="color: #6fa0f8;visibility: hidden;"></i>
      </div>
      <div class="bon-head_title">
          <p>我{{$store.state.tabsValue}}</p>
      </div>
  </div>
  <div class="bon-user-info_content">
      <div class="bon-user-info_photo">
          <!--<div class="image">-->
              <img src="../../assets/images/head.png">
          <!--</div>-->
      </div>
      <div class="bon-user-info_name">
          <p th:if="${info.name}" th:text="${info.name}"></p>
          <i th:if="${info.sex==1}" class="fa fa-venus" style="color: #ea68a2"></i>
          <i th:if="${info.sex==0}" class="fa fa-mars" style="color: #659af8"></i>
      </div>
      <div class="bon-user-info_number">
          <label>账号:&emsp;</label><span th:if="${info.mobile}" th:text="${info.mobile}"></span>&emsp;
          <label>电话:&emsp;</label><span th:if="${info.mobile}" th:text="${info.mobile}"></span>
      </div>

      <div class="bon-user-info_line"></div>

      <div class="bon-user-info_detail">

          <div class="bon-user-info_detail_title">
              <div class="block first active ">
                  <p th:text="${info.applyAmount}"></p>
                  <p>申请贷款</p>
              </div>
              <div class="block third" th:onclick="'javascript:redirectApplyList();'">
                  <p th:text="${info.loanCount}"></p>
                  <p>放款次数</p>
              </div>
              <div class="block second" th:onclick="'javascript:redirectProductList();'">
                  <p th:text="${info.applyCount}" ></p>
                  <p>申请次数</p>
              </div>
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

export default {
  data() {
    return {
    //   msg: store.state.tabsValue
    }
  },
  computed:{
      msg(){
        //   return this.$store.state.tabsValue
      }
  },
  mounted(){
      this.getList();
  },
  methods:{
      getList() {
            this.$axios.post('http://localhost:8081/wxmanage/wechat/wechatList')
                .then(response => {
                    console.log(response);
                })
            console.log("response");
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>
</style>