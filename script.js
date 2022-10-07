$(document).ready(function(){
    $("#blocks").click(function(event){
        let clicked = event.target.closest('.limg');       
        if (!clicked) return;
        event.preventDefault();
        largeimg.src = clicked.src;
        largeimg.alt = clicked.alt;
        largeimg.title = clicked.title;
    });
});
