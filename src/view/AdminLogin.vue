<template>
  <div id="building">
    <div class="login-container">
      <el-card class="login-card">
        <div class="login-title">登录</div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="loginRules"
          label-width="80px"
          class="login-form"
        >
          <el-form-item
            label="账号"
            prop="account"
          >
            <el-input show-password
              v-model="loginForm.account"
              placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
          >
            <el-input show-password
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style=""
              type="primary"
              @click="login"
              plain
            >登录</el-button>
            <el-button style=""
                       type="primary"
                       @click="register"
                       plain
            >注册</el-button>
            <el-button type="warning" @click="retrievePWD" size="mini">忘记密码</el-button>
          </el-form-item>
        </el-form>




        <!--        <div class="warn">@NJU</div>-->
<!--    <button type="primary"  class="register_btn" @click="register">若无账号请点击注册</button>-->
      </el-card>


    </div>


  </div>
  </template>

    <script>
  const xml2js = require('xml2js');
  import { ALoginCheck } from '@/network/courses';
  export default {
    data() {
      return {
        loginForm: {
          account: '',
          password: ''
        },
        loginRules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      retrievePWD(){this.$router.push('/retrieve-pwd')},//wxc新增

      register(){  this.$router.push('/admin-register')},//wxc新增

      login() {
        if(this.loginForm.account === 'admin' && this.loginForm.password === '123456') {
          sessionStorage.setItem('acc', 'admin'); //TODO: 最后需要删除
          this.$message({
            showClose: true,
            message: '登录成功！',
            type: 'success',
          });
          this.$router.push('/admin');
        } else {
          this.$message.error('密码错误！');
        }

      },
      json2Xml(json) {
        let builder = new xml2js.Builder();
        return builder.buildObject({ 账户: json });
      }
    }
  }
    </script>

    <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height:80vh;

  }

  .login-card {
    width: 400px;
  }

  .login-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .login-form {
    margin-top: 20px;
  }




  #building{
    background:url("@/view/img/bricks.jpg");
    width:100%;
    height:100%;
    position:fixed;
    background-size:100% 100%;
  }
/*building为新加内容*/
    </style>

