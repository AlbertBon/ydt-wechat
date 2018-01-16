<template>
<div>
  <div class="bon-head">
        <div class="bon-head_back" style="">
            <i class="fa fa-angle-left fa-2x" style="color: #6fa0f8;" onclick="javascript:history.back();"></i>
        </div>
        <div class="bon-head_right" style="">
            <i class="fa fa-search fa-2x" style="color: #6fa0f8;visibility: hidden;"></i>
        </div>
        <div class="bon-head_title">
        <p>申&nbsp;&nbsp;请&nbsp;&nbsp;表</p>
        </div>
    </div>

    <div class="bon-approval_title">
        <div class="bon-approval_title_left">
            <i class="fa fa-gavel fa-2x" style="color: white;"></i>
        </div>
        <div class="bon-approval_title_text">
            审批状态
        </div>
    </div>

    <div class="bon-approval_line"></div>

    <div v-for="list in data.nodes" :key="list.nodeName" class="bon-approval_list">
        <div class="bon-approval_content">
            <div class="bon-approval_content_radius" >
                <p hidden="hidden">拒绝</p>
            </div>
            <div class="bon-approval_content_text_left">
                <p  style="font-size: 20px;">{{list.nodeName}}</p>
                <p v-if="list.procDeal" >{{list.procDeal.cnStatus}}</p>
            </div>
            <div class="bon-approval_content_text_right">
                <p v-if="list.procDeal" style="color: #808080">{{list.procDeal.dealTime}}</p>
            </div>
        </div>

        <div class="bon-approval_line"></div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      //   msg: store.state.tabsValue
    };
  },
  computed: {
  },
  mounted() {
    // this.getProductList(
    //   this.$store.state.PlatformType,
    //   this.$store.state.customerToken
    // );
  },
  methods: {
    getProductList(PlatformType, customerToken) {
    
      this.$axios
        .post(
          "http://localhost:8081/apply/detail.do",
          {},
          {
            headers: {
              "Tg-Platform": PlatformType,
              "Tg-Auth-Token": customerToken
            }
          }
        )
        .then(response => {
          console.log('getProductList');
          this.data = response.data.data;

        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scope>

</style>