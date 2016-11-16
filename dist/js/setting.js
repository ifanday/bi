var inputs = $('.setting-list').find('.text:not(:first)'),
    inputsBtn = $('.setting-btns').find('.setting-floor-submit'),
    inputsTips = $('.setting-btns').find('span').eq(0),
    inputsLen = inputs.length,
    dateWrap = $('.setting-date'),
    dateLink = dateWrap.find('a'),
    dateBtn = dateWrap.find('.date-btn'),

    flag = false,
    dateIndex = null,
    inputArr = [],
    _arr = [],
    index;

// 获取当前设置天数索引
dateLink.each(function(i){
    var $t = $(this);
    if($t.hasClass('active')){
        index = dateIndex = i;
    }
});

dateBtn.on('click', function(){
    // 防止重复提交
    if(dateIndex==null || index==dateIndex){
        return false;
    }else{
        // 更新 index;
        index = dateIndex;
    }
});
// 当前索引按钮
$('.setting-date').each(function(){
    var $t = $(this);
    $t.on('click', 'a', function(){
        var _$t = $(this);
        if(_$t.hasClass('active')){
            return;
        }
        dateIndex = _$t.index();
        _$t.addClass('active').siblings().removeClass('active');
    });
});


inputs.each(function(i){
    var $t = $(this);

    if(i%2==1){
        var intVal = $t.val(),
            intVal = intVal==''? intVal:parseInt(intVal);
        inputArr.push(intVal);
        _arr.push(intVal);
    }

    $t.focusout(function(){
        
    });

    $t.on('keydown', function(e){
        var n = e.keyCode;
        if (n > 105 || (n > 57 && n < 96) || n<48 && n!=8) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
    });

    $t.on('keyup', function(e){
        var n = e.keyCode;
        if ((n >= 48 && n <= 57) || (n >= 96 && n <= 105)) {
            var _v = this.value,
                _v = _v==''||_v==0||isNaN(_v)? '':parseInt(_v);
            this.value = _v ;
        }
        var val = $t.val(),
            val = val==''? '':parseInt(val);
        $t.val(val);
        if(i%2==0){
            inputs.eq(i+1).val(val);
        }else{
            inputs.eq(i-1).val(val);
        }

        _arr = [];
        inputs.each(function(j){
            if(j%2==1){
                var intVal = $(this).val(),
                    intVal = intVal==''? intVal:parseInt(intVal);
                _arr.push(intVal);
            }
        });
    });
});

function compareArrVal(arr1, arr2){
    for(var i=0,len=arr1.length;i<len;i++){
        if(arr1[i] != arr2[i]){
            return false;
        }
    }
    return true;
}

function reArrSort(arr){
    for(var i=0,len=arr.length;i<len;i++){
        var txt = inputs.eq(i*2).parent().find('.floor').text().replace(/[:|：]/, '');
        if(arr[i]==''){    
            inputsTips.html('"'+txt+'" 文本框不能为空');
            inputs[i*2].focus();
            return false;
        }
        if(!!arr[i+1] && arr[i]>=arr[i+1]){
            inputsTips.html(function(){
                if(i==0){
                    return '"'+txt+'" 数值必须小于 '+arr[i+1];
                }else{
                    return '"'+txt+'" 数值必须在 '+arr[i-1]+'~'+arr[i+1]+'之间';
                }
            });
            inputs[i*2].focus();
            return false;
        }
    }
    inputsTips.html('');
    return true;
}

inputsBtn.on('click', function(){
    // 未改变
    if(compareArrVal(inputArr, _arr)){
        reArrSort(_arr);
        return false;
    }

    if(reArrSort(_arr)){
        // 成功通过验证   do...

        // 更新数组
        inputArr = [].concat(_arr);
    }else{
        return false;
    }
});