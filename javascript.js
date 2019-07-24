$(document).ready(function(){
    //$('.slider').bxSlider();
    $('.bxslider').bxSlider({
        auto:true,
        speed:500,
        autoControls:true,
        stopAutoOnClick:true,
        pager:true,
        pagerType:'short',
        //slideWidth:100,
        mode:'vertical',
        randomStart:true,
        infiniteLoop:false
    });
});

