$(document).ready(function(){

    var html = $("html, body");

    $("#partners").on("click", function(){
        html.animate({scrollTop: $(".footer")[0].offsetTop}, '1000');
        if (window.innerWidth < 768) {
            html.animate({scrollTop: $(".footer")[0].offsetTop + 200}, '1000');
            $(".navigation-button").fadeIn();
            $(".navigation").fadeOut();
        }   
    });
    $("#contacts").on("click", function(){
        html.animate({scrollTop: $(".contacts").offset().top}, '1000');
        if (window.innerWidth < 768) {
            $(".navigation-button").fadeIn();
            $(".navigation").fadeOut();
        }
    }); 
    $("#schedule").on("click", function(){
        $(".schedule-wrapper").fadeIn();
        if (window.innerWidth < 768) {
            $(".navigation-button").fadeIn();
            $(".navigation").fadeOut();
        }
    });
    $(".close-button").on("click", function(){
        $(".schedule-wrapper").fadeOut();
    });
    $("#team").on("click", function(){
        html.animate({scrollTop: $(".team").offset().top}, '1000');
        if (window.innerWidth < 768) {
            $(".navigation-button").fadeIn();
            $(".navigation").fadeOut();
        }
    });
    $("#about").on("click", function(){
        html.animate({scrollTop: $(".about").offset().top}, '1000');
        if (window.innerWidth < 768) {
            $(".navigation-button").fadeIn();
            $(".navigation").fadeOut();
        }
    });
    $(".navigation-button").on("click", function(){
        $(".navigation-button").css({ display : "none"})
        $(".navigation").slideDown();
    });
    $("#competitors").on("click", function() {
        $("#competitors").css({ display : "none"})
        $(".competitors-schedule").css({ display : "block"})
        $("#preparatory, #school").css({ display : "block"})
        $(".preparatory-schedule, .school-schedule").css({ display : "none"})
    });
    $("#preparatory").on("click", function() {
        $("#preparatory").css({ display : "none"})
        $(".preparatory-schedule").css({ display : "block"})
        $("#competitors, #school").css({ display : "block"})
        $(".competitors-schedule, .school-schedule").css({ display : "none"})
    });
    $("#school").on("click", function() {
        $("#school").css({ display : "none"})
        $(".school-schedule").css({ display : "block"})
        $("#preparatory, #competitors").css({ display : "block"})
        $(".competitors-schedule, .preparatory-schedule").css({ display : "none"})
    });
});