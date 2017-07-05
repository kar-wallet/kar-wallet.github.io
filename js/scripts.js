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
        $(".next").addClass("deactivated")
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

  // $("#demo").dragend({
  //   afterInitialize: function() {
  //     this.container.style.visibility = "visible";
  //   },
  //   onSwipeEnd: function() {
  //     var first = this.pages[0],
  //         last = this.pages[this.pages.length - 1];
  //
  //     $(".prev, .next").removeClass("deactivated");
  //     $(".nav li").removeClass("active");
  //
  //     if (first === this.activeElement) {
  //       $(".prev").addClass("deactivated")
  //     };
  //
  //     if (last === this.activeElement) {
  //       $(".next").addClass("deactivated")
  //     }
  //
  //     $(".nav li").eq(this.page).addClass("active");
  //
  //   }
  // });
  //
  // $(".prev").click(function() {
  //   $("#demo").dragend("right");
  // });
  //
  // $(".next").click(function() {
  //   $("#demo").dragend("left");
  // });
  //
  // $(".nav").click(function() {
  //   var page = $(event.target).data("page");
  //
  //   $("#demo").dragend({
  //     scrollToPage: page
  //   });
  //
  //   $(event.target).addClass("active");
  //
  // });

});
