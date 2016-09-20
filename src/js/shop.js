var classify = echarts.init(document.querySelector('#classify-echarts')),

	area = echarts.init(document.querySelector('#area-echarts')),

	shopNum = echarts.init(document.querySelector('#shop-echarts')),

	level = echarts.init(document.querySelector('#level-echarts')),

    classifyOption = {
        title: {
            subtext: '',
            x: 'left'
        },
        /*tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            backgroundColor: '#fff', //背景颜色（此时为默认色）
            //formatter : 'x:{b0}: y:{c0}<br />{b1}: {c1}' ,
            borderColor: '#666',
            borderWidth: 1,
            textStyle: {
                color: '#666'
            }
        },*/
        legend: {
            orient: 'horizontal',
            x: 'center',
            bottom: 0,
            data: ['服装', '家电', '食品', '电子产品', '其他']
        },
        series: [{
            name: '',
            type: 'pie',
            //radius : '55%',
            radius: ['30%', '55%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{b} : {c} \n {d}%",
                    //position: 'inside',
                    textStyle: {
                    	fontSize: 14
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16'
                    }
                }
            },
            xAxis: {

            },
            data: [{
                value: 335,
                name: '服装',
                itemStyle: {
                    normal: {
                        color: '#3876c1',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        color: '#3876c1',
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
                        color: '#f35944',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        color: '#f35944',
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
                        color: '#f59901',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        color: '#f59901',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }

            }, {
                value: 535,
                name: '电子产品',
                itemStyle: {
                    normal: {
                        color: '#01a6e7',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        color: '#01a6e7',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }, {
                value: 148,
                name: '其他',
                itemStyle: {
                    normal: {
                        color: '#1dac91',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        color: '#1dac91',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }],

        }]
    },

    areaOption = {
	    title: {
	        //text: '按地域',
	        left: 'left'
	    },
	    tooltip: {
	        trigger: 'item',
			backgroundColor: '#fff',//背景颜色（此时为默认色）
			//formatter : 'x:{b0}: y:{c0}<br />{b1}: {c1} ({d}%)' ,
			formatter: '{b} <br/> 店铺数量: {c} <br/>',
			borderColor : '#666',
			borderWidth : 1,
			textStyle : {
				color : '#666'	
			}
	    },

	    /*legend: {
	        orient: 'horizontal',
	        left: 'center',
			top: 'bottom',
	        data:['iphone3','iphone4','iphone5']
	    },*/
	    visualMap: {
	        min: 0,
	        max: 100,
			orient: 'horizontal',
	        left: 'center',
	        top: 'top',
	        text: ['高','低'],           // 文本，默认为数值文本
	        calculable: true,
			color:  ['#fe7e00', '#ffa43a', '#ffb864', '#ffd4a2'],
			inverse: true,
	    },
	    /*toolbox: {
	        show: true,
	        orient: 'vertical',
	        left: 'right',
	        top: 'center',
	        feature: {
	            dataView: {readOnly: false},
	            restore: {},
	            saveAsImage: {}
	        }
	    },*/
	    series: [
	        {
	            
	            type: 'map',
	            mapType: 'china',
	            roam: false,
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	                {name: '北京',value: 80 },
	                {name: '天津',value: 80 },
	                {name: '上海',value: 80 },
	                {name: '重庆',value: 80 },
	                {name: '河北',value: 80 },
	                {name: '河南',value: 80 },
	                {name: '云南',value: 80 },
	                {name: '辽宁',value: 80 },
	                {name: '黑龙江',value: 80 },
	                {name: '湖南',value: 20 },
	                {name: '安徽',value: 20 },
	                {name: '山东',value: 20 },
	                {name: '新疆',value: 20 },
	                {name: '江苏',value: 20 },
	                {name: '浙江',value: 20 },
	                {name: '江西',value: 20 },
	                {name: '湖北',value: 20 },
	                {name: '广西',value: 20 },
	                {name: '甘肃',value: 20 },
	                {name: '山西',value: 80 },
	                {name: '内蒙古',value: 80 },
	                {name: '陕西',value: 80 },
	                {name: '吉林',value: 80 },
	                {name: '福建',value: 80 },
	                {name: '贵州',value: 35 },
	                {name: '广东',value: 35 },
	                {name: '青海',value: 35 },
	                {name: '西藏',value: 35 },
	                {name: '四川',value: 35 },
	                {name: '宁夏',value: 35 },
	                {name: '海南',value: 35 },
	                {name: '台湾',value: 80 },
	                {name: '香港',value: 80 },
	                {name: '澳门',value: 80 }
	            ]
	        }
	    ]
	},

    shopNumOption = {
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
	    color: ['#fc984f'],
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },

	    // x轴刻度
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['06-01','06-02','06-03','06-04','06-05','06-06','06-07','06-08','06-09','06-10'],
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
	        },
	        boundaryGap: true
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
	        	show: false
	        }
	    },
	    // 显示数据
	    series: [
	        {
	            name:'店铺数',
	            type:'line',
				smooth: true,
	            stack: '总量',
	            data:[120, 132, 101, 134, 90, 230, 210,220, 182, 191]
	        }
	    ]
	},

	levelOption = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        },
			backgroundColor: '#fff',//背景颜色（此时为默认色）
			//formatter : 'x:{b0}: y:{c0}<br />{b1}: {c1}' ,
			borderColor : '#666',
			borderWidth : 1,
			textStyle : {
				color : '#666'	
			},
			axisPointer : {
				shadowStyle : {
					color : 'red',
					shadowBlur : 10,
					shadowColor: 'rgba(0, 0, 0, 0.5)',
					shadowOffsetY : 10,
					shadowOffsetY : 50,
					opacity : 0.5
				},
				lineStyle: {
					opacity: 0
				}				
			}			
	    },
	    color: ['#01a6e7', '#1fcfae', '#3876c1', '#fe9f02', '#f35944'],
	    legend: {
	        data: ['第一层级', '第二层级','第三层级','第四层级','第五层级'],
	        formatter: 'aaa {name}',
	        algin: 'left',
	        itemGap: 100,
	        left: 30
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis:  {
	        type: 'value',
	        axisTick: {
	        	lineStyle: {
	        		opacity: 0
	        	}
	        },
	        splitLine: {
	        	lineStyle: {
	        		opacity: 0
	        	}
	        }
	    },
	    yAxis: {
	        type: 'category',
	        data: ['近一月','近三月','近六月','近一年'],
	        axisTick: {
	        	inside: true,
	        	length: 10
	        }
	    },
	    series: [
	        {
	            name: '第一层级',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [320, 302, 301, 334]
	        },
	        {
	            name: '第二层级',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [120, 132, 101, 134]
	        },
	        {
	            name: '第三层级',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [220, 182, 191, 234]
	        },
	        {
	            name: '第四层级',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [150, 212, 330, 410]
	        },
	        {
	            name: '第五层级',
	            type: 'bar',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'insideRight'
	                }
	            },
	            data: [820, 1290, 1330, 1320]
	        }
	    ]
	};

classify.setOption(classifyOption);

// 地域
area.setOption(areaOption);

// 店铺入住数量
shopNum.setOption(shopNumOption);

level.setOption(levelOption);