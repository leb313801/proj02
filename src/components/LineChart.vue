<template>
    <div>
        <highcharts :options="chartOptions"/>
    </div>
</template>

<script>
export default {
    name: 'LineChart',
    data() {
        return {
            chartOptions: {
                title: {
                    text: 'Solar Employment Growth by Sector, 2010-2016'
                },

                subtitle: {
                    text: 'Source: thesolarfoundation.com'
                },

                yAxis: {
                    title: {
                        text: 'Number of Employees'
                    }
                },

                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 2010 to 2017'
                    }
                },

                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },

                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },

                series: this.chartData,

                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            
            }
        }
    },
    props:{
        addData:{
            type: Object
        },
        chartData: {
            type: Array,
            // default: function(){
            //     return [{
            //         name: 'Installation',
            //         data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            //     }, {
            //         name: 'Manufacturing',
            //         data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            //     }, {
            //         name: 'Sales & Distribution',
            //         data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            //     }, {
            //         name: 'Project Development',
            //         data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            //     }, {
            //         name: 'Other',
            //         data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            //     }]
            // }
        }
    },
    watch:{
        addData(){     
            // var seriesLength = this.$children[0].chart.series.length;
            // for(var i = seriesLength -1; i > -1; i--) {
            //     this.$children[0].chart.series[i].remove();
            // }

            
            let chartSeries = this.$children[0].chart.series;

            for(let i=0; i<chartSeries.length; i++ ){
             
                if( !(chartSeries[i].name === 'Installation' || chartSeries[i].name === 'Manufacturing' || chartSeries[i].name === 'Sales & Distribution' || chartSeries[i].name === 'Project Development' || chartSeries[i].name === 'Other')){

               
                    chartSeries[i].remove();
                }
            }
            
            this.$children[0].chart.addSeries(this.addData)
        },
        chartData(){
            console.log("------1-------")
            console.log(this.chartData)
        }
    },
    created() {
        console.log("------2-------")
        console.log(this.chartData)
    }
}
</script>