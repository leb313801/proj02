<template>
  <div class="about">
    <h1>This is an about page</h1>
    <highcharts :options="chartOptions" />
    <test-cp />
  </div>
</template>

<script>
import axios from 'axios'
import TestCp from '@/components/test.vue'

import { mapActions, mapGetters } from 'vuex'

const postStore = 'postStore'

export default {
  name: 'about',
  data() {
    return {
      
      testData: {type: Array},
      result: [],
      chartData: '',
      chartOptions: {
         chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Average Monthly Weather Data for Tokyo',
            align: 'left'
        },
        subtitle: {
            text: 'Source: WorldClimate.com',
            align: 'left'
        },
        xAxis: [{
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    //color: Highcharts.getOptions().colors[2]
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    //color: Highcharts.getOptions().colors[2]
                }
            },
            opposite: true

        }, { // Secondary yAxis
            //gridLineWidth: 0,
            title: {
                text: 'Rainfall',
                style: {
                    //color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} mm',
                style: {
                    //color: Highcharts.getOptions().colors[0]
                }
            }

        }, { // Tertiary yAxis
            //gridLineWidth: 0,
            title: {
                text: 'Sea-Level Pressure',
                style: {
                    //color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} mb',
                style: {
                    //color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }, { // 4 yAxis
            //gridLineWidth: 0,
            title: {
                text: 'test',
                style: {
                    //color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} mb',
                style: {
                    //color: Highcharts.getOptions().colors[1]
                }
            },
            //opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            // backgroundColor:
            //     Highcharts.defaultOptions.legend.backgroundColor || // theme
            //     'rgba(255,255,255,0.25)'
        },
        series: [],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0
                    },
                    yAxis: [{
                        labels: {
                            align: 'right',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -6
                        },
                        showLastLabel: false
                    }, {
                        visible: false
                    }]
                }
            }]
        }



      }
    }
  },
  created() {
      //this.chartData = [{name:"ddd", data:[[1,1230]]} ];
      this.$nextTick( () => this.fetchData() );
  },
  mounted() {
      

      //this.fetchData();

     
      console.log("dkdk:" + this.chartData);
      console.log("testData:" + JSON.stringify(this.testData));

      console.log("chart:" + this.chartOptions.series );

      
  },

  methods: {

      async fetchData() {

              await axios({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users/',
                params : {
                    page : 1,
                    pagesize : 5
                }
              }).then(res => {

                this.testData = [{name:"ddd", data:[[1,1230]]} ];
               

                this.chartData = 'dkdkd';

                console.log(res);  

                // const jsonData = [{
                //                     name: "Winter 2014-2015",
                //                     data: [
                //                         [Date.UTC(1970, 10, 25), 0],
                //                         [Date.UTC(1970, 11,  6), 0.25],
                //                         [Date.UTC(1970, 11, 20), 1.41],
                //                         [Date.UTC(1970, 11, 25), 1.64],
                //                         [Date.UTC(1971, 0,  4), 1.6],
                //                         [Date.UTC(1971, 0, 17), 2.55],
                //                         [Date.UTC(1971, 0, 24), 2.62],
                //                         [Date.UTC(1971, 1,  4), 2.5],
                //                         [Date.UTC(1971, 1, 14), 2.42],
                //                         [Date.UTC(1971, 2,  6), 2.74],
                //                         [Date.UTC(1971, 2, 14), 2.62],
                //                         [Date.UTC(1971, 2, 24), 2.6],
                //                         [Date.UTC(1971, 3,  1), 2.81],
                //                         [Date.UTC(1971, 3, 11), 2.63],
                //                         [Date.UTC(1971, 3, 27), 2.77],
                //                         [Date.UTC(1971, 4,  4), 2.68],
                //                         [Date.UTC(1971, 4,  9), 2.56],
                //                         [Date.UTC(1971, 4, 14), 2.39],
                //                         [Date.UTC(1971, 4, 19), 2.3],
                //                         [Date.UTC(1971, 5,  4), 2],
                //                         [Date.UTC(1971, 5,  9), 1.85],
                //                         [Date.UTC(1971, 5, 14), 1.49],
                //                         [Date.UTC(1971, 5, 19), 1.27],
                //                         [Date.UTC(1971, 5, 24), 0.99],
                //                         [Date.UTC(1971, 5, 29), 0.67],
                //                         [Date.UTC(1971, 6,  3), 0.18],
                //                         [Date.UTC(1971, 6,  4), 0]
                //                     ]
                //                 }, {
                //                     name: "Winter 2015-2016",
                //                     data: [
                //                         [Date.UTC(1970, 10,  9), 0],
                //                         [Date.UTC(1970, 10, 15), 0.23],
                //                         [Date.UTC(1970, 10, 20), 0.25],
                //                         [Date.UTC(1970, 10, 25), 0.23],
                //                         [Date.UTC(1970, 10, 30), 0.39],
                //                         [Date.UTC(1970, 11,  5), 0.41],
                //                         [Date.UTC(1970, 11, 10), 0.59],
                //                         [Date.UTC(1970, 11, 15), 0.73],
                //                         [Date.UTC(1970, 11, 20), 0.41],
                //                         [Date.UTC(1970, 11, 25), 1.07],
                //                         [Date.UTC(1970, 11, 30), 0.88],
                //                         [Date.UTC(1971, 0,  5), 0.85],
                //                         [Date.UTC(1971, 0, 11), 0.89],
                //                         [Date.UTC(1971, 0, 17), 1.04],
                //                         [Date.UTC(1971, 0, 20), 1.02],
                //                         [Date.UTC(1971, 0, 25), 1.03],
                //                         [Date.UTC(1971, 0, 30), 1.39],
                //                         [Date.UTC(1971, 1,  5), 1.77],
                //                         [Date.UTC(1971, 1, 26), 2.12],
                //                         [Date.UTC(1971, 3, 19), 2.1],
                //                         [Date.UTC(1971, 4,  9), 1.7],
                //                         [Date.UTC(1971, 4, 29), 0.85],
                //                         [Date.UTC(1971, 5,  7), 0]
                //                     ]
                //                 }, {
                //                     name: "Winter 2016-2017",
                //                     data: [
                //                         [Date.UTC(1970, 9, 15), 0],
                //                         [Date.UTC(1970, 9, 31), 0.09],
                //                         [Date.UTC(1970, 10,  7), 0.17],
                //                         [Date.UTC(1970, 10, 10), 0.1],
                //                         [Date.UTC(1970, 11, 10), 0.1],
                //                         [Date.UTC(1970, 11, 13), 0.1],
                //                         [Date.UTC(1970, 11, 16), 0.11],
                //                         [Date.UTC(1970, 11, 19), 0.11],
                //                         [Date.UTC(1970, 11, 22), 0.08],
                //                         [Date.UTC(1970, 11, 25), 0.23],
                //                         [Date.UTC(1970, 11, 28), 0.37],
                //                         [Date.UTC(1971, 0, 16), 0.68],
                //                         [Date.UTC(1971, 0, 19), 0.55],
                //                         [Date.UTC(1971, 0, 22), 0.4],
                //                         [Date.UTC(1971, 0, 25), 0.4],
                //                         [Date.UTC(1971, 0, 28), 0.37],
                //                         [Date.UTC(1971, 0, 31), 0.43],
                //                         [Date.UTC(1971, 1,  4), 0.42],
                //                         [Date.UTC(1971, 1,  7), 0.39],
                //                         [Date.UTC(1971, 1, 10), 0.39],
                //                         [Date.UTC(1971, 1, 13), 0.39],
                //                         [Date.UTC(1971, 1, 16), 0.39],
                //                         [Date.UTC(1971, 1, 19), 0.35],
                //                         [Date.UTC(1971, 1, 22), 0.45],
                //                         [Date.UTC(1971, 1, 25), 0.62],
                //                         [Date.UTC(1971, 1, 28), 0.68],
                //                         [Date.UTC(1971, 2,  4), 0.68],
                //                         [Date.UTC(1971, 2,  7), 0.65],
                //                         [Date.UTC(1971, 2, 10), 0.65],
                //                         [Date.UTC(1971, 2, 13), 0.75],
                //                         [Date.UTC(1971, 2, 16), 0.86],
                //                         [Date.UTC(1971, 2, 19), 1.14],
                //                         [Date.UTC(1971, 2, 22), 1.2],
                //                         [Date.UTC(1971, 2, 25), 1.27],
                //                         [Date.UTC(1971, 2, 27), 1.12],
                //                         [Date.UTC(1971, 2, 30), 0.98],
                //                         [Date.UTC(1971, 3,  3), 0.85],
                //                         [Date.UTC(1971, 3,  6), 1.04],
                //                         [Date.UTC(1971, 3,  9), 0.92],
                //                         [Date.UTC(1971, 3, 12), 0.96],
                //                         [Date.UTC(1971, 3, 15), 0.94],
                //                         [Date.UTC(1971, 3, 18), 0.99],
                //                         [Date.UTC(1971, 3, 21), 0.96],
                //                         [Date.UTC(1971, 3, 24), 1.15],
                //                         [Date.UTC(1971, 3, 27), 1.18],
                //                         [Date.UTC(1971, 3, 30), 1.12],
                //                         [Date.UTC(1971, 4,  3), 1.06],
                //                         [Date.UTC(1971, 4,  6), 0.96],
                //                         [Date.UTC(1971, 4,  9), 0.87],
                //                         [Date.UTC(1971, 4, 12), 0.88],
                //                         [Date.UTC(1971, 4, 15), 0.79],
                //                         [Date.UTC(1971, 4, 18), 0.54],
                //                         [Date.UTC(1971, 4, 21), 0.34],
                //                         [Date.UTC(1971, 4, 25), 0]
                //                     ]
                //                 }];


                const jsonData = [{
                    name: 'Rainfall',
                    type: 'spline',
                    yAxis: 1,
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        valueSuffix: ' mm'
                    }

                }, {
                    name: 'Sea-Level Pressure',
                    type: 'spline',
                    yAxis: 2,
                    data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
                    marker: {
                        enabled: false
                    },
                    //dashStyle: 'shortdot',
                    tooltip: {
                        valueSuffix: ' mb'
                    }

                }, {
                    name: 'Temperature',
                    type: 'spline',
                    data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        valueSuffix: ' °C'
                    }
                }, {
                    name: 'test',
                    type: 'spline',
                    yAxis: 3,
                    data: [530.0, 300.9, 360.5, 140.5, 120.2, 350.5, 250.2, 200.5, 180.3, 120.3, 135.9, 98.6],
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        valueSuffix: ' °C'
                    }
                }];

                this.AC_CHART_DATA(jsonData);
                
                this.chartOptions.series = this.GE_CHART_DATA;


                                
                
              }).catch(err => {
                console.log(err);
              });



          },

          ...mapActions(postStore, [
            'AC_CHART_DATA'
          ]),
      },
      components: {
        TestCp
      },
      computed: {
        ...mapGetters(postStore, [
          'GE_CHART_DATA'
        ]), 
      }
  
}

</script>