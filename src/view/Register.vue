<template>
    <div>
      <div class="register">
        <div class="register-head">
          <i class="iconfont icon-fanhui"></i>
          <h2>创建帐户</h2>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style lang="less" scoped>
.register{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  .register-head{
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
}
</style>
