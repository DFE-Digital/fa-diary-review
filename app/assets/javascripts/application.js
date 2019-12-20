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

  const urlParams = new URLSearchParams(window.location.search);
  const childNameParam = urlParams.get('childName');
  const topicParam = urlParams.get('topic') || 'home-life';
  const subTopicParam = urlParams.get('subTopic') || 'behaviour';

  $.ajax('api/logs/breakdown?childName=' + childNameParam).done((breakdown) => {

    if (breakdown[topicParam] && breakdown[topicParam][subTopicParam]) {

      var myChart1 = echarts.init(document.getElementById('chart1'));

      myChart1.setOption({
        color: ['#00703c', '#b1b4b6', '#d4351c'],

        tooltip: {
          show: true,
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['Positive', 'Neutral', 'Concern']
        },
        xAxis: {
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            name: 'Positive',
            type: 'bar',
            stack: true,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [breakdown[topicParam][subTopicParam].positive]
          },
          {
            name: 'Neutral',
            type: 'bar',
            stack: true,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [breakdown[topicParam][subTopicParam].neutral]
          },
          {
            name: 'Concern',
            type: 'bar',
            stack: true,
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            data: [breakdown[topicParam][subTopicParam].total]
          }
        ]
      })
    }




    const data = []

    Object.keys(breakdown).forEach(topic => {
      data.push({
        name: topic,
        children: Object.keys(breakdown[topic]).map(subTopic => {

          const params = { topic, subTopic, childName: childNameParam }
          const paramString = new URLSearchParams(params)

          return {
            name: `${subTopic.charAt(0).toUpperCase() + subTopic.slice(1)} (${breakdown[topic][subTopic].total})`,
            value: breakdown[topic][subTopic].total,
            link: `/logs?${paramString.toString()}`
          }
        })
      })
    })

    var myChart2 = echarts.init(document.getElementById('chart2'));

    myChart2.setOption({
      series: [{
        type: 'treemap',
        roam: 'false',
        nodeClick: 'link',
        breadcrumb: {
          show: false
        },
        label: {
          show: true
        },
        width: '100%',
        data,
        fontSize: 40,
        levels: [
          {
            itemStyle: {
              normal: {
                borderWidth: 0,
                gapWidth: 10
              },
              fontSize: 100
            }
          },
          {
            itemStyle: {
              normal: {
                gapWidth: 1
              }
            },
            color: ['#85994b', '#b58840', '#f47738'],
            upperLabel: {
              show: true,
              color: '#000000',
              fontWeight: 'bold'
            }
          }
        ]
      }]
    })
  })
})
