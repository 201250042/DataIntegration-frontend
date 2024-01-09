<template>
  <div>
    <el-card>
      <el-descriptions class="margin-top" title="个人信息" :column="2" border>
        <template slot="extra">
          <el-button type="primary" size="small" @click="open()">修改个人信息</el-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-s-custom"></i>
            所属院系
          </template>
          {{ form.school }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-rank"></i>
            学号
          </template>
          {{ form.id }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            姓名
          </template>
          {{ form.nickname }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-lock"></i>
            账号密码
          </template>
          {{ form.password }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-male"></i>
            <i class="el-icon-female"></i>
            性别
          </template>
          <el-tag size="small">{{ form.sex }}</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-message"></i>
            邮箱Email
          </template>
          {{ form.email }}
        </el-descriptions-item>

      </el-descriptions>
    </el-card>


    <el-dialog
        title="修改个人信息"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose">
      <el-form :model="form" :rules="rules" ref="form" label-width="150px">
        <div class="updateinfo">
          <div class="left">
          </div>
          <div class="right">
            <el-form-item label="所属院系" prop="id">
              <el-input v-model="form.school" disabled></el-input>
            </el-form-item>
            <el-form-item label="学号" prop="id">
              <el-input v-model="form.id" disabled></el-input>
            </el-form-item>
            <el-form-item label="姓名" prop="nickname">
              <el-input v-model="form.nickname" disabled></el-input>
            </el-form-item>
            <el-form-item label="账号密码" prop="password">
              <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio v-model="this.form.sex" label="男">男</el-radio>
              <el-radio v-model="this.form.sex" label="女">女</el-radio>
              <el-divider></el-divider>

            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
          </div>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="handleClose">取 消</el-button>
    <el-button type="primary" @click="submit">提 交</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: "PersonalInfo",
  data() {
    return {
      dialogVisible: false,
      form: {
        // avatar: "",
        password: "******",
        nickname: "c1",
        email: "123456789@nju.edu.cn",
        sex: "男",
        id: 3001,
        school: "C学院",
      },
      rules: {
        nickname: [
          { required: true, message: "昵称不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "账号密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    open() {
      this.dialogVisible = true;
    },
    load() {
      userInfo(this.$store.state.id)
          .then((res) => {
            console.log(res);
            Object.assign(this.form, res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    },
    submit() {
      if(this.form.email=="123456789@nju.edu.cn"){
        this.form.email="987654321@nju.edu.cn";
      }else{
        this.form.email=="123456789@nju.edu.cn";
      }
      if(this.form.sex === "女"){
        this.form.sex = "女";
      }else if(this.form.sex === "男"){this.form.sex = "男";
      }
      this.handleClose();
      alert("信息修改成功！")
    },
    handleClose() {
      this.dialogVisible = false;
      this.$emit("flesh");
    },
  },
};
</script>

<style scoped>
.updateinfo {
  height: 350px;
  overflow: auto;
}
.left {
  /* width: 330px; */
  float: left;
}
.right {
  overflow: hidden;
}
</style>
