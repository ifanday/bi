$(function(){
    var btn = $('.btn-login'),
        user = $('.text-user'),
        pwd = $('.text-pwd'),
        code = $('.text-code'),
        tips = $('.tips'),
        uTips = tips.eq(0),
        pTips = tips.eq(1),
        cTips = tips.eq(2),

        trim = trim || function(s){
            return s.replace(/\s/, '');
        };

    btn.on('click', function(){
        if(trim(user.val())==''){
            uTips.html('用户名不能为空');
            return false;
        }else{
            uTips.html('');
        }

        user.val(trim(user.val()));

        if(pwd.val().length==0){
            pTips.html('密码不能为空');
            return false;
        }else{
            pTips.html('');
        }

        if(trim(code.val())==''){
            cTips.html('验证码不能为空');
            return false;
        }else{
            cTips.html('');
        }

        code.val(trim(code.val()));

    });

});