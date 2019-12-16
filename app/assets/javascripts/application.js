/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  $('.profileSelect').change(function() {
    $('#profileOptions').submit()
  })
  window.GOVUKFrontend.initAll()

        // based on prepared DOM, initialize echarts instance
        var myChart1 = echarts.init(document.getElementById('chart1'));
        var myChart2 = echarts.init(document.getElementById('chart2'));

        // use configuration item and data specified to show chart
        myChart1.setOption({
          color: ['#00703c','#b1b4b6', '#d4351c'],
            tooltip : {
                trigger: 'axis',
                axisPointer : { 
                    type : 'shadow'
                }
            },
            legend: {
                data: ['negative', 'neutral','positive'],
                orient: 'vertical',
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis:  {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['theme']
            },
            series: [
                {
                    name: 'positive',
                    type: 'bar',
                    stack: 'red',
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
                  stack: 'red',
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
                stack: 'red',
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
                  name: 'Home life',            // First tree
                  value: 10,
                  color: ['#1d70b8','#003078', '#5694ca', '#4c2c92'],
                  children: [{
                      name: 'behaviour',       // First leaf of first tree
                      value: 4
                  }, {
                      name: 'life skills',       // Second leaf of first tree
                      value: 6
                  }, {
                    name: 'family relationships',       // Second leaf of first tree
                    value: 6
                }]
              }, {
                  name: 'School life',            // Second tree
                  value: 20,
                  color: ['#6f72af','#912b88', '#d53880', '#f499be'],
                  children: [{
                          name: 'school work',  // Granson of first tree
                          value: 8
                      },{
                        name: 'attendance',  // Granson of first tree
                        value: 5
                    },{
                      name: 'behaviour',  // Granson of first tree
                      value: 4
                  },{
                    name: 'peer relationships',  // Granson of first tree
                    value: 2
                },{
                  name: 'other',  // Granson of first tree
                  value: 3
              }]
                  }]
              }]

      });
})
