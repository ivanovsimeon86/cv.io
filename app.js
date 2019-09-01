$(document).ready(function(){

    var html = $("html, body");

    $("#partners").on("click", function(){
        html.animate({scrollTop: $(".footer")[0].offsetTop}, '1000');
    });
    $("#contacts").on("click", function(){
        html.animate({scrollTop: $(".contacts").offset().top - $(".navigation").height()}, '1000');
    }); 
    $("#schedule").on("click", function(){
        $(".schedule-wrapper").fadeIn();
    });
    $(".close-button").on("click", function(){
        $(".schedule-wrapper").fadeOut();
    });
    $("#team").on("click", function(){
        html.animate({scrollTop: $(".team").offset().top - $(".navigation").height()}, '1000');
    });
    $("#about").on("click", function(){
        html.animate({scrollTop: $(".about").offset().top - $(".navigation").height()}, '1000');
    });
});