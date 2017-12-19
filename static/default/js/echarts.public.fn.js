
function lineZoom(ID){
    var xData=["09:00", "09:03", "09:13", "09:14", "09:24","09:34","09:44","09:54","10:04","10:14","10:24"];
    
    var myChart = echarts.init(document.getElementById(ID));
    var option = {
        color:["#2F4554","#C23531"],
        tooltip : {
            trigger: 'axis'
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 30,
                end: 70,
            },
            {
                type: 'inside',
                realtime: true,
                start: 30,
                end: 70,
            }
        ],
        grid: {
            left: '15px',
            right: '45px',
            top:'25px',
            bottom: '50px',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine:{
                    lineStyle:{
                        color:"#304a5d",
                        width:2,
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#666"    
                },                               
                data :xData
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{
                    show:false,
                },
                axisLine:{
                    lineStyle:{
                        color:"#304a5d",
                        width:2,
                    }
                },
                 splitLine:{
                    show:true,
                    lineStyle:{
                        color:"#CCC",
                        width:1,
                        type:"solid",
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#666",
					formatter: '{value}'
                }
            }
        ],
        series : [
                    {
                        name:'实时IT设备电能',
                        type:'line',
                        symbolSize:8,
                        data:[320, 232, 301, 234, 390, 230, 310,18, 391, 234, 290, 343, 310]
                    },
                    {
                        name:'机房实时总电能',
                        type:'line',
                        symbolSize:8,
                        data:[220, 18, 391, 234, 290, 343, 310, 301, 234, 390, 230, 310,18]
                    },
                ]
    };
    myChart.setOption(option, true);
    
    return myChart; 
}

