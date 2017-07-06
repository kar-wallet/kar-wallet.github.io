$(function() {
  // $( ".currency-header" ).scrollLeft( scr );
  //
  // var scr = 120;
  //
  // $(".currency-header__item").on("swipeleft",function(){
  //   $( ".currency-header" ).scrollLeft( scr );
  //   scr += 120;
  //   console.log(scr);
  // });
  //
  //
  // $(".currency-header__item").on("swiperight",function(){
  //   // $(".currency-header").animate({ scrollLeft: $(this).scrollLeft(120) }, duration);
  //   $( ".currency-header" ).scrollLeft( scr );
  //   scr -= 120;
  //   console.log(scr);
  // });
  // $("p").on("swiperight",function(){
  //   alert("You swiped right!");
  // });
  $(".next").click(function(){
    $(".owl-next").click();
  });

  $(".prev").click(function(){
    $(".owl-prev").click();
  });

  $(".main-container__exchange").click(function(){
    $(".main-screen").hide();
    $(".exchange-screen").show();
    $(".app-footer").hide();
  });

  $(".exchange-content__reset").click(function(){
    $(".exchange-screen").hide();
    $(".app-footer").show();
    $(".main-screen").show();
  });

  $(".demoId").dragend({
    afterInitialize: function() {
      this.container.style.visibility = "visible";
    },
    onSwipeEnd: function() {
      var first = this.pages[0],
          last = this.pages[this.pages.length - 1];

      $(".prev, .next").removeClass("deactivated");
      $(".nav li").removeClass("active");

      if (first === this.activeElement) {
        $(".prev").addClass("deactivated")
      };

      if (last === this.activeElement) {
        // $(".next").addClass("deactivated")
        this.jumpToPage(1);
      }

      $(".nav li").eq(this.page).addClass("active");

    }
  });

  $(".prev").click(function() {
    $(".demoId").dragend("right");
  });

  $(".next").click(function() {
    $(".demoId").dragend("left");
  });

  $(".nav").click(function() {
    var page = $(event.target).data("page");

    $(".demoId").dragend({
      scrollToPage: page
    });

    $(event.target).addClass("active");

  });



var resim = document.getElementById('ok');
Hammer(resim).on('swipeleft', function(ev){
    console.log('left: ', ev);
    $(".prev").click();
});
Hammer(resim).on('swiperight', function(ev){
    console.log('left: ', ev);
    $(".next").click();
});
    

    
//var indexBeforeChange = -1;
//$(function () {
//    if ($('#slider .item').length > 1) {
//        $('#slider').owlCarousel({
//            onDrag: slideBeforeChange,
//            onTranslated: slideChanged
//        });
//    }
//});
//function slideBeforeChange(event) {
//    indexBeforeChange = event.page.index;
//    console.log('indexBeforeChange: ' + indexBeforeChange);
//}
//function slideChanged(event) {
//    var indexAfterChange = event.page.index;
//    if (indexAfterChange != indexBeforeChange) {
//        console.log('Slide changed, indexAfterChange: ' + indexAfterChange);
//    } else {
//        console.log('Slide did not change');
//    }
//}
//    
    
//var owl = $('.nonloop').data('owlCarousel');
//owl.on("drag.owl.carousel", function (event) {
//    console.log(event.relatedTarget.state.direction);
//});
    
});

// var myElement = document.getElementsByClassName("dragend-page");
// create a simple instance
// by default, it only adds horizontal recognizers
// var mc = new Hammer(myElement);

// listen to events...
// mc.on("panleft panright tap press", function(ev) {
//     myElement.textContent = ev.type +" gesture detected.";
// });
