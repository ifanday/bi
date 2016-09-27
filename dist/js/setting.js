var inputs = $('.setting-list').find('.text'),
    inputsBtn = $('.setting-btns').find('.setting-floor-submit'),
    inputsLen = inputs.length,
    dateWrap = $('.setting-date'),
    dateLink = dateWrap.find('a'),
    dateBtn = dateWrap.find('.date-btn'),


    flag = false,
    dateIndex = null,
    inputArr = [],
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
    $t.focusout(function(){

        if(i==0){

        }else if(i==inputsLen){

        }else if(i%2==0){
            console.info(i);
        }else{

        }
    });

    $t.on('keydown', function(e){
        var n = e.keyCode;
        console.info(n);
        if (n > 105 || (n > 57 && n < 96) || n<48 && n!=8) {
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
        }
    });

    $t.on('keyup', function(e){
        var n = e.keyCode;
        if ((n >= 48 && n <= 57) || (n >= 96 && n <= 105)) {
            var _v = parseInt(this.value);
            this.value = _v == 0 ? '' : _v;
        }
    });
});
