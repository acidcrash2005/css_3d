$(function(){
    $('figure').mousemove(function(e){
        var pos = $(this).offset();
        var elem_left = pos.left;
        var elem_top = pos.top;
        
        var x = (e.pageX - elem_left) - $(this).width() / 2;
        var y = (e.pageY - elem_top) - $(this).height() / 2;
        
        $(this).css({
            transform: 'rotateX('+y / 15 * -1+'deg) rotateY('+x / 15 +'deg) translateZ(0px)'
        });
        
       
    });
    
    $('figure').mouseleave(function(e){        
        $(this).css({
            transform: 'rotateX(0deg) rotateY(0deg) translateZ(0px)'
        })
    });
});