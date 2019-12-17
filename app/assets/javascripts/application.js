/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  $('.profileSelect').change(function () {
    $('#profileOptions').submit()
  })
  window.GOVUKFrontend.initAll()

  var myChart1 = echarts.init(document.getElementById('chart1'));
  var myChart2 = echarts.init(document.getElementById('chart2'));

  myChart1.setOption({
    color: ['#00703c', '#b1b4b6', '#d4351c'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['negative', 'neutral', 'positive'],
      name: 'theme'
    },
    xAxis: {
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['theme']
    },
    series: [
      {
        name: 'positive',
        type: 'bar',
        stack: true,
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [4]
      },
      {
        name: 'neutral',
        type: 'bar',
        stack: true,
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [1]
      },
      {
        name: 'negative',
        type: 'bar',
        stack: true,
        label: {
          normal: {
            show: true,
            position: 'insideRight'
          }
        },
        data: [2]
      }
    ]
  });

  myChart2.setOption({
    series: [{
      type: 'treemap',
      data: [{
        name: 'Home life',
        value: 10,
        color: ['#1d70b8', '#003078', '#5694ca', '#4c2c92'],
        children: [{
          name: 'behaviour',
          value: 4
        }, {
          name: 'life skills',
          value: 6
        }, {
          name: 'family relationships',
          value: 6
        }]
      }, {
        name: 'School life',
        value: 20,
        color: ['#6f72af', '#912b88', '#d53880', '#f499be'],
        children: [{
          name: 'school work',
          value: 8
        }, {
          name: 'attendance',
          value: 5
        }, {
          name: 'behaviour',
          value: 4
        }, {
          name: 'peer relationships',
          value: 2
        }, {
          name: 'other',
          value: 3
        }]
      }]
    }]
  })
})
