var o = document.querySelector('.member-nav'),
    links = o.querySelectorAll('a');

for(var i=0,v;v=links[i++];){
    v.index = i;
    v.onclick=function(){
        this.scroll = this.scroll||document.querySelector(this.getAttribute('href'));

        document.documentElement.scrollTop = document.body.scrollTop = this.scroll.offsetTop+30;
        return false;
    }
}