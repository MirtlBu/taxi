$(function() {
    $('#fullpage').fullpage({
        anchors: ['frontpage', 'order', 'tariffs', 'reviews', 'partners', 'contacts'],
        menu: '.nav',
        resize: false,
        verticalCentered: false
    });

    function renderReviews() {
        return $('<li/>', {'class': 'review__item'})
            .append($('<div/>', {'class': 'advise advise--reviews'})
                .append($('<img/>', {'src': 'img/avatar.png'}))
                .append($('<div/>', {'class': 'text'})
                    .append($('<span/>').text('One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin'))
                    .append($('<span/>').text('Анатолий Вершинин')))
            )
    }

    function insertReviews() {
        for(var i = 0; i < 4; i++) {
            $('.review').append(renderReviews());
        }
    }

    function showMore() {
        $('.spinner').addClass('spinner--visible');
        setTimeout(function() {
            insertReviews();
            $('.spinner').removeClass('spinner--visible');
        }, 1000);
    }

    $('.more').on('click', 'span', function() {
        showMore();
    });

    $('.nav').on('click', 'a', function() {
        $('.nav').find('li').removeClass('nav__item--active');
        $(this).closest('li').addClass('nav__item--active');
    });

    insertReviews();

    // $('a[href*=#]:not([href=#])').click(function() {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //       var target = $(this.hash);
    //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //       if (target.length) {
    //         $('html,body').animate({
    //           scrollTop: target.offset().top
    //         }, 1000);
    //         return false;
    //       }
    //     }
    // });
});

