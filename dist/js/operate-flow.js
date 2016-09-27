var sexArr = ['#3498db', '#f35944', '#cbcbcb'],
    fArr = ['#3498db', '#15bfce', '#f35944'],
	cArr = ['#3498db', '#ffb10b', '#15bfce', '#26c281', '#cbcbcb'],
	endArr = ['#ffb10b', '#3498db', '#cbcbcb'];

var itemsSex = echarts.init(document.querySelector('#items-sex')),
	itemsLevel = echarts.init(document.querySelector('#items-level')),
	itemsAge = echarts.init(document.querySelector('#items-age')),
	itemsNew = echarts.init(document.querySelector('#items-new')),

    area = echarts.init(document.querySelector('#area-echarts')),

    itemsFrom = echarts.init(document.querySelector('#items-from')),
    itemsFromLink = echarts.init(document.querySelector('#items-from-link')),
	itemsFromLinkView = echarts.init(document.querySelector('#items-from-link-view')),

	itemsSexOption = {
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
            l: 'center',
            top: '77%',
            data: ['男', '女', '未知']
        },
        color: sexArr,
        series: [{
            name: '',
            type: 'pie',
            //radius : '55%',
            radius: ['40%', '90%'],
            center: ['50%', '37%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{c}",
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
                name: '男',
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
                name: '女',
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
                name: '未知',
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

    itemsLevelOption = {
        title: {
            subtext: '',
            x: 'left'
        },
        /*tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)",
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
            l: 'center',
            top: '77%',
            data: ['普通会员', 'VIP会员', '高级会员', '至尊会员', '未知']
        },
        color: cArr,
        series: [{
            name: '',
            type: 'pie',
            //radius : '55%',
            radius: ['40%', '90%'],
            center: ['50%', '37%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{c}",
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
                name: '普通会员',
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
                name: 'VIP会员',
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
                name: '高级会员',
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
                name: '至尊会员',
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
                name: '未知',
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

    itemsAgeOption = {
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
            l: 'center',
            top: '77%',
            data: ['19岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上']
        },
        color: cArr,
        series: [{
            name: '',
            type: 'pie',
            //radius : '55%',
            radius: ['40%', '90%'],
            center: ['50%', '37%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{c}",
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
                name: '19岁以下',
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
                name: '20-29岁',
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
                name: '30-39岁',
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
                name: '40-49岁',
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
                name: '50岁以上',
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

    itemsNewOption = {
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
            l: 'center',
            top: '77%',
            data: ['新会员', '老会员', '未知']
        },
        color: endArr,
        series: [{
            name: '',
            type: 'pie',
            //radius : '55%',
            radius: ['40%', '90%'],
            center: ['50%', '37%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{c}",
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
                name: '新会员',
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
                name: '老会员',
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
                name: '未知',
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
			color:  ['#3498db', '#47aaec', '#6cc1fa', '#d8e6ef'],
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

    itemsFromOption = {
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
            l: 'center',
            bottom: '7%',
            data: ['PC端', '无线端']
        },
        color: sexArr,
        series: [{
            name: '',
            type: 'pie',
            //radius : '55%',
            radius: ['40%', '90%'],
            center: ['50%', '45%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{c}",
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
                name: 'PC端',
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
                name: '无线端',
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

            }]
        }]
    },

    itemsFromLinkOption = {
        title: {
            subtext: '',
            x: 'left'
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
        color: fArr,
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
                name: '直接访问',
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
                name: '外部链接',
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
                name: '搜索引擎',
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

    itemsFromLinkViewOption = {
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
            boundaryGap: false,
            data: ['0','1','2','3', '4', '5', '6', '7', '8', '9', '10'],
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
        series: [
            {
                name:'直接访问',
                type:'line',
                smooth: true,
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210,220, 182, 191, 330]
            },
            {
                name:'外部链接',
                type:'line',
                smooth: true,
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310, 234, 290, 330, 330]
            },
            {
                name:'搜索引擎',
                type:'line',
                smooth: true,
                stack: '总量',
                data:[150, 232, 234, 290, 330, 310, 201, 290, 330, 310, 330]
            }
            
        ]
    },


    num;

itemsSex.setOption(itemsSexOption);
itemsLevel.setOption(itemsLevelOption);
itemsAge.setOption(itemsAgeOption);
itemsNew.setOption(itemsNewOption);
itemsNew.setOption(itemsNewOption);
area.setOption(areaOption);
itemsFrom.setOption(itemsFromOption);
itemsFromLink.setOption(itemsFromLinkOption);
itemsFromLinkView.setOption(itemsFromLinkViewOption);