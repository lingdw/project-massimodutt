<template>
  <div>
    <div class="register-box" ref="regBox">
      <div class="register">
        <div class="register-head">
          <i class="iconfont icon-fanhui"></i>
          <h2>创建帐户</h2>
        </div>
        <div class="register-con">
          <div class="register-con-top">
            <i class="iconfont icon-yonghu"></i>
            <div>
              <!--切换类名是span-back-->
              <span>男性</span>
              <span>女性</span>
            </div>
          </div>
          <div class="register-con-form">
            <div class="register-con-row">
              <div class="ming">
                <input type="text" placeholder="名">
                <i class="iconfont icon-chuyidong"></i>
                <i class="iconfont icon-htmal5icon22"></i>
                <span>必须填写</span>
              </div>
              <div class="xing">
                <input type="text" placeholder="姓">
                <i class="iconfont icon-chuyidong"></i>
                <i class="iconfont icon-htmal5icon22"></i>
                <span>必须填写</span>
              </div>
              <div class="e-mail">
                <input type="text" placeholder="电子邮件">
                <i class="iconfont icon-chuyidong"></i>
                <i class="iconfont icon-htmal5icon22"></i>
                <span>必须填写</span>
              </div>
              <div class="pwd">
                <input type="pwd" placeholder="密码">
                <span>必须填写</span>
                <ul>
                  <li><span></span>
                    <p>一个小写字母</p></li>
                  <li><span></span>
                    <p>至少 8 个字符</p></li>
                  <li><span></span>
                    <p>一个大写字母</p></li>
                  <li><span></span>
                    <p>最多 3 个连续相同字符</p></li>
                  <li><span></span>
                    <p>一个数字</p></li>
                </ul>
              </div>
            </div>
            <div class="firm">
              <div class="firm-head">
                <h3>企业</h3><i class="iconfont icon-arrow-down"></i>
              </div>
              <div class="firm-con">
                <div class="card">
                  <input type="text" placeholder="身份证">
                  <i class="iconfont icon-chuyidong"></i>
                  <i class="iconfont icon-htmal5icon22"></i>
                  <span>必须填写</span>
                </div>
                <div class="firm-name">
                  <input type="text" placeholder="企业名称">
                  <i class="iconfont icon-chuyidong"></i>
                  <i class="iconfont icon-htmal5icon22"></i>
                  <span>必须填写</span>
                </div>
              </div>
            </div>
            <div class="privacy">
              <span></span>
              <i class="iconfont icon-htmal5icon22"></i>
              <p>我接受 <a href="">隐私政策</a></p>
              <div class="privacy-txt">
                <div class="triangle_border_up">
                </div>
                <p>您必须接受隐私政策</p>
              </div>
            </div>
            <div class="mail">
              <span></span>
              <i class="iconfont icon-htmal5icon22"></i>
              <p>我不想收到Massimo Dutti.com的电子邮件</p>
            </div>
            <div class="found">
              <button>创建账户</button>
            </div>
            <div class="login">
              <button>登录</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"

  export default {
    name: "Register",
    mounted() {
      let regWrapper = this.$refs.regBox;
      this.regWrapper = new BScroll(regWrapper, {
        click: true,
      })
    }
  }
</script>

<style lang="less" scoped>
  .register-box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .register {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    .register-head {
      width: 100%;
      height: 100px;
      padding: 0 50px;
      border-bottom: 1px solid #eaeaea;
      i {
        font-size: 36px;
        color: #3b5998;
        line-height: 100px;
        vertical-align: middle;
      }
      h2 {
        display: inline-block;
        vertical-align: middle;
        width: 90%;
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
    .register-con {
      margin-top: 60px;
      padding: 40px 40px 0;
      .register-con-top {
        i {
          display: inline-block;
          font-size: 48px;
          width: 80px;
          padding: 16px 20px 0 0;
          vertical-align: middle;
        }
        div {
          width: 80%;
          display: inline-block;
          vertical-align: middle;
          span {
            display: inline-block;
            width: 49%;
            height: 76px;
            font-size: 22px;
            border: 1px solid #505252;
            float: left;
            text-align: center;
            line-height: 76px;
          }
          span:nth-child(1) {
            border-right: none;
            background: #505252;
            color: white;
          }
          .span-back {
            background: #848686;
            color: white;
          }
        }

      }
      .register-con-form {
        margin-top: 20px;
        .register-con-row {
          .ming {
            position: relative;
            top: 0;
            left: 0;
            font-size: 26px;
            input {
              border: none;
              border-bottom: 1px solid #eaeaea;
              height: 72px;
              width: 100%;
              font-weight: 700;
              font-style: italic;
            }
            i {
              position: absolute;
              top: 30px;
              right: 30px;
              font-size: 30px;
            }
          }
          .xing {
            position: relative;
            top: 0;
            left: 0;
            font-size: 26px;
            input {
              border: none;
              border-bottom: 1px solid #eaeaea;
              height: 72px;
              width: 100%;
              font-weight: 700;
              font-style: italic;
            }
            i {
              position: absolute;
              top: 30px;
              right: 30px;
              font-size: 30px;
            }
          }
          .e-mail {
            position: relative;
            top: 0;
            left: 0;
            font-size: 26px;
            input {
              border: none;
              border-bottom: 1px solid #eaeaea;
              height: 72px;
              width: 100%;
              font-weight: 700;
              font-style: italic;
            }
            i {
              position: absolute;
              top: 30px;
              right: 30px;
              font-size: 30px;
            }
          }
          .pwd {
            position: relative;
            top: 0;
            left: 0;
            font-size: 26px;
            input {
              border: none;
              border-bottom: 1px solid #eaeaea;
              height: 72px;
              width: 100%;
              font-weight: 700;
              font-style: italic;
            }
            i {
              position: absolute;
              top: 30px;
              right: 30px;
              font-size: 30px;
            }
            ul {
              li {
                display: inline-block;
                width: 49%;
                span {
                  width: 15px;
                  height: 15px;
                  border-radius: 50%;
                  background: #b99d6b;
                  vertical-align: middle;
                }
                p {
                  width: 80%;
                  display: inline-block;
                  vertical-align: middle;
                  font-size: 24px;
                  overflow: hidden;
                  letter-spacing: 1px;
                }
              }
            }
          }
          span {
            display: inline-block;
            font-size: 24px;
            color: #a94442;
            letter-spacing: 3px;
            margin: 10px 0;
          }
        }
        .firm {
          .firm-head {
            h3 {
              display: inline-block;
              font-size: 30px;
              margin-right: 10px;
            }
            i {
              font-size: 35px;
            }
          }
          .firm-con {
            display: block;
            .card {
              position: relative;
              top: 0;
              left: 0;
              font-size: 26px;
              input {
                border: none;
                border-bottom: 1px solid #eaeaea;
                height: 72px;
                width: 100%;
                font-weight: 700;
                font-style: italic;
              }
              i {
                position: absolute;
                top: 30px;
                right: 30px;
                font-size: 30px;
              }
              ul {
                li {
                  display: inline-block;
                  width: 49%;
                  span {
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background: #b99d6b;
                    vertical-align: middle;
                  }
                  p {
                    width: 80%;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 24px;
                    overflow: hidden;
                    letter-spacing: 1px;
                  }
                }
              }
            }
            .firm-name {
              position: relative;
              top: 0;
              left: 0;
              font-size: 26px;
              input {
                border: none;
                border-bottom: 1px solid #eaeaea;
                height: 72px;
                width: 100%;
                font-weight: 700;
                font-style: italic;
              }
              i {
                position: absolute;
                top: 30px;
                right: 30px;
                font-size: 30px;
              }
              ul {
                li {
                  display: inline-block;
                  width: 49%;
                  span {
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background: #b99d6b;
                    vertical-align: middle;
                  }
                  p {
                    width: 80%;
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 24px;
                    overflow: hidden;
                    letter-spacing: 1px;
                  }
                }
              }
            }
            span {
              display: inline-block;
              font-size: 24px;
              color: #a94442;
              letter-spacing: 3px;
              margin: 10px 0;
            }
          }
        }
        .privacy {
          position: relative;
          top: 0;
          left: 0;
          margin-top: 30px;
          span {
            display: inline-block;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: #eaeaea;
            outline: 0;
            vertical-align: top;
            margin: 0 20px 0 0;
          }
          i {
            position: absolute;
            top: 9px;
            left: 9px;
            font-size: 30px;
          }
          p {
            margin: 10px 0 0;
            display: inline-block;
            width: calc(100% - 80px);
            vertical-align: top;
            line-height: 32px;
            letter-spacing: 1px;
            a{
              color: black;
              font-weight: 700;
            }
          }
          .privacy-txt{
            display: none;
            position: absolute;
            top: 40px;
            left: 0;
            z-index: 1000;
            .triangle_border_up{
              width:0;
              height:0;
              border-width:0 20px 20px;
              border-style:solid;
              border-color:transparent transparent #505252;
              position:relative;
            }
            p{
              display: block;
              margin-top: -2px;
              background: #505252;
              color: white;
              width: 575px;
              padding: 20px 46px;
              font-size: 26px;
            }
          }
        }
        .mail {
          position: relative;
          top: 0;
          left: 0;
          margin-top: 10px;
          span {
            display: inline-block;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: #eaeaea;
            outline: 0;
            vertical-align: top;
            margin: 0 20px 0 0;
          }
          i {
            position: absolute;
            top: 9px;
            left: 9px;
            font-size: 30px;
          }
          p {
            margin: 10px 0 0;
            display: inline-block;
            width: calc(100% - 80px);
            vertical-align: top;
            line-height: 32px;
            letter-spacing: 1px;
          }
        }
        .found{
          margin-top: 20px;
          button{
            font-size: 26px;
            color: white;
            background: #b99d6b;
            font-weight: normal;
            text-align: center;
            padding: 26px 30px;
            width: 100%;
          }
        }
        .login{
          margin-top: 20px;
          button{
            font-size: 26px;
            color: white;
            background: #505252;
            font-weight: normal;
            text-align: center;
            padding: 26px 30px;
            width: 100%;
          }
        }
      }
    }
  }
</style>
