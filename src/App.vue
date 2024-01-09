<template>
  <div id="app">
    <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :default-active="activeIndex"
        router
        mode="horizontal"
    >
      <NavMenu :navMenus="menuData" v-if="$route.meta.keepMenulive"></NavMenu>
    </el-menu>
    <router-view v-if="isRouterAlive"></router-view>
    <!--    <router-view style="margin-left:250px"></router-view>-->
  </div>


</template>

<script>
import NavMenu from "./view/NavMenu";
export default {
  components: {
    NavMenu: NavMenu
  },
  props: [
    'acc',
    'in'
  ],
  provide() {
    return {
      reload: this.reload
    }
  },
  created() {
  },

  data() {
    return {
      isRouterAlive: true,

      activeIndex: 'identify',
      menuData: [
        {
          //一级
          entity: {
            id: 0,
            icon: "el-icon-message",
            alias: "选课系统"
          },
        },

        {
          //一级
          entity: {
            id: 1,
            icon: "el-icon-user",
            alias: this.acc
          },
          //二级
          childs: [
            {
              entity: {
                id: 3,
                name: "personalInfo",
                icon: "el-icon-loading",
                alias: "个人信息",
              }
            },
            {
              entity: {
                id: 4,
                name: "identify",
                path: '/identify',
                icon: "el-icon-bell",
                alias: "退出登录",
              }
            },
            {
              // entity: {
              //   id: 2,
              //   name: "c-login",
              //   path: '/c-login',
              //   icon: "el-icon-edit",
              //   alias: "c登录",
              // }
            },
          ]
        },
        {
          //一级
          entity: {
            id: 6,
            name: "search",
            icon: "el-icon-news",
            alias: "查询页面"
          },
          //二级
          childs: [
            {
              entity: {
                id: 7,
                name: "personalGradeCount",
                path: '/personalGradeCount',
                icon: "el-icon-phone-outline\r\n",
                alias: "已选课程成绩分布",
              },
            },

            {
              entity: {
                id: 14,
                name: "selectedCoursesCredits",
                path: '/selectedCoursesCredits',
                icon: "el-icon-sold-out\r\n",
                alias: "已选课程学分分布",
              }
            },
          ]
        },
        {
          //一级
          entity: {
            id: 40,
            name: "contentManage",
            icon: "el-icon-rank",
            alias: "选课功能"
          },
          //er级
          childs: [
            {
              entity: {
                id: 41,
                name: "c-course",
                icon: "el-icon-printer",
                alias: "选课页面"
              },
            },
              //三级
            {
                  entity: {
                    id: 42,
                    name: "c-selectedCourses",
                    icon: "el-icon-printer",
                    alias: "已选课程"
                  },
            },
          ],
        }
      ],
    };
    },

  mounted(){
    console.log(window.location.href)
    let start = window.location.href.lastIndexOf('/');
    let path = window.location.href.slice(start+1);
    this.activeIndex = path;

    console.log(this.activeIndex)
  },

  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      })
    }
  },
};

</script>



<style>

</style>
