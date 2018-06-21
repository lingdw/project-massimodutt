<template>
  <div>
    <div class="myIndent">
      <div class="myIndent-head">
        <i class="iconfont icon-fanhui"></i>
        <div>
          <p>我的订单</p>
        </div>
      </div>
      <div class="myIndent-con-box1">
          <div>
            <ul class="myIndent-con" ref="indentCon" >
              <li>
                <div class="indent">
                  <div class="indent-left">
                    <img src="../../assets/img/1.jpg" alt="">
                  </div>
                  <div class="indent-right">
                    <p>Nº109771855</p>
                    <p>21 / 06 / 2018</p>
                    <p>¥ 170.00</p>
                    <p>1 产品</p>
                  </div>
                  <div class="indent-bottom">
                    <p>pq 代收款</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="indent">
                  <div class="indent-left">
                    <img src="../../assets/img/1.jpg" alt="">
                  </div>
                  <div class="indent-right">
                    <p>Nº109771855</p>
                    <p>21 / 06 / 2018</p>
                    <p>¥ 170.00</p>
                    <p>1 产品</p>
                  </div>
                  <div class="indent-bottom">
                    <p>pq 代收款</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="indent">
                  <div class="indent-left">
                    <img src="../../assets/img/1.jpg" alt="">
                  </div>
                  <div class="indent-right">
                    <p>Nº109771855</p>
                    <p>21 / 06 / 2018</p>
                    <p>¥ 170.00</p>
                    <p>1 产品</p>
                  </div>
                  <div class="indent-bottom">
                    <p>pq 代收款</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="indent">
                  <div class="indent-left">
                    <img src="../../assets/img/1.jpg" alt="">
                  </div>
                  <div class="indent-right">
                    <p>Nº109771855</p>
                    <p>21 / 06 / 2018</p>
                    <p>¥ 170.00</p>
                    <p>1 产品</p>
                  </div>
                  <div class="indent-bottom">
                    <p>pq 代收款</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="indent">
                  <div class="indent-left">
                    <img src="../../assets/img/1.jpg" alt="">
                  </div>
                  <div class="indent-right">
                    <p>Nº109771855</p>
                    <p>21 / 06 / 2018</p>
                    <p>¥ 170.00</p>
                    <p>1 产品</p>
                  </div>
                  <div class="indent-bottom">
                    <p>pq 代收款</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="indent">
                  <div class="indent-left">
                    <img src="../../assets/img/1.jpg" alt="">
                  </div>
                  <div class="indent-right">
                    <p>Nº109771855</p>
                    <p>21 / 06 / 2018</p>
                    <p>¥ 170.00</p>
                    <p>1 产品</p>
                  </div>
                  <div class="indent-bottom">
                    <p>pq 代收款</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="indent">
                  <div class="indent-left">
                    <img src="../../assets/img/1.jpg" alt="">
                  </div>
                  <div class="indent-right">
                    <p>Nº109771855</p>
                    <p>21 / 06 / 2018</p>
                    <p>¥ 170.00</p>
                    <p>1 产品</p>
                  </div>
                  <div class="indent-bottom">
                    <p>pq 代收款</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
      <div class="myIndent-cover-box">
        <div class="myIndent-cover">
          <div class="myIndent-head">
            <i class="iconfont icon-fanhui"></i>
            <div>
              <p>订单明细</p>
            </div>
          </div>
          <div class="myIndent-cover-mid-box">
            <div class="myIndent-cover-mid">
              <div class="mid-a1">
                <p>订单号</p>
                <span>109771855</span>
              </div>
              <div class="mid-a1">
                <p>购买日期</p>
                <span>21/06/2018</span>
              </div>
              <div class="mid-a1">
                <p>支付</p>
                <span>Alipay_Mobile</span>
              </div>
              <div class="mid-a1">
                <p>状态</p>
              </div>
              <div class="mid-a1"></div>
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
    name: "MyIndent",
    mounted() {
      let indentConWrapper = this.$refs.indentCon;
      this.indentConWrapper = new BScroll(indentConWrapper, {
        click: true,
      })
    }
  }
</script>

<style lang="less" scoped>
  .myIndent {
    position: relative;
    top: 104px;
    left: 0;
    .myIndent-head {
      height: 76px;
      width: 100%;
      background: #f0f0f0;
      line-height: 76px;
      i {
        font-size: 36px;
        padding-left: 10px;
        padding-left: 20px;
      }
      div {
        width: 80%;
        display: inline-block;
        p {
          text-align: center;
          font-size: 26px;
          line-height: 36px;
          color: #505252;
        }
      }
    }
    .myIndent-con-box {
      position: fixed;
      top: 180px;
      left: 0;
      width: 100%;
      height: calc(100% - 180px);
      overflow: hidden;
      .myIndent-con {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100%;
        ul {
          li {
            .indent {
              background: #f8f8f8;
              padding: 30px 30px 30px 20px;
              width: 604px;
              margin: 28px auto;
              overflow: hidden;
              .indent-left {
                float: left;
                vertical-align: top;
                img {
                  width: 130px;
                }
              }
              .indent-right {
                float: left;
                width: calc(100% - 170px);
                padding: 0 20px;
                vertical-align: top;
                p {
                  margin-bottom: 20px;
                  font-size: 22px;
                  letter-spacing: 1px;
                  line-height: 30px;
                  color: #505252;
                }
              }
              .indent-bottom {
                text-align: right;
                color: #b99d6b;
                font-weight: bold;
                font-size: 22px;
              }
            }
          }
        }
      }
    }
    .myIndent-cover {
      display: none;
      position: fixed;
      top: 104px;
      left: 0;
      width: 100%;
      height: 100%;
      background: white;
      .myIndent-cover-mid-box {
        padding: 28px 48px;
        height: 100%;
        width: calc(100% - 96px);
        .myIndent-cover-mid {
          height: 100%;
          background: #eaeaea;
        }
      }
    }
  }
</style>
