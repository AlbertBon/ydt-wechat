<template>
    <div>{{code}}<i class="fa fa-search fa-2x" style="color: #6fa0f8;"></i></div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
      param: {
        code: ""
      }
    };
  },
  created() {
    this.code = this.$util.getQueryString("code");
    this.param.code = this.code;

    this.getToken(this.param);
    this.$router.push({ path: "/userInfo" });
    console.log(this.$store.state.customerToken);
  },
  mounted() {
    // console.log(this.$store.state.customerToken);
    this.getToken(this.param);
    this.$router.push({ path: "/userInfo" ,replace:true});
    console.log(this.$store.state.customerToken);
  },
  methods: {
    getToken(param) {
      this.$axios
        .post("http://localhost:8081/wx/customer/getToken.do", param)
        .then(response => {
          console.log(response);
          this.$store.state.customerToken = response.data.data;
          this.$store.state.PlatformType = "3";
          console.log(this.$store.state.customerToken);
        });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>