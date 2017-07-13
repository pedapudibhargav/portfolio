(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(".flip-card").flip({
  axis: 'x',
  trigger: 'click',
  reverse: true
});
