<template>
<div>
  <div class="bon-head">
        <div class="bon-head_back">
            <i class="fa fa-angle-left fa-2x" style="color: #6fa0f8;" onclick="javascript:history.back();"></i>
        </div>
        <div class="bon-head_line"></div>
            <div class="bon-head_search">
                <i @click="getApplyList($store.state.PlatformType,$store.state.customerToken)" class="fa fa-search" style="color: #6fa0f8;"></i>
                <input v-model="applyKey" name="applyKey" id="applyKey" class="bon-input" placeholder="请输入产品名">
            </div>
    </div>
    <div v-for="list in data.list" :key="list.applyId" class="bon-list">
      <div  class="bon-list_content" :to="'/customer/applyInfo/'+list.applyId">
          <div class="bon-list_title">
              <p >{{list.loanNo}}</p>
              <!--<p th:text="${list.startTime}">2017-08-24 10:19:04</p>-->
          </div>
          <div class="bon-list_detail">
              <p >{{list.nodeStatus}}</p>
              <p v-if="list.status=='00'||list.status=='01'||list.status=='02'" style="color:#f8ab3d;">{{list.cnStatus}}</p>
              <p v-if="list.status=='03'||list.status=='05'||list.status=='06'" style="color:#6acaa1;">{{list.cnStatus}}</p>
              <p v-if="list.status!='00'&&list.status!='01'&&list.status!='02'&&list.status!='03'&&list.status!='05'&&list.status!='06'" style="color:#FF0000;">{{list.cnStatus}}</p>

          </div>
      </div>
      <div class="bon-list_line"></div>
    </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      applyKey: ""
      //   msg: store.state.tabsValue
    };
  },
  computed: {},
  mounted() {
    //   this.getList();
    this.getApplyList(
      this.$store.state.PlatformType,
      this.$store.state.customerToken
    );
  },
  methods: {
    getApplyList(PlatformType, customerToken) {
      this.$axios
        .post(
          "http://localhost:8081/apply/allList.do",
          {key:this.applyKey},
          {
            headers: {
              "Tg-Platform": PlatformType,
              "Tg-Auth-Token": customerToken
            }
          }
        )
        .then(response => {
          console.log("getApplyList");
          this.data = response.data.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>