;+function(w, d){
	var oLabels = d.querySelector('#label'),
		oChanges = d.querySelectorAll('.changes-list[data-type]');

	;[].forEach.call(oChanges, function(ele){
		ele.addEventListener('click', function(e){
			var e = e||w.event,
				target = e.srcElement||e.target,
				type = this.getAttribute('data-type');

			if(target.tagName.toLowerCase()=='a'){
				var txt = target.innerHTML,
					oLabel = oLabels.querySelector('span[data-type="'+type+'"]');

				if(txt!='全部'){
					
					if(oLabel){
						if(oLabel.innerHTML==txt){
							return;
						}else{
							oLabel.innerHTML = txt;
						}
					}else{
						var oSpan = d.createElement('span');
						oSpan.setAttribute('data-type', type);
						oSpan.innerHTML = txt;
						oLabels.appendChild(oSpan);
					}
				}else{
					if(oLabel) oLabels.removeChild(oLabel);
					return;
				}
			}
		}, false);
	});

	// 圆环角度
	var oBox = document.querySelector('#data-scale'),
        oHead = document.querySelector('head');

    w.setOStyle = function(num){
        var oStyle = document.querySelector('#cssText'),
            deg = parseInt(num/50*180),
            scale = parseInt(oBox.dataset.scale),
            speedL = speedR = 0;

        if(isNaN(scale)){
            if(deg>180){
                speedL = 0.5;
            }
        }else if(num>scale){
            if(scale>50){
                speedL=speedR=0;
            }else{
                speedL = 0.5;
                speedR = 0;
            }
        }else{
            if(scale>50){
                speedL = 0;
                speedR = 0.5;
            }else{
                speedL=speedR=0;
            }
        }

        oBox.dataset.scale = num+'%';
        if(!oStyle){
            oStyle = document.createElement('style');
            oStyle.id = 'cssText';
            oHead.appendChild(oStyle);
        }
        insertRule(oStyle, {
            '.member-mask-l:before': 'transform:rotate('+(deg>=180?180:deg)+'deg);transition-delay:'+speedR+'s !important;',
            '.member-mask-r:before': 'transform:rotate('+(deg>180?deg-180:0)+'deg);transition-delay:'+speedL+'s !important;'
        }, 0);
    }

    function insertRule(sheet, options, position) {
        var str = '';
        for(var attr in options)str+=attr+'{'+options[attr]+'}';
        sheet.styleSheet? sheet.styleSheet.cssText=str:sheet.innerHTML=str;
    }

    // 初始化比例
    setOStyle(100);

    // 查看画像
    var memberTable = d.querySelector('.member-table'),
    	memberPic = d.querySelector('#layer-member');

    memberTable.addEventListener('click', function(e){
    	var e = e||w.event,
				target = e.srcElement||e.target,
				type = target.getAttribute('data-type');

		if(target.tagName.toLowerCase()=='a' && type){
			memberPic.className = type;
		}

		e.stopPropagation? e.stopPropagation():e.cancelBubble=true;
    }, false);

    memberPic.addEventListener('click', function(e){
    	memberPic.className = '';
    	e.stopPropagation? e.stopPropagation():e.cancelBubble=true;
    }, false);
    
}(window, document);


var addMember = echarts.init(document.querySelector('#member-echarts')),
	
	classify = echarts.init(document.querySelector('#classify-echarts')),

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
            data: ['普通会员', 'VIP会员', '高级会员', '至尊会员']
        },
        series: [{
            name: '',
            type: 'pie',
            //radius : '55%',
            radius: ['30%', '80%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                    formatter: "{b} : {c} \n {d}%",
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
                name: 'VIP会员',
                itemStyle: {
                    normal: {
                        color: '#b6b6b6',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        color: '#b6b6b6',
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

            }, {
                value: 535,
                name: '至尊会员',
                itemStyle: {
                    normal: {
                        color: '#ffa003',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    emphasis: {
                        color: '#ffa003',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }],

        }]
    },

	num;

addMember.setOption(addMemberOption);
classify.setOption(classifyOption);
