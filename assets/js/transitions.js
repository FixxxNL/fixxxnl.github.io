$(function () {

    $('.js-replace').fadeIn(600);

    $('[data-transition]').on('click', function(e) {
        e.preventDefault();

        var href = $(this).attr("href");

        // Fade out main content
        $('.js-replace').fadeOut(200, function () {
            window.location = href;
        });

        $('[data-menu]').fadeOut(200);
	});

});
