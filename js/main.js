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

$( document ).ready(function() {
    console.log( "ready!" );
    $( ".flip-card" ).each(function( index ) {
      setTimeout(function(){
        $(this).flip({
          axis: 'x'
        });
      }, (index+1)*1000);
    });

});
