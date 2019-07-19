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
    writeText()
});
//Text writing function
function writeText() {
    let textArray = [
        'This is first string to write',
        'This is second string to write',
        'This is the third string to write'
    ];
    let i = 0;
    let text = textArray[i];
    let step = 0;
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
                }, 300);
            }
        } else {
            step = 0
            i++
            if (i == textArray.length) {
                i = 0;
            }
            text = textArray[i]
            countLength();
        }
    }
    countLength();
}