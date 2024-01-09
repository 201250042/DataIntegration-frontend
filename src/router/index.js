//路由模块

//导包
// C
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/view/Head.vue"
import CoursesCView from '@/view/CoursesCView.vue'
import StudentView from '@/view/StudentView.vue'
import CLogin from '@/view/CLogin.vue'
import CSelectedCourses from '@/view/SelectedCoursesCView.vue'
import BSelectedCourses from '@/view/SelectedCoursesBView.vue'
import CRegister from "@/view/CRegister.vue";

// B
import BLogin from '@/view/BLogin.vue'
import CoursesBView from '@/view/CoursesBView.vue'
import BRegister from "@/view/BRegister.vue";

// A
import ALogin from '@/view/ALogin.vue'
import CoursesAView from '@/view/CoursesAView.vue'
import ASelectedCourses from '@/view/SelectedCoursesAView.vue'
import ARegister from "@/view/ARegister.vue";

// admin
import AdminLogin from '@/view/AdminLogin'
import AdminView from '@/view/AdminView'

import Identify from '@/view/Identify'
import PersonalInfo from "@/view/PersonalInfo";
import PersonalGradeCount from "@/view/charts/PersonalGradeCount";
import SelectedCoursesCredits from "@/view/charts/SelectedCoursesCredits";
import fa from "element-ui/src/locale/lang/fa";

import AdminRegister from "@/view/AdminRegister.vue";
import RetrievePWD from "@/view/retrievePWD.vue";
//新增的路径

Vue.use(VueRouter);


//创建对象
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/identify',
        },
        // CC
        {
            path: '/c-login',
            name: 'c-login',
            component: CLogin,
            meta:{
                keepMenulive : false
            },
        },
        {
            path: '/c-course',
            name: 'c-course',
            component: CoursesCView,
            meta:{
                keepMenulive : true
            },
        },
        {
            path: '/student',
            name: 'student',
            component: StudentView
        },
        {
            path: '/c-selectedCourses',
            name: 'c-selectedCourses',
            component: CSelectedCourses,
            meta:{
                keepMenulive : true
            },
        },

        {
            path:'/c-register',
            component:CRegister
        },
        // B
        {
            path: '/b-login',
            name: 'b-login',
            component: BLogin
        },
        {
            path: '/b-course',
            name: 'b-course',
            component: CoursesBView
        },
        {
            path: '/b-selectedCourses',
            name: 'b-selectedCourses',
            component: BSelectedCourses
        },

        {
            path:'/b-register',
            component:BRegister
        },
        // A
        {
            path: '/a-login',
            name: 'a-login',
            component: ALogin
        },
        {
            path: '/a-course',
            name: 'a-course',
            component: CoursesAView
        },
        {
            path: '/a-selectedCourses',
            name: 'a-selectedCourses',
            component: ASelectedCourses
        },
        {
            path:'/a-register',
            component:ARegister
        },
        // Admin
        {
            path: '/admin-login',
            component: AdminLogin,
            meta:{
                keepMenulive : false
            },
        },
        {
            path: '/admin',
            component: AdminView,
            meta:{
                keepMenulive : true
            },
        },

        //wxc新增： AdminRegister
        {
            path:'/admin-register',
            component:AdminRegister
        },

        // Identify
        {
            path: '/identify',
            name: 'identify',
            component: Identify,
            meta:{
                keepMenulive : false
            },
        },

        //以下为新增
        //个人信息页面
        {
            path: '/personalInfo',
            name: 'personalInfo',
            component: PersonalInfo,
            meta:{
                keepMenulive : true
            },
        },

        //用户查询已选课程成绩分布
        {
            path: '/personalGradeCount',
            name: 'personalGradeCount',
            component: PersonalGradeCount
        },

        //用户查询已选课程学分分布
        {
            path: '/selectedCoursesCredits',
            name: 'selectedCoursesCredits',
            component: SelectedCoursesCredits
        },
        //RetrievePWD 找回密码
        {
            path:'/retrieve-pwd',
            component:RetrievePWD
        }



    ]
})

//向外共享实例对象

export default router;

