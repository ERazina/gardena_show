$(function() {

    $(window).on('scroll', function() {
        event.preventDefault();
        /* Act on the event */

        var _height = $(window).height(),
            _mHeight = _height / 2,
            _item = $('.js-greener'),
            _scrolled = $(window).scrollTop(),
            _center = _scrolled + _mHeight;

        _item.each(function () {
            
            var _top = $(this).offset().top;

            if(_top <= _center) {

                $(this).addClass('greenny');
            } else {

                $(this).removeClass('greenny');
            }
        })

         //console.log('скролл: '+ _scrolled,'Высота экрана '+ _height,'середина '+ _mHeight);
    });
})
