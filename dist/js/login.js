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

;+function(w,  d){
    if(!('placeholder' in document.createElement('input'))){
        function Placeholder(o){
            this.doms = d.querySelectorAll(o);
            this.init();
        }

        Placeholder.prototype = {
            constructor: Placeholder,

            createNode: function(){
                var self = this;
                this.each(self.doms, function(v){
                    if(v.flag) return;
                    v.flag = true;
                    var oB = d.createElement('b'),
                        oParent = v.parentNode,
                        txt = v.getAttribute('placeholder');

                    if(self.getStyle(oParent, 'position')=='static'){
                        oParent.style.position = 'relative';
                    }

                    if(self.getStyle(v, 'position')=='static'){
                        v.style.cssText = 'position:relative; z-index:2;';
                    }

                    var w = v.clientWidth,
                        h = v.clientHeight,
                        l = v.offsetLeft,
                        t = v.offsetTop,
                        fz = self.getStyle(v, 'fontSize');

                    oB.style.cssText = 'position:absolute; width:'+w+'px; height:'+h+'px; left:'+l+'px; top:'+t+'px; font-size:'+fz+'; line-height:'+h+'px; color:#999; z-index: 1';
                    oB.innerHTML = txt;
                    oParent.appendChild(oB);

                    v.onfocus = function(){
                        oB.style.display = 'none';
                    }
                    v.onblur = function(){
                        var _t = this.value;
                        console.info(txt);
                        if(_t.replace(/\s/g, '')==''||_t==txt){
                            oB.style.display = 'block';
                        }
                    }
                });
            },

            getStyle: function(o, k){
                return o.currentStyle ? o.currentStyle[k] : getComputedStyle(o, false)[k];
            },

            each: function(o, fn){
                [].forEach.call(o, fn);
            },

            init: function(){
                this.createNode();
            }
        }

        new Placeholder('.text-user');
        new Placeholder('.text-pwd');
    }

}(window, document);