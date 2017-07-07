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

//  $(".demoId").dragend({
//    afterInitialize: function() {
//      this.container.style.visibility = "visible";
//    },
//    onSwipeEnd: function() {
//      var first = this.pages[0],
//          last = this.pages[this.pages.length - 1];
//
//      $(".prev, .next").removeClass("deactivated");
//      $(".nav li").removeClass("active");
//
//      if (first === this.activeElement) {
//        $(".prev").addClass("deactivated")
//      };
//
//      if (last === this.activeElement) {
//        // $(".next").addClass("deactivated")
//        //        this.jumpToPage(1);
//      }
//
//      $(".nav li").eq(this.page).addClass("active");
//
//    }
//  });
//
//  $(".prev").click(function() {
//    $(".demoId").dragend("right");
//  });
//
//  $(".next").click(function() {
//    $(".demoId").dragend("left");
//  });
//
//  $(".nav").click(function() {
//    var page = $(event.target).data("page");
//
//    $(".demoId").dragend({
//      scrollToPage: page
//    });
//
//    $(event.target).addClass("active");
//
//  });

    $(".exchange-header__change").click(function() {
       var from = $("#from").html();
       var to = $("#to").html();
       $("#to").text(from);
       $("#from").text(to);
    });

    $(".transac-history__all").click(function() {
        $(".app-footer").toggleClass("show-history");
//        $(".app-footer").css({"top":"0","height":"100%"});
//        $(".transac-history").css({"height":"100%"});
//        $(".transac-history__hide").show();
    });

//    $(".transac-history__all").click(function() {
//        $(".app-footer").css({"top":"0","height":"100%"});
//        $(".transac-history").css({"height":"100%"});
//        $(".transac-history__hide").show();
//    });



//var resim = document.getElementById('ok');
//    var resim = $('.dragend-page');
//    Hammer(resim).on('swipeleft', function(ev){
//    console.log('left: ', ev);
//    $(".prev").click();
//});
//    Hammer(resim).on('swiperight', function(ev){
//    console.log('right: ', ev);
//    $(".next").click();
//});

$('.owl-two .owl-item').each(function(ev){
var $this = $(this);
var mc = new Hammer(this);
    mc.on("swipeleft", function(ev) {
        console.log('left: ', ev);
        $(".owl-one .owl-next").click();
//        $(".owl-next").click();
//        $(".owl1 .owl-item").swipeleft();
      //  return false;
    });
    mc.on("swiperight", function(ev) {
        console.log('right: ', ev);
       $(".owl-one .owl-prev").click();
      //  return false;
    });
});

$('.owl-one .owl-item').each(function(ev){
var $this = $(this);
var mc = new Hammer(this);
   mc.on("swipeleft", function(ev) {
       console.log('left: ', ev);
       $(".owl-two .owl-next").click();
//        return false;
   });
   mc.on("swiperight", function(ev) {
       console.log('right: ', ev);
       $(".owl-one .owl-prev").click();
//        return false;
   });
});

});


/* ========================================================================
 * Bootstrap: dropdown.js v3.3.7
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.7'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

// var myElement = document.getElementsByClassName("dragend-page");
// create a simple instance
// by default, it only adds horizontal recognizers
// var mc = new Hammer(myElement);

// listen to events...
// mc.on("panleft panright tap press", function(ev) {
//     myElement.textContent = ev.type +" gesture detected.";
// });
