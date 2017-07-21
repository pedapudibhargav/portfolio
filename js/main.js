(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.tooltipped').tooltip({delay: 50});
    $('.modal').modal();

    // Select all links with hashes
      $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
          // On-page links
          if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
          ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                  $target.focus(); // Set focus again
                };
              });
            }
          }
        });
     $('.proj-preview').click(function(event){
       console.log("Updating preview video"+$(this).attr("data-url"));
       $("#proj-mdl-iframe").attr('src',$(this).attr("data-url"));
     })
  });
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
        $( ".flip-card:eq( "+Math.random() * (7 - 0) + 0 +")" ).click();
          if(ct < 3)
            {
              randomTiles();
              ct++;
            }
        },200);

    };
});
