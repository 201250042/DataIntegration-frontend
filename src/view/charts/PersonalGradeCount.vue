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
<!--          v-model="course"-->
<!--          placeholder="课程编号"-->
<!--          style="width:120px;"-->
<!--      ></el-input>-->
      <el-button
          type="primary"
          @click="query"
          class="queryButton"
      >查询</el-button>
      <el-button
          type="primary"
          @click="prev"
      >返回上一级页面</el-button>
    </div>
    <div style="width:600px;height:400px;margin-top: 20px;">
      <div
          id="gradeCount"
          style="width:100%;height:400px;float:left;"
      ></div>
    </div>
  </div>
</template>

<script>
import { getGradeDistributionFromA, getGradeDistributionFromB, getGradeDistributionFromC, getGradeDistributionFromAll } from '@/network/courses/index.js';

export default {
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
      selectedInstitute: '',
      course: '',
      chart: '',
      opinion: ['60分以下', '60-90分', '90分以上'],
      opinionData: [
        // { value: 1, name: '60分以下', },
        // { value: 9, name: '60-90分',  },
        // { value: 5, name: '90分以上',  },
      ],
      titleText: '我的课程成绩分布情况'
    }
  },
  methods: {
    drawLine() {
      // console.log("开始画饼图")
      // 基于准备好的dom，初始化echarts实例
      this.chart = this.$echarts.init(document.getElementById('gradeCount'))
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
            name: '区间内课程数',
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
              },
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
        config = {
          params: {
            cno: 1001
          }
        }
        getGradeDistributionFromA(config).then(res => {
          this.setData(res);
          this.drawLine();
        })
      }
      else if (this.selectedInstitute === 'B') {
        config = {
          params: {
            cno: 2001
          }
        }
        getGradeDistributionFromB(config).then(res => {
          this.setData(res);
          this.drawLine();
        })
      }
      else if (this.selectedInstitute === 'C') {
        config = {
          params: {
            cno: 3001
          }
        }
        getGradeDistributionFromC(config).then(res => {
          this.setData(res);
          this.drawLine();
        })
      }
      else if (this.selectedInstitute === 'ABC') {
        config = {
          params: {
            cno: 3002
          }
        }
        getGradeDistributionFromAll(config).then(res => {
          this.setData(res);
          this.drawLine();
        })
      }
    },
    setData(res) {
      this.opinionData = [
        { value: Math.ceil(res[0]/5), name: '60分以下', },
        { value: Math.ceil(res[1]/5), name: '60-90分', },
        { value: Math.ceil(res[2]/5), name: '90分以上', },
      ];
    },

    prev(){
      this.$router.go(-1);
    }
  }
}
</script>
<style>
</style>