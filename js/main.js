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
      var curtTile = $(this);
      setTimeout(function(){
        console.log("set time out triggered");
        $(curtTile).click();
        if(index == 6)
        {
          randomTiles();
        }
      }, (index + 1)*200);
    });
    var ct = 0;
    var randomTiles = function(){
      setTimeout(function(){
        $( ".flip-card:eq( "+Math.random() * (7 -0) + 0; +")" ).click();
          if(ct < 3)
            {
              randomTiles();
              ct++;
            }
        },200);

    };
});
