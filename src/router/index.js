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

import AdminRegister from "@/view/AdminRegister.vue";
import RetrievePWD from "@/view/retrievePWD.vue";
//新增的路径

Vue.use(VueRouter);


//创建对象
const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/identify'
        },
        // CC
        {
            path: '/c-login',
            component: CLogin
        },
        {
            path: '/c-course',
            component: CoursesCView,
        },
        {
            path: '/student',
            component: StudentView
        },
        {
            path: '/c-selectedCourses',
            component: CSelectedCourses
        },

        {
            path:'/c-register',
            component:CRegister
        },
        // B
        {
            path: '/b-login',
            component: BLogin
        },
        {
            path: '/b-course',
            component: CoursesBView
        },
        {
            path: '/b-selectedCourses',
            component: BSelectedCourses
        },

        {
            path:'/b-register',
            component:BRegister
        },
        // A
        {
            path: '/a-login',
            component: ALogin
        },
        {
            path: '/a-course',
            component: CoursesAView
        },
        {
            path: '/a-selectedCourses',
            component: ASelectedCourses
        },
        {
            path:'/a-register',
            component:ARegister
        },
        // Admin
        {
            path: '/admin-login',
            component: AdminLogin
        },
        {
            path: '/admin',
            component: AdminView
        },

        //wxc新增： AdminRegister
        {
            path:'/admin-register',
            component:AdminRegister
        },

        // Identify
        {
            path: '/identify',
            component: Identify
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

