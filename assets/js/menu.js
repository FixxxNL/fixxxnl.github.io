$(document).ready(function() {
    $('[data-menu-open]').on('click', function(e) {
        e.preventDefault();
        $('[data-menu]').fadeIn(100);
    });
    $('[data-menu-close]').on('click', function(e) {
      e.preventDefault();
      $('[data-menu]').fadeOut(100);
    });
});
