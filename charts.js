// 第一个图表的js-------------
var myChart = echarts.init(document.getElementById('myBarChart'));

// 指定图表的配置项和数据
var option = {
    color: ['#aeddec', '#f7ddc1'],
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['-', '快消品销售额增长', '液态乳品销售额增长'],
            [2015, 4.3, 7.4],
            [2016, 3.7, 5.3],
            [2017, 4.1, 2],
            [2018, 5.1, 1.7],
            [2019, 5.1, 3.6],
            ['2020P6', 2.1, 0]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},

    ]
};

myChart.setOption(option);



// 第二个图表------------------------------------------------------------------------------------



var myChart1 = echarts.init(document.getElementById('myPieChart'));
// 指定图表的配置项和数据


var option = {
    color: ['#aeddec','#fdae58','#006699','#4cabce','#f7ddc1','#cacaca'],
    legend: {},
    tooltip: {
        trigger: 'axis',
        showContent: false
    },
    dataset: {
        source: [
            ['渠道', '2018', '2019', '2020'],
            ['福利礼赠', 25.9, 25.6, 17.7],
            ['网购', 3.6, 5.1, 8.9],
            ['大卖场', 24.7, 23.3, 23.4],
            ['小超市', 9.9, 10.9, 13.1],
            ['大超市', 20.6, 20.5, 21.6],
            ['其他', 15.3, 14.6, 15.3]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {gridIndex: 0},
    grid: {top: '55%'},
    series: [
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                color:"#000000",
                formatter: '{b}: {@2018} ({d}%)'

            },
            encode: {

                itemName: '渠道',
                value: '2018',
                tooltip: '2018'
            }
        }
    ]
};

myChart.on('updateAxisPointer', function (event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        myChart.setOption({
            series: {
                id: 'pie',
                label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                    value: dimension,
                    tooltip: dimension
                }
            }
        });
    }
});
myChart1.setOption(option);



//第三个图表-----------------------------------



// 对echarts进行自适应的优化 -------------

//根据窗口的大小变动图表 --- 重点
window.onresize = function(){
    myChart.resize();
    myChart1.resize();
    //myChart1.resize();若有多个图表变动，可多写
}