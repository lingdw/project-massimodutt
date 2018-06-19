<template>
    <div>
        <div class="login">
            <div class="login-head">
                <i class="iconfont icon-fanhui"></i>
               <h2>注册</h2>
            </div>
            <div class="login-con">
              <h3>输入您的电子邮件和密码以便登录</h3>
              <form action="" name="user">
                <div class="row">
                  <div style="position: relative;top: 0; left: 0;">
                    <input type="text" placeholder="电子邮件*" ref="e-mail" @keyup="user()">
                    <i class="iconfont icon-chuyidong"></i>
                  </div>
                  <span style="display:none">必须填写</span>
                  <span style="display:inline-block">请输入有效的电子邮箱</span>
                  <br>
                  <div style="position: relative;top: 0; left: 0;">
                    <input   type="password" placeholder="密码*" ref="pwd">
                    <i class="iconfont icon-yanjing"></i>
                  </div>
                  <span>必须填写</span>
                </div>
                <div class="forgetPwd">
                 <a href="">忘记密码了吗?</a>
                </div>
                <div class="remember">
                  <span></span>
                  <i class="iconfont icon-htmal5icon22"></i>
                  <p>保持会开启</p>
                </div>
                <div class="btn">
                  <button>登入</button>
                  <button>创建账户</button>
                </div>
              </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return{

          }
      },
      methods:{
        user(){
          let username = this.$refs.e-mial;
          this.user = username.value();
          console.log(this.user)
        }
      }
    }

</script>

<style lang="less" scoped>
  .login{
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    width: 100%;
    height: 100%;
    .login-head{
      padding: 0 50px;
      border-bottom: 1px solid #eaeaea;
      i{
        font-size: 36px;
        color: #3b5998;
        line-height: 100px;
        vertical-align: middle;
      }
      h2{
        display: inline-block;
        vertical-align: middle;
        width:90%;
        height: 100%;
        font-size: 28px;
        font-weight: normal;
        margin: 0;
        line-height: 100px;
        padding: 0;
        letter-spacing: 1px;
        margin-top: 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: center;
      }
    }
    .login-con{

      h3{
        display: block;
        padding: 46px 50px 0;
        font-size: 28px;
      }
      form{
        padding: 50px 50px 0;
        .row{
          width: 100%;
          height: 240px;
          input{
            font-style:italic;
            font-size: 26px;
            padding-right: 50px;
            border-right: 0;
            border-top: 0;
            border-radius: 0;
            border-left: 0;
            box-shadow: none;
            border-bottom: 1px solid #eaeaea;
            width: calc(100% - 50px);
            font-weight: 700;
            height: 72px;
            margin-bottom: 10px;
          }
          span{
            font-size: 24px;
            color: #a94442;
            letter-spacing: 3px;
            margin-bottom: 10px;
          }
          i{
            position: absolute;
            top: 20px;
            right: 10px;
            font-size: 30px;
          }
        }
        .forgetPwd{
          a{
            display: block;
            text-align: center;
            text-decoration: none;
            font-size: 24px;
            color: #505252;
            letter-spacing:6px;
          }
        }
        .remember{
          position: relative;
          top: 0;
          left: 0;
          margin-top: 30px;
          span{
            display: inline-block;
            width: 52px;
            height: 50px;
            border-radius: 50%;
            background: #eaeaea;
            outline: 0;
            vertical-align: top;
            margin: 0 20px 0 0 ;
          }
          i{
            position: absolute;
            top: 13px;
            left: 12px;
            font-size: 30px;
          }
          p{
            margin: 10px 0 0 ;
            display: inline-block;
            width: calc(100%  - 80px);
            vertical-align: top;
            line-height: 32px;
            letter-spacing: 3px;
          }
        }
        .btn{
          margin-top: 190px;
          button{
            display: block;
            width: 100%;
            border:1px solid transparent;
            padding: 26px 30px;
            color: white;
            font-size: 26px;
          }
          button:nth-child(1){
            background-color: #b99d6b;
            border-color: #b99d6b;
            margin-bottom: 20px;
          }
          button:nth-child(2){
            background-color: #505252;
            border-color: #505252;
          }
        }
      }
    }
  }
</style>
