<template>
    <div>{{code}}<i class="fa fa-search fa-2x" style="color: #6fa0f8;"></i></div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      param:{
        code: ""
      }
    };
  },
  created() {
    this.code = this.$util.getQueryString("code");
    this.param.code=this.code;
    this.getOpenid(this.param);
  },
  methods: {
    getOpenid(param) {
      this.$axios
        .post("http://localhost:8081/wx/customer/getToken.do",param)
        .then(response => {
          console.log(response);
          this.$store.customerToken=response.data;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>