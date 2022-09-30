$(document).ready(function () {
    $('.slide').first().addClass('active');
    $('.slide').hide();
    $('.active').show();

    $('#btn-right').click(function () {

        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        }
        else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut();
        $('.active').fadeIn();

    });

    $('#btn-left').click(function () {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        }
        else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut();
        $('.active').fadeIn();
    });

});