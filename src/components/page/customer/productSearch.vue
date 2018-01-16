<template>
<div>
  <div class="bon-head">
        <div class="bon-head_back">
            <i class="fa fa-angle-left fa-2x" style="color: #6fa0f8;" onclick="javascript:history.back();"></i>
        </div>
        <div class="bon-head_line"></div>
            <div class="bon-head_search">
                <i @click="getProductList($store.state.PlatformType,$store.state.customerToken)" class="fa fa-search" style="color: #6fa0f8;"></i>
                <input v-model="productKey" name="productKey" id="productKey" class="bon-input" placeholder="请输入产品名">
            </div>
    </div>
    <div v-for="list in data.list" :key="list.productId" class="bon-product-list_content">
        <div class="bon-list-icon" >
            <div class="bon-list-icon_left">
                <div  class="bon-list-icon_left_title">
                    {{list.name}}
                </div>
                <div class="bon-list-icon_left_detail">
                    <div>额数&nbsp;<span th:text="${list.stdAmount}">{{list.stdAmount}}</span>&emsp;</div>
                    <div>期数&nbsp;<span th:text="${list.duration}">{{list.duration}}</span></div>
                </div>
            </div>
            <router-link :to="'/customer/productInfo/'+list.productId">
            <div class="bon-list-icon_right_text">
                <i class="fa fa-pencil-square-o" style="color: #6fa0f8;"></i><span>我要申请</span>
            </div>
            </router-link>
        </div>
    </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      productKey: ""
      //   msg: store.state.tabsValue
    };
  },
  computed: {},
  mounted() {
    //   this.getList();
    this.getProductList(
      this.$store.state.PlatformType,
      this.$store.state.customerToken
    );
  },
  methods: {
    getProductList(PlatformType, customerToken) {
      this.$axios
        .post(
          "http://localhost:8081/product/page.do",
           {key:this.productKey},
          {
            headers: {
              "Tg-Platform": PlatformType,
              "Tg-Auth-Token": customerToken
            }
          }
        )
        .then(response => {
          console.log("getProductList");
          this.data = response.data.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("../../../assets/css/percircle.css");
</style>