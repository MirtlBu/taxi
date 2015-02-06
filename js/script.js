$(function() {

    var reviews = [
        {
            name: 'Анатолий Вершинин',
            text: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin',
            url: 'img/avatar-2.png'
        },
        {
            name: 'Мария Иванова',
            text: 'One morning, when Gregor Samsa woke from troubled dreams.',
            url: 'img/avatar-1.png'
        }
    ]

    $('#fullpage').fullpage({
        anchors: ['frontpage', 'order', 'tariffs', 'reviews', 'partners', 'contacts'],
        menu: '.nav',
        resize: false,
        verticalCentered: false,
        afterLoad: function(anchorLink, index) {
            disableArrow(index);
        },
        afterRender: function() {
            disableArrow(1);
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
            $('.nav__item--up').addClass('hidden');
            $('.nav__item--down').removeClass('hidden');
        }
        else if(index == 6) {
            $('.nav__item--down').addClass('hidden');
            $('.nav__item--up').removeClass('hidden');
        }
        else {
            $('.nav__item--up, .nav__item--down').removeClass('hidden');
        }
    }

    function renderReviews(item) {
        return $('<li/>', {'class': 'review__item'})
            .append($('<div/>', {'class': 'advise advise--reviews'})
                .append($('<img/>', {'src': item.url}))
                .append($('<div/>', {'class': 'text'})
                    .append($('<span/>').text(item.text))
                    .append($('<span/>').text(item.name)))
            )
    }

    var counter = 1;

    function insertReviews(index) {
        $('.review').empty();
        for(var i = 0; i < 4; i++) {
            $('.review').append(renderReviews(index));
        }
    }

    function showMore() {
        $('.spinner').addClass('spinner--visible');
        setTimeout(function() {
            counter = 1 - counter;
            insertReviews(reviews[counter]);
            $('.spinner').removeClass('spinner--visible');
        }, 1000);
    }

    $('.more').on('click', 'span', function() {
        showMore();
    });

    insertReviews(reviews[1]);

    $(window).on('resize', function() {
        $.fn.fullpage.reBuild();
    });
});

