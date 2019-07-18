$(document).ready(function(){
// Swiching content functionality
    $('#home').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active')
        $('.visible').removeClass('visible');
        $('.home').addClass('visible')
    });
    $('#about').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active')
        $('.visible').removeClass('visible');
        $('.about').addClass('visible')
    });
    $('#contacts').on('click', function(){
        $('.active').removeClass('active');
        $(this).addClass('active')
        $('.visible').removeClass('visible');
        $('.contacts').addClass('visible')
    });
    /* writeText(); */
});
//Text writing function
/* function writeText () {
    let text = 'some text';
    let element = $('.home');
    let i = 0;
    while (i < text.length) {
        setInterval(() => {
        let cuttedText = text.slice(0,i);
        element.val(cuttedText);
            i++
        }, 500);
    }
} */