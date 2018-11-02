$js = jQuery.noConflict();

$js(document).ready(function() {
  $js('a[href*=#], #ScrollToTop').on('click', function(e) {
    e.preventDefault();

    //Optionally set a vertical offset value.
    //Postive offset means the top of the screen will be higher.
    //Negative offset means the top of the screen will be lower.
    var offset = 0;

    $js('html, body').animate({
      scrollTop: $js(this.hash).offset().top - offset
    }, 900, 'swing');
  });
});
