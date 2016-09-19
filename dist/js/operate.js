;+function(w, d){
	// 复选框
	var checkedWrap = d.querySelector('.checkboxs'),
		checkboxs = checkedWrap.querySelectorAll('input[type="checkbox"]'),
		checkAll = checkedWrap.querySelector('#checkbox-all');

	;[].forEach.call(checkboxs, function(v){
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
	};

flowDeal.setOption(flowDealOption);