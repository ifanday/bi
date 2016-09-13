;+function(w, d){
	// 复选框
	var checkedWrap = d.querySelector('.checkboxs'),
		checkboxs = checkedWrap.querySelectorAll('input[type="checkbox"]'),
		checkAll = checkedWrap.querySelector('#checkbox-all');

	[].forEach.call(checkboxs, function(v){
		v.addEventListener('click', function(){
			if(this.checked){
				if(v.id=='checkbox-all'){
					removeCheck(checkboxs);
					this.checked = true;
				}else{
					checkAll.checked = false;
				}
			}else{

			}
		}, false);
	});

	function removeCheck(obj){
		[].forEach.call(obj, function(v){
			v.checked = false;
		});
	}

}(window, document);

var flowDeal = echarts.init(document.querySelector('#flow-echarts')),

	shopNum = echarts.init(document.querySelector('#shop-echarts')),

	addMember = echarts.init(document.querySelector('#member-echarts')),

	onlineShop = echarts.init(document.querySelector('#online-echarts')),

	flowDealOption = {
		/*
		dataZoom: [
	        {
	            type: 'slider',
	            xAxisIndex: 0,
	            start: 0,
	            end: 20
	        },
	        {
	            type: 'inside',
	            xAxisIndex: 0,
	            start: 10,
	            end: 60
	        },
			{
	            type: 'slider',
	            yAxisIndex: 0,
	            start: 0,
	            end: 100
	        },
	        {
	            type: 'inside',
	            yAxisIndex: 0,
	            start: 30,
	            end: 80
	        }
	    ],

	    toolbox: {
	        feature: {
	            saveAsImage: {}
	        }
	    },

	    */
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
	    color: ['#6cc749', '#00c6e7', '#d1885b', '#61a0a8'],  
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
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
	    series: [
	        {
	            name:'人均浏览量',
	            type:'line',
				smooth: true,
	            stack: '总量',
	            data:[120, 132, 101, 134, 90, 230, 210,220, 182, 191]
	        },
	        {
	            name:'平均停留时间',
	            type:'line',
				smooth: true,
	            stack: '总量',
	            data:[220, 182, 191, 234, 290, 330, 310, 234, 290, 330]
	        },
	        {
	            name:'访客量',
	            type:'line',
				smooth: true,
	            stack: '总量',
	            data:[150, 232, 234, 290, 330, 310, 201, 290, 330, 310]
	        },
	        {
	            name:'浏览量',
	            type:'line',
				smooth: true,
	            stack: '总量',
	            data:[320, 332, 301,150, 232, 234, 290, 334, 390, 330]
	        },
	        
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

	addMemberOption = {
	    dataZoom: [
	        {
	            type: 'inside',
	            xAxisIndex: 0,
	            start: 0,
	            end: 20,
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
	   
		color: ['#37e481'],
	   
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: true,
	        data: ['06-1','06-2','06-3','06-4','06-5','06-6','06-7','06-8','06-9','06-10','06-11','06-12','06-13','06-14','06-15','06-16','06-17','06-18','06-19','06-20','06-21','06-22','06-23','06-24','06-25','06-26','06-27','06-28','06-29','06-30'],
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
	        },
	    },
	    series: [
	        {
	            name:'新增会员',
	            type:'line',
	            stack: '总量',
				//smooth: true,
				symbol:'emptyCircle',
	            data:[120, 132, 101, 134, 90, 230, 210,220, 182, 191, 234,220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 332, 301,150, 232, 101, 134, 90, 230],
				lineStyle : {
					normal : {
						color: '#65AAC3'	
					}
				}
				
	        }
	        
	    ]
	},

	onlineShopOption = {
	    dataZoom: [
	        {
	            type: 'inside',
	            xAxisIndex: 0,
	            start: 0,
	            end: 20,
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
	   
		color: ['#37e481'],
	   
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: true,
	        data: ['06-1','06-2','06-3','06-4','06-5','06-6','06-7','06-8','06-9','06-10','06-11','06-12','06-13','06-14','06-15','06-16','06-17','06-18','06-19','06-20','06-21','06-22','06-23','06-24','06-25','06-26','06-27','06-28','06-29','06-30'],
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
	        },
	    },
	    series: [
	        {
	            name:'在线商品',
	            type:'line',
	            stack: '总量',
				//smooth: true,
				symbol:'emptyCircle',
	            data:[120, 132, 101, 134, 90, 230, 210,220, 182, 191, 234,220, 182, 191, 234, 290, 330, 310, 101, 134, 90, 230, 332, 301,150, 232, 101, 134, 90, 230],
				lineStyle : {
					normal : {
						color: '#65AAC3'	
					}
				}
				
	        }
	        
	    ]
	};


// 流量交易趋势
flowDeal.setOption(flowDealOption);

// 店铺入住数量
shopNum.setOption(shopNumOption);

// 新增会员
addMember.setOption(addMemberOption);

// 在线商品
onlineShop.setOption(onlineShopOption);