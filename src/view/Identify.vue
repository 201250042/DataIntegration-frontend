<template>
  <div id="building">
  <div class="login-container">
    <el-card class="login-card">
      <div class="login-title">身份选择</div>
      <div style="text-align: center">
      <el-button
        type="primary"
        @click="chooseIdenfify('A')"
        class="identifyChoice"
        plain
        size="small"
      >A学生<br></el-button>
      <br>
      <br>
      <el-button
        type="primary"
        @click="chooseIdenfify('B')"
        class="identifyChoice"
        plain
        size="small"
      >B学生<br></el-button>
      <br>
      <br>
      <el-button
        type="primary"
        @click="chooseIdenfify('C')"
        class="identifyChoice"
        plain
        size="small"
      >C学生</el-button>
      <br>
      <br>
      <el-button
        type="primary"
        @click="chooseIdenfify('ADMIN')"
        class="identifyChoice"
        plain
        size="small"
      >管理员</el-button>
      </div>
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
    }
  },
  methods: {



    chooseIdenfify(identify) {
        switch(identify) {
            case 'A': this.$router.push('/a-login');break;
            case 'B': this.$router.push('/b-login');break;
            case 'C': this.$router.push('/c-login');break;
            case 'ADMIN': this.$router.push('/admin-login');break;
        }
    }
  }
}
    </script>

    <style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

}

.login-card {
  width: 400px;
}

.login-title {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
.identifyChoice {
  font-size: 25px;
  text-align:-webkit-left;
}

#building{
  background:url("@/view/img/office-space.jpg");
  width:100%;
  height:100%;
  position:fixed;
  background-size:100% 100%;
}
/*building为新加元素 增加背景图片*/

</style>

