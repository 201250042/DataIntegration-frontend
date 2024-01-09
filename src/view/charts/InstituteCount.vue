<template>
  <div>
    <div>
      <el-select
        v-model="selectedInstitute"
        placeholder="院系"
        style="margin-right: 10px;width:113px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
<!--      <el-input-->
<!--        v-model="course"-->
<!--        placeholder="课程编号"-->
<!--        style="width:120px;"-->
<!--      ></el-input>-->
      <el-select
        v-model="course"
        placeholder="课程编号"
        style="margin-right: 10px;width:113px"
      >
        <div v-if="selectedInstitute === 'A'">
          <el-option
            v-for="item in coursesA"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </div>
        <div v-else-if="selectedInstitute === 'B'">
          <el-option
            v-for="item in coursesB"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </div>
        <div v-else-if="selectedInstitute === 'C'">
          <el-option
            v-for="item in coursesC"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </div>
        <div v-else-if="selectedInstitute === 'ABC'">
          <el-option
            v-for="item in courses"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </div>
      </el-select>
      <el-button
        type="primary"
        @click="query"
        class="queryButton"
      >查询</el-button>
    </div>
    <div style="width:600px;height:400px;margin-top: 20px;">
      <div
        id="instituteCount"
        style="width:100%;height:400px;float:left;"
      ></div>
    </div>
  </div>
</template>

<script>
import { getStudentDistributionFromA, getStudentDistributionFromB, getStudentDistributionFromC, getStudentDistributionFromAll } from '@/network/courses/index.js';
import it from "element-ui/src/locale/lang/it";

export default {
  computed: {
    it() {
      return it
    }
  },
  data() {
    return {
      options: [
        {
          value: 'A',
          label: 'A学院'
        },
        {
          value: 'B',
          label: 'B学院'
        },
        {
          value: 'C',
          label: 'C学院'
        },
        {
          value: 'ABC',
          label: '所有学院'
        },
      ],

      coursesA: [
        // A学院
        {
          value: '1001',
          label: '1001'
        },
        {
          value: '1002',
          label: '1002'
        },
        {
          value: '1003',
          label: '1003'
        },
        {
          value: '1004',
          label: '1004'
        },
        {
          value: '1005',
          label: '1005'
        },
        {
          value: '1006',
          label: '1006'
        },
        {
          value: '1007',
          label: '1007'
        },
        {
          value: '1008',
          label: '1008'
        },
        {
          value: '1009',
          label: '1009'
        },
        {
          value: '1010',
          label: '1010'
        }
      ],
      coursesB: [
        // B学院
        {
          value: '2001',
          label: '2001'
        },
        {
          value: '2002',
          label: '2002'
        },
        {
          value: '2003',
          label: '2003'
        },
        {
          value: '2004',
          label: '2004'
        },
        {
          value: '2005',
          label: '2005'
        },
        {
          value: '2006',
          label: '2006'
        },
        {
          value: '2007',
          label: '2007'
        },
        {
          value: '2008',
          label: '2008'
        },
        {
          value: '2009',
          label: '2009'
        },
        {
          value: '2010',
          label: '2010'
        }
      ],
      coursesC: [
        // C学院
        {
          value: '3001',
          label: '3001'
        },
        {
          value: '3002',
          label: '3002'
        },
        {
          value: '3003',
          label: '3003'
        },
        {
          value: '3004',
          label: '3004'
        },
        {
          value: '3005',
          label: '3005'
        },
        {
          value: '3006',
          label: '3006'
        },
        {
          value: '3007',
          label: '3007'
        },
        {
          value: '3008',
          label: '3008'
        },
        {
          value: '3009',
          label: '3009'
        },
        {
          value: '3010',
          label: '3010'
        }
      ],

      courses: [
        // A学院
        {
          value: '1001',
          label: '1001'
        },
        {
          value: '1002',
          label: '1002'
        },
        {
          value: '1003',
          label: '1003'
        },
        {
          value: '1004',
          label: '1004'
        },
        {
          value: '1005',
          label: '1005'
        },
        {
          value: '1006',
          label: '1006'
        },
        {
          value: '1007',
          label: '1007'
        },
        {
          value: '1008',
          label: '1008'
        },
        {
          value: '1009',
          label: '1009'
        },
        {
          value: '1010',
          label: '1010'
        },
        // B学院
        {
          value: '2001',
          label: '2001'
        },
        {
          value: '2002',
          label: '2002'
        },
        {
          value: '2003',
          label: '2003'
        },
        {
          value: '2004',
          label: '2004'
        },
        {
          value: '2005',
          label: '2005'
        },
        {
          value: '2006',
          label: '2006'
        },
        {
          value: '2007',
          label: '2007'
        },
        {
          value: '2008',
          label: '2008'
        },
        {
          value: '2009',
          label: '2009'
        },
        {
          value: '2010',
          label: '2010'
        },
        // C学院
        {
          value: '3001',
          label: '3001'
        },
        {
          value: '3002',
          label: '3002'
        },
        {
          value: '3003',
          label: '3003'
        },
        {
          value: '3004',
          label: '3004'
        },
        {
          value: '3005',
          label: '3005'
        },
        {
          value: '3006',
          label: '3006'
        },
        {
          value: '3007',
          label: '3007'
        },
        {
          value: '3008',
          label: '3008'
        },
        {
          value: '3009',
          label: '3009'
        },
        {
          value: '3010',
          label: '3010'
        }
      ],
      selectedInstitute: '',
      course: '',
      chart: '',
      opinion: ['A学院', 'B学院', 'C学院'],
      opinionData: [
        // { value: 1, name: 'A学院',  },
        // { value: 9, name: 'B学院',  },
        // { value: 5, name: 'C学院',  },
      ],
      titleText: '选课学生院系分布情况'
    }
  },
  methods: {
    drawLine() {
      // console.log("开始画饼图")
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById('instituteCount'))
      // 绘制图表
      this.chart.setOption({
        title: {
          text: this.titleText, // 主标题
          subtext: '', // 副标题
          x: 'left' // x轴方向对齐方式
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
          fontSize: 16,
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: this.opinion,
          textStyle: {
            fontSize: 16,
          }
        },
        series: [
          {
            name: '选课人数',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            data: this.opinionData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal: {
                label: {
                  textStyle: {
                    fontSize: 16
                  },
                },
                color: function (params) {
                  // 自定义颜色
                  var colorList = ['#36A2EB', '#FFCE56', '#FF6384', '#E84393']
                  return colorList[params.dataIndex]
                }
              }
            }
          }
        ]
      })
    },
    query() {
      this.opinionData = [];
      let cnumber = this.course;
      let config = {
        params: {
          cno: cnumber
        }
      }
      if (this.selectedInstitute === 'A') {
        getStudentDistributionFromA(config).then(res => {
          this.setData(res);
          this.drawLine();
        })
      }
      else if (this.selectedInstitute === 'B') {
        getStudentDistributionFromB(config).then(res => {
          this.setData(res);
          this.drawLine();
        })
      }
      else if (this.selectedInstitute === 'C') {
        getStudentDistributionFromC(config).then(res => {
          this.setData(res);
          this.drawLine();
        })
      }
      else if (this.selectedInstitute === 'ABC') {
        getStudentDistributionFromAll(config).then(res => {
          this.setData(res);
          this.drawLine();
        })
      }
    },
    setData(res) {
      this.opinionData = [
        { value: res[0], name: 'A学院', },
        { value: res[1], name: 'B学院', },
        { value: res[2], name: 'C学院', },
      ];
    }
  }
}
</script>
<style>
</style>