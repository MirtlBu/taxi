$(function() {
    $('#fullpage').fullpage();

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
    })

    insertReviews();
});