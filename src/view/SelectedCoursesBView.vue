<template>
  <div>

    <SelectedCoursesHead :acc="account"></SelectedCoursesHead>
        <br>
        <br>
    <el-button
      type="primary"
      plain
      style="font-size: 20px;margin-left: 20px"
      @click="rollBack"
    >返回选课</el-button>
    <h2 class="_title">已选课程</h2>
    <el-table
      :data="courseList"
      style="width: 100%;margin-left: 20px"
    >
      <el-table-column
        prop="number"
        label="课程编号"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="课程名称"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="time"
        label="上课时间"
      >
      </el-table-column>
      <el-table-column
        prop="credit"
        label="学分"
      >
      </el-table-column>
      <el-table-column
        prop="teacher"
        label="老师"
      >
      </el-table-column>
      <el-table-column
        prop="place"
        label="地点"
      >
      </el-table-column>
      <!-- 退课 -->
      <el-table-column label="操作">
        <template slot-scope="scope">
        <el-popconfirm
            title="确认退课？"
            @confirm="dropCourse(scope.row)"
        >
          <el-button
            slot="reference"
            type="primary"
            plain
            size="small"
            class="dropButton"
          >退课 </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import SelectedCoursesHead from '@/view/SelectedCoursesHead.vue'
import { BDropCourse, BGetSelectedCourses } from '@/network/courses';
const xml2js = require('xml2js');

export default {
  components: {
    SelectedCoursesHead,
  },
  mounted() {
    this.account = sessionStorage.getItem('acc');
    this.getSelectedCourses();
  },
  data() {
    return {
      account: '',
      courseList: [],
    };
  },
  methods: {
    getSelectedCourses() {
      this.courseList = [];
      let sno = sessionStorage.getItem('acc');
      let pack = {
        sno: sno
      }
      let xml = this.json2Xml(pack);
      let config = {
        params: {
          snoXml: xml
        }
      }
      BGetSelectedCourses(config).then(res => {
        console.log(res);
        let xmlDoc = new DOMParser().parseFromString(res, 'text/xml');
        let courses = xmlDoc.getElementsByTagName('课程');
        for (let i = 0; i < courses.length; ++i) {
          let course = courses[i];

          let index = 1;
          let isACourse = course.childNodes[0].innerHTML.charAt(0) === '1';

          let item = {
            number: course.childNodes[0].innerHTML,//编号
            name: course.childNodes[1].innerHTML,//名称
            time: isACourse ? '/' : course.childNodes[++index].innerHTML, //课时
            credit: course.childNodes[++index].innerHTML,//学分
            teacher: course.childNodes[++index].innerHTML,//老师
            place: course.childNodes[++index].innerHTML,
          }

          this.courseList.push(item);
        }
      })
    },
    /**
      * 将json转化为xml格式
      * @param {json} json 
      */
    json2Xml(json) {
      let builder = new xml2js.Builder();
      return builder.buildObject({ '选课': json });
    },
    /**
     * 退课操作
     * @param {行} row 
     */
    dropCourse(row) {
      let sno = sessionStorage.getItem('acc');
      let item = {
        cno: row.number,
        sno: sno,
        // grd: 0,
      }
      let xml = this.json2Xml(item);
      let config = {
        params: {
          courses_selectionXml: xml
        }
      }
      BDropCourse(config);
      this.$message({
              showClose: true,
              message: '退课成功',
              type: 'success',
            });
      /*alert('退课成功！');*/
      /*location.reload();*/
    },
    /**
 * 返回选课
 */
    rollBack() {
      this.$router.push('/b-course');
    }
  }
};
  </script>
  
  <style scoped>
._title {
  margin-left: 20px;
}
</style>
    