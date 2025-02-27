var btn=document.querySelector('.btn');
var menu=document.querySelector('.menu');
btn.addEventListener('click',function(){
    menu.classList.toggle('active');
});
var navlinks=document.querySelector('ul li a');
for(var i=0;i<navlinks.length;i++){
    navlinks[i].addEventListener('click',function()
    {
        menu.classList.remove('active');
    })
}   