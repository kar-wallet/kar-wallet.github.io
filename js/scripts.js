$(function() {
  $( ".currency-header" ).scrollLeft( scr );

  var scr = 120;

  $(".currency-header__item").on("swipeleft",function(){
    $( ".currency-header" ).scrollLeft( scr );
    scr += 120;
    console.log(scr);
  });


  $(".currency-header__item").on("swiperight",function(){
    // $(".currency-header").animate({ scrollLeft: $(this).scrollLeft(120) }, duration);
    $( ".currency-header" ).scrollLeft( scr );
    scr -= 120;
    console.log(scr);
  });
  // $("p").on("swiperight",function(){
  //   alert("You swiped right!");
  // });

});
