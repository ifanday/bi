var sexArr = ['#3498db', '#f35944', '#cbcbcb'],
    fArr = ['#3498db', '#15bfce', '#f35944'],
    cArr = ['#3498db', '#ffb10b', '#15bfce', '#26c281', '#cbcbcb'],
    endArr = ['#ffb10b', '#3498db', '#cbcbcb'];

var commodityRound = echarts.init(document.querySelector('#commodity-round')),
    commodityView = echarts.init(document.querySelector('#commodity-view')),
    commodityOrder = echarts.init(document.querySelector('#commodity-order')),
    commodityPay = echarts.init(document.querySelector('#commodity-pay')),

    commodityRoundOption = {
        title: {
            text: '类目',
            textStyle: {
                fontSize: 16,
                color: '#1f1f1f'
            },
            top: '5%'
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            bottom: 0,
            data: ['服装', '家电', '食品', '电子产品', '其他']
        },
        tooltip: {
            trigger: 'item',
            formatter: "{c} <br> ({d}%)",
            backgroundColor: '#fff', //背景颜色（此时为默认色）
            //formatter : 'x:{b0}: y:{c0}<br />{b1}: {c1}' ,
            borderColor: '#666',
            borderWidth: 1,
            textStyle: {
                color: '#666'
            }
        },
        series: [{
            name: '',
            type: 'pie',
            //radius : '55%',
            radius: ['40%', '90%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                    //formatter: "{c}",
                    position: 'inside',
                    textStyle: {
                        fontSize: 14
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        // fontWeight: 'bold'
                    }
                }
            },
            data: [{
                value: 335,
                name: '服装',
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }, {
                value: 310,
                name: '家电',
                itemStyle: {
                    normal: {
                        //color: '#f35944',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        //color: '#f35944',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }, {
                value: 234,
                name: '食品',
                itemStyle: {
                    normal: {
                        //color: '#f59901',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        //color: '#f59901',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }, {
                value: 234,
                name: '电子产品',
                itemStyle: {
                    normal: {
                        //color: '#f59901',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        //color: '#f59901',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }, {
                value: 234,
                name: '其他',
                itemStyle: {
                    normal: {
                        //color: '#f59901',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        //color: '#f59901',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }]
        }]
    },

    commodityViewOption = {
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 0,
                end: 100,
                handleStyle: {
                    opacity: 0
                },
                textStyle: {
                    fontSize: 18
                }
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 10,
                end: 60
            }
        ],
       
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',//背景颜色（此时为默认色）
            //formatter : 'x:{b0}: y:{c0}<br />{b1}: {c1}' ,
            /*
                a0
            */
            //formatter: '2016-{b0}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}',
            borderColor : '#ebeef4',
            borderWidth : 1,
            textStyle : {
                color : '#293469'   
            },
            padding: 10,
            axisPointer: {
                lineStyle: {
                    color: '#8f90cb',
                    opacity: 0.4
                }
            }
        },
        color: fArr,
        backgroundColor: '#223d76',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['06-12','06-13','06-14','06-15','06-16','06-17','06-18'],
            axisLabel: {
                textStyle: {
                    color: '#8f90cb'
                }   
            },
            axisLine: {
                lineStyle: {
                    color: '#2a3360',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    opacity: 0
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#2a3360',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    opacity: 0
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#2a3360'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#8f90cb'
                }   
            }
        },
        series: [{
                name:'在线商品数',
                type:'line',
                smooth: true,
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            }]
    },

    commodityOrderOption = {
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 0,
                end: 100,
                handleStyle: {
                    opacity: 0
                },
                textStyle: {
                    fontSize: 18
                }
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 10,
                end: 60
            }
        ],
       
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',//背景颜色（此时为默认色）
            //formatter : 'x:{b0}: y:{c0}<br />{b1}: {c1}' ,
            /*
                a0
            */
            //formatter: '2016-{b0}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}',
            borderColor : '#ebeef4',
            borderWidth : 1,
            textStyle : {
                color : '#293469'   
            },
            padding: 10,
            axisPointer: {
                lineStyle: {
                    color: '#8f90cb',
                    opacity: 0.4
                }
            }
        },
        color: fArr,
        backgroundColor: '#223d76',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['06-12','06-13','06-14','06-15','06-16','06-17','06-18', '06-19', '06-20', '06-21'],
            axisLabel: {
                textStyle: {
                    color: '#8f90cb'
                }   
            },
            axisLine: {
                lineStyle: {
                    color: '#2a3360',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    opacity: 0
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#2a3360',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    opacity: 0
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#2a3360'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#8f90cb'
                }   
            }
        },
        series: [{
                name:'在线商品数',
                type:'line',
                smooth: true,
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210, 278, 467, 789]
            }]
    },

    commodityPayOption = {
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 0,
                end: 100,
                handleStyle: {
                    opacity: 0
                },
                textStyle: {
                    fontSize: 18
                }
            },
            {
                type: 'inside',
                xAxisIndex: 0,
                start: 10,
                end: 60
            }
        ],
       
        tooltip: {
            trigger: 'axis',
            backgroundColor: '#fff',//背景颜色（此时为默认色）
            //formatter : 'x:{b0}: y:{c0}<br />{b1}: {c1}' ,
            /*
                a0
            */
            //formatter: '2016-{b0}<br />{a0}: {c0}<br />{a1}: {c1}<br />{a2}: {c2}<br />{a3}: {c3}',
            borderColor : '#ebeef4',
            borderWidth : 1,
            textStyle : {
                color : '#293469'   
            },
            padding: 10,
            axisPointer: {
                lineStyle: {
                    color: '#8f90cb',
                    opacity: 0.4
                }
            }
        },
        color: fArr,
        backgroundColor: '#223d76',
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['06-12','06-13','06-14','06-15','06-16','06-17','06-18', '06-19', '06-20', '06-21'],
            axisLabel: {
                textStyle: {
                    color: '#8f90cb'
                }   
            },
            axisLine: {
                lineStyle: {
                    color: '#2a3360',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    opacity: 0
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#2a3360',
                    width: 1
                }
            },
            axisTick: {
                lineStyle: {
                    opacity: 0
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#2a3360'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#8f90cb'
                }   
            }
        },
        series: [{
                name:'在线商品数',
                type:'line',
                smooth: true,
                stack: '总量',
                data:[1220, 1312, 1101, 1324, 930, 2230, 1210, 888, 777, 1111]
            }]
    },


    num;

commodityRound.setOption(commodityRoundOption);
commodityView.setOption(commodityViewOption);
commodityOrder.setOption(commodityOrderOption);
commodityPay.setOption(commodityPayOption);