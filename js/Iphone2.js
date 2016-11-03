jQuery(document).ready(function(){

    
$('.barreAnimation').hide(0).delay(1000).show(2000);



$('.pointAnimation').hide(0).delay(2000).show(3000);
});



$(document).ready(function($) {

  $(window).on('scroll', function() {

    //ADD .TIGHT
    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
      $('body').addClass('tight');
    } else {
      $('body').removeClass('tight');
    }
  });

  //BACK TO PRESENTATION MODE
  $("html").on("click", "body.tight .wrapper", function() {
    $('html, body').animate({
      scrollTop: $('.wrapper').outerHeight() - $(window).height()
    }, 500);
  });

});