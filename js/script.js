$(function() {
    $('#fullpage').fullpage({
        anchors: ['frontpage', 'order', 'tariffs', 'reviews', 'partners', 'contacts'],
        menu: '.nav',
        resize: false,
        verticalCentered: false,
        afterLoad: function(anchorLink, index) {
            disableArrow(index);
        }
    });

    $('.nav__item--up').on('click', 'a', function() {
        $.fn.fullpage.moveSectionUp();
        return false;
    });

    $('.nav__item--down').on('click', 'a', function() {
        $.fn.fullpage.moveSectionDown();
        return false;
    });

    function disableArrow(index) {

        if(index == 1) {
            console.log(index);
            $('.nav__item--up').addClass('hidden');
            $('.nav__item--down').removeClass('hidden');
        }
        else if(index == 6) {
            console.log(index);
            $('.nav__item--down').addClass('hidden');
            $('.nav__item--up').removeClass('hidden');
        }
        else {
            console.log(index);
            $('.nav__item--up, .nav__item--down').removeClass('hidden');
        }
    }

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

    insertReviews();
});

