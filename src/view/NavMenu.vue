<template>
  <div class="navMenu">
    <span class="stuName">
      <span class="stuAccount">{{ acc }}</span>
    </span>

    <template v-for="navMenu in navMenus">
        <!-- 最后一级菜单 -->
      <el-menu-item v-if="!navMenu.childs&&navMenu.entity"
                    :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" 
                   >
        <i :class="navMenu.entity.icon"></i>
        <span slot="title">{{navMenu.entity.alias}}</span>
      </el-menu-item>

      <!-- 此菜单下还有子菜单 -->
      <el-submenu v-if="navMenu.childs&&navMenu.entity"
                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
        <template slot="title">
          <i :class="navMenu.entity.icon"></i>
          <span> {{navMenu.entity.alias}}</span>
        </template>
        <!-- 递归 -->
        <NavMenu :navMenus="navMenu.childs"></NavMenu>
      </el-submenu>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    props: ['navMenus',
      'acc',
      'in'],
    data() {
      return {}
    },
    methods: {
      showSelectedCourse() {
        //TODO: router switch
        switch(this.in) {
          case 'C': this.$router.push('/c-selectedCourses'); break;
          case 'B': this.$router.push('/b-selectedCourses'); break;
          case 'A': this.$router.push('/a-selectedCourses'); break;
          default: console.log('error');
        }
      }
    }
  }
</script>

<style>
/* 水平样式 */
.el-menu--horizontal>div>.el-submenu {
  float: right;
}
/* 一级菜单的样式 */
.el-menu--horizontal>div>.el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
/* 解决下拉三角图标 */
.el-menu--horizontal>div>.el-submenu .el-submenu__icon-arrow {
  position: static;
  vertical-align: middle;
  margin-left: 8px;
  margin-top: -3px;
}
/* 解决无下拉菜单时 不对齐问题 */
.el-menu--horizontal>div>.el-submenu .el-submenu__title {
  height: 60px;
  line-height: 60px;
  border-bottom: 2px solid transparent;
  color: #909399;
}

.title {
  display: inline-block;
  line-height: 2px;
  margin-left: 40px;
  font-size: 32px;
  color: #ffffff;
}
.stuName {
  float: right;
  line-height: 60px;
  margin-right: 20px;
  font-size: 22px;
  color: black;
}
.main {
  margin-top: 50px;
}

.stuAccount {
  color: #212121;
}

.courseLink {
  float: right;
  line-height: 37px;
  margin-right: 40px;
  font-size: 22px;
  color: #ffffff;
}
</style>

