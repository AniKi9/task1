$(document).ready(function(){  
    let pos = 0;
    $(window).scroll(function(){
       let now = $(window).scrollTop();
       if (now > 100 && now > pos){
           $(".header").fadeOut(500);
           pos = now;
       } 
       if (now < pos - 100){
           $(".header").fadeIn(450);
           pos = now;
       }
       return false;
    });
});