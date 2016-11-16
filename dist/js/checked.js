/**
 * [loadCheck 获取加载时已选中的复选框]
 * @Author   cuke
 * @DateTime 2016-09-30
 * @param    {string}   id 或者 class 唯一标识符
 * @param    {string}   默认值为 id
 * @return   {array}    存储 key 的数组       
 */
function loadCheck(str, key){
    var o = document.querySelector(str),
        arr = [],
        key = key||'id',
        oC = o.querySelectorAll('input[type="checkbox"]');

        for(var i=0,v;v=oC[i++];){
            if(v.checked){
                arr.push(v.id);
            }
        }
        return arr;
}


var arr = loadCheck('.checkboxs');