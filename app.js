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

    let textArray = [
        'This is first string to write',
        'This is second string to write',
        'This is the third string to write'
    ];
    writeText(textArray, 150, 3000)
});
//Text writing function
function writeText(array, stepTime, swichTime) {
    let i = 0;
    let step = 0;
    let textArray = array;
    let text = textArray[i];
    function countLength() {
        let length = text.length;
        if(step < length) {
            step++;
            $('.home').html(text.slice(0,step));
            if(text.charAt(step) === ' ') {
                countLength();
            } else {
                setTimeout(() => {
                    countLength();
                }, stepTime);
            }
        } else {
            step = 0
            i++
            if (i == textArray.length) {
                i = 0;
            }
            text = textArray[i]
            setTimeout(() => {countLength()}, swichTime)
        }
    }
    countLength();
}