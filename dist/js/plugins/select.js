
;+function(w, d){
	var Select = function(option){
		this.option = {
			select: '.tit-select',
			name: '.tit-select-name',
			options: '.tit-select-option',
			toggle: 'open',
			active: 'active'
		};

		this.index = null;
		this.activeIndex = null;

		this.extend(this.option, option);
		this.extend(this, this.option);

		this.select = this.getDoms(this.option.select);
		this.name = this.getDoms(this.option.name);
		this.options = this.getDoms(this.option.options);
		this.init();
	}

	Select.prototype = {
		constructor: Select,

		getDoms: function(s){
			return d.querySelectorAll(s);
		},

		addEvent: function(o, t, h){
			o.addEventListener(t, h, false);
            return h;
		},

		hasClass: function(o, s){
		    return new RegExp('(?:^|\\s)'+s+'(?=\\s|$)').test(o.className);
		},

		addClass: function(o, s){
			if(!this.hasClass(o, s)){
				o.className.replace(/\s/, '')==''? o.className=s:o.className+=' '+s;
			}
		},

		removeClass: function(o, s){
		    if(this.hasClass(o, s)) o.className=o.className.replace(new RegExp('(?:^|\\s)'+s+'(?=\\s|$)'), '').replace(/^\s*|\s*$/g, '');
		},

        toggleClass: function(o, s){
        	if(this.hasClass(o, s)){
        		this.removeClass(o, s);
        	}else{
        		this.addClass(o, s);
        	}
        },

        each: function(doms, fn){
        	;[].forEach.call(doms, fn);
        },

		extend: function(o1, o2){
			for(var attr in o2){
				o1[attr] = o2[attr];
			}
		},
		
		init: function(){
			var _this = this;
			var flag = true;
			this.each(this.select, function(ele, i){
				if(flag){
					var aDiv = _this.options[i].querySelectorAll('div');
					_this.each(aDiv, function(div, j){
						if(_this.name[i].innerHTML==div.innerHTML){
							_this.addClass(div, _this.active);
							flag= false;
							return;
						}
					});
				}

				_this.addEvent(ele, 'click', function(e){
					var target = e.target||e.srcElement;
					_this.toggleClass(this, _this.toggle);
					if(_this.index!=i&&typeof _this.index=='number'){
						_this.removeClass(_this.select[_this.index], _this.toggle);
					}
					if(target.className==''){
						_this.name[i].innerHTML = target.innerHTML;
						var eles = target.parentNode.children;
						_this.each(eles, function(e, i){
							_this.removeClass(e, _this.active);
						});				
						_this.addClass(target, _this.active);
						_this.activeIndex = target.index;

						_this.setData&&_this.setData.call(target);
					}else if(target.className==_this.active){

					}
					_this.index = i;

					e.stopPropagation();
				});
			});

			_this.addEvent(d, 'click', function(){
				_this.each(_this.select, function(ele){
					_this.removeClass(ele, _this.toggle);
				});
			});
		}
	}

	var select = function(option){
		return new Select(option);
	}

	window.oS = select();

	// 扩充焦点
	$('.tit-setdata, .changes-list').each(function(){
		var $t = $(this);
		$t.on('click', 'a', function(){
			var _$t = $(this);
			if(_$t.hasClass('active')){
				return;
			}
			_$t.addClass('active').siblings().removeClass('active');
		});
	});

	function setScroll(s){
		var doms = d.querySelectorAll(s);

		if(doms.length){
			;[].forEach.call(doms, function(v){
				var oTh = v.querySelector('thead'),
					oTb	= v.querySelector('tbody');
				if(oTb.clientHeight<v.clientHeight-oTh.clientHeight){
					oS.removeClass(v, s.substr(1));
				}
			});
		}
	}

	w.addEventListener('load', function(){
		setScroll('.fixed-head');
	}, false);

	

}(window, document);