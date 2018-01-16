<template>
<div>
  <div class="bon-head">
        <div class="bon-head_back">
            <i class="fa fa-angle-left fa-2x" style="color: #6fa0f8;" onclick="javascript:prev();"></i>
        </div>
        <div class="bon-head_right">
            <i class="fa fa-search fa-2x" style="color: #6fa0f8;visibility: hidden;"></i>
        </div>
        <div class="bon-head_title">
            <p>申&nbsp;&nbsp;请</p>
        </div>
    </div>

    <input name="productId" id="productId" hidden v-model="addParam.productId" >

    <div style="display: block;" id="customer" class="bon-customer_content">
        <div class="bon-customer_head">
            测试产品1
        </div>
        <div class="bon-penalty_title">
            <i class="fa fa-file-text-o" style="color: #f8ab3d;"></i>
            <p>客户信息</p>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;申请人</p>
            </div>
            <div class="bon-form_bd blank">
                <input name="name" id="name" th:value="${user.name}" class="bon-input" required placeholder="请输入姓名">
                <input name="customerId" id="customerId" th:value="${user.customerId}" hidden>

            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;手机号码</p>
            </div>
            <div class="bon-form_bd blank phone">
                <input name="tel" id="tel" class="bon-input" placeholder="请输入号码" required>
                <!--<div class="line"></div>-->
                <a href="javascript:smsSub(this)" id="sendCode"  class="weui-btn bon-btn_sub bon-vcode-btn">发送验证码</a>

            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;还款账号</p>
            </div>
            <div class="bon-form_bd blank">
                <input name="account" id="account" class="bon-input" placeholder="请输入账号" required>
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;还款户名</p>
            </div>
            <div class="bon-form_bd blank">
                <input name="accountName" required id="accountName" class="bon-input" placeholder="请输入户名">
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank" style="width: 30%">
                <p>&nbsp;&nbsp;授信合同</p>
            </div>
            <div class="bon-form_bd blank" style="width: 70%">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select required class="weui-select" name="creditId" id="creditId">

                            <option th:each="list:${lists}" th:value="${list.creditId}" th:text="${list.creditNo}"></option>
                            <!--<option value="2">授信合同2</option>-->
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;手机验证码</p>
            </div>
            <div class="bon-form_bd blank">
                <input name="vCode" id="vCode" required class="bon-input" placeholder="请输入验证码">
            </div>
        </div>

    </div>

    <div style="display: none;" id="applyInfo" class="bon-penalty_content">
        <div class="bon-penalty_title">
            <i class="fa fa-file-text-o" style="color: #f8ab3d;"></i>
            <p>申请表信息</p>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;申请贷款数额</p>
            </div>
            <div class="bon-form_bd blank">
                <input required class="bon-input" name="amount" id="amount" placeholder="请输入数额">
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;还款方式</p>
            </div>
            <div class="bon-form_bd blank">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select required class="weui-select" name="repayWay" id="repayWay">
                            <option value="00">先息后本</option>
                            <option value="01">等额本息</option>
                            <option value="02">斩头</option>
                            <option value="03">等额本金</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;期数</p>
            </div>
            <div class="bon-form_bd blank">
                <input required class="bon-input" name="duration" id="duration" placeholder="请输入期数">
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;还款途径</p>
            </div>
            <div class="bon-form_bd blank">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select required class="weui-select" name="repayMethod" id="repayMethod">
                            <option value="00">线下还款</option>
                            <option value="01">代收付自动扣款</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;利率计算方式</p>
            </div>
            <div class="bon-form_bd blank">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select required class="weui-select" name="rateType" id="rateType">
                            <option value="00">按年计息(%)</option>
                            <option value="01">按月计息(%)</option>
                            <option value="02">按日计息(%)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;利息</p>
            </div>
            <div class="bon-form_bd blank">
                <input required class="bon-input" id="rate" name="rate" placeholder="请输入利息">
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;还款手续承担方</p>
            </div>
            <div class="bon-form_bd blank">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select required class="weui-select" name="feePayer" id="feePayer">
                            <option value="0">客户方</option>
                            <option value="1">贷款方</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;还款日期类型</p>
            </div>
            <div class="bon-form_bd blank">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select required class="weui-select" name="repayType" id="repayType">
                            <option value="00">每月固定日期</option>
                            <option value="01">相隔天数（天）</option>
                        </select>
                    </div>
                </div>
                <!--<i class="fa fa-calendar" style="color: #808080"></i>-->
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;还款日期或天数</p>
            </div>
            <div class="bon-form_bd blank">
                <input required class="bon-input" id="repayDay" name="repayDay" placeholder="请输入还款日期或天数">
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;自动扣款还款</p>
            </div>
            <div class="bon-form_bd blank">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select required class="weui-select" name="autoRepay" id="autoRepay">
                            <option value="false">不支持</option>
                            <option value="true">支持</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div style="display: none;" id="penalty" class="bon-penalty_content">
        <div class="bon-penalty_title">
            <i class="fa fa-percent" style="color: #f8ab3d;"></i>
            <p>罚息配置</p>
        </div>
        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;允许提前还贷</p>
            </div>
            <div class="bon-form_bd blank">
                <input required class="weui-switch" name="advRepay" id="advRepay" type="checkbox" placeholder="">
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;提前罚息（%）</p>
            </div>
            <div class="bon-form_bd blank">
                <input required class="bon-input" name="advPunish" id="advPunish" placeholder="请输入利息">
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;罚息计算基础</p>
            </div>
            <div class="bon-form_bd blank">
                <div class="weui-cell weui-cell_select">
                    <div class="weui-cell__bd">
                        <select required class="weui-select" name="penaltyBase" id="penaltyBase">
                            <option value="00">当期应还款</option>
                            <option value="01">当期本金</option>
                            <option value="02">剩余本金</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;免罚期限（天）</p>
            </div>
            <div class="bon-form_bd blank">
                <input required class="bon-input" name="avoidDays" id="avoidDays" placeholder="请输入利息">
            </div>
        </div>

        <div class="bon-penalty_form_item">
            <div class="bon-form_hd blank">
                <p>&nbsp;&nbsp;逾期罚息（%）</p>
            </div>
            <div class="bon-form_bd blank">
                <input required class="bon-input" name="penalty" id="penalty" placeholder="请输入利息">
            </div>
        </div>

    </div>

    <div style="padding-top:3em;padding-bottom: 2em;">
        <a href="javascript:next();" class="weui-btn bon-btn_sub middle">下&nbsp;&nbsp;一&nbsp;&nbsp;步</a>
    </div>
</div>
</template>

<script>
import fastclick from '../../../assets/js/fastclick'
import jqueryweui from '../../../assets/js/jquery-weui'
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
    $(function () {
        function invokeSettime(obj){
            var countdown=60;
            settime(obj);
            function settime(obj) {
                if (countdown == 0) {
                    $(obj).attr("href","javascript:smsSub();");
                    $(obj).text("发送验证码");
                    countdown = 60;
                    return;
                } else {
                    $(obj).attr("href","javascript:void(0);");
                    $(obj).text("(" + countdown + ") s 重新发送");
                    countdown--;
                }
                setTimeout(function() {
                        settime(obj) }
                    ,1000)
            }
        }
        /*<![CDATA[*/
        smsSub = function (obj) {
            var mobile=$('#tel').val();
            $.ajax({
                type: "POST",
                url:/*[[@{/customer/sendConfirmCode}]]*/,
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({mobile:mobile}),
                success: function (result) {
                    if (result.data == "error") {
                        $.alert('发送失败，请稍后再试', function () {
                            this.hide();
                            $('.weui-mask').hide();
                        });
                    }else {
                        $.toast("发送成功");
                        new invokeSettime('#sendCode');
                    }
                }
            });
        };
        confirmCode = function () {
            var mobile=$('#tel').val();
            var code=$('#vCode').val();

            $.ajax({
                type: "POST",
                url:/*[[@{/customer/confirmCode}]]*/,
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({mobile:mobile,code:code}),
                success: function (result) {
                    if (result.data == "error") {
                        $.alert('验证码输入错误', function () {
                            this.hide();
                            $('.weui-mask').hide();
                        });
                        return false;
                    }else {
                        $('#applyInfo').css('display','block');
                        $('#customer').css('display','none');
                    }
                }
            });
        };
        /*]]>*/
        prev=function () {
            if($('#customer').css('display')=='block'){
                history.back();
            }
            if($('#applyInfo').css('display')=='block'){
                $('#customer').css('display','block');
                $('#applyInfo').css('display','none');
            }
            if($('#penalty').css('display')=='block'){
                $('#applyInfo').css('display','block');
                $('#penalty').css('display','none');
            }
        }
        next=function () {
            if($('#penalty').css('display')=='block'){
                formSub();
            }
            if($('#applyInfo').css('display')=='block'){
                $('#applyInfo').css('display','none');
                $('#penalty').css('display','block');
            }
            if($('#customer').css('display')=='block'){
                confirmCode();
            }

        }
        formSub = function () {
            var subError=false;
            //提交，最终验证。
            $('#form :input[required]').each(function() {
                if ($(this).val() == "") {
                    $.alert('请将信息填写完整', function () {
                        this.hide();
                        $('.weui-mask').hide();
                    });
                    subError = true;
                    return false;
                }
            });
            if(subError==false){
                $("#form").submit();
            }
        }
    })
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