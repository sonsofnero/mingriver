jQuery(function($) {

//Sticky Nav
$(window).scroll(function () {
  var $this = $(this),
      $head = $('.sticky-nav');
  if ($this.scrollTop() > 25) {
     $head.addClass('sticky-nav__reveal');
  } else {
     $head.removeClass('sticky-nav__reveal');
  }
});

$('a.mobile-drop').click(function(){
	myDropDown = $(this).next('.nav-dropdown')

	if( myDropDown.is(':visible') ) {
		$(this).removeClass('drop-down-open');
		myDropDown.hide();
	} else {
		myDropDown.fadeIn();
		$(this).addClass('drop-down-open');
	}

	return false;
});

$('.mobile-drop').on('click', function() {
	this.classList.toggle('clicked');
});

// Toggle open and close nav styles on click
$('.mobile-nav-btn').click(function() {
	$('nav.nav-mobile').slideToggle();
});
// Hamburger to X toggle
$('#nav-toggle').on('click', function() {
	this.classList.toggle('active');
});

// Hamburger Animation
$('.mobile-nav-btn').click(function(){
	$("#hamburger").toggleClass("open");
});

$('.sticky-nav-btn').click(function(){
	$(".nav-sticky").toggleClass("nav-sticky__open");
  $(".bg-fade").toggleClass("bg-fade__on");
});

$('.sticky-close').click(function(){
	$(".nav-sticky").toggleClass("nav-sticky__open");
  $(".bg-fade").toggleClass("bg-fade__on");
});

});


window.onscroll = function() {progressBarScroll()};

function progressBarScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

// Styled Select JS
$("select.postform").each(function() {
   var i = $(this),
       e = $(this).children("option").length;
   i.addClass("postform select-hidden"), i.wrap('<div class="select"></div>'), i.after('<div class="postform select-styled"></div>');
   var o = i.next("div.select-styled");
   o.text(i.children("option").eq(0).text());
   for (var t = $("<ul />", {
           class: "select-options"
       }).insertAfter(o), n = 0; n < e; n++) $("<li />", {
       text: i.children("option").eq(n).text(),
       rel: i.children("option").eq(n).val()
   }).appendTo(t);
   var s = t.children("li");
   o.click(function(e) {
       e.stopPropagation(), $("div.select-styled.active").not(this).each(function() {
           $(this).removeClass("active").next("ul.select-options").hide()
       }), $(this).toggleClass("active").next("ul.select-options").toggle()
   }), s.click(function(e) {
       e.stopPropagation(), o.text($(this).text()).removeClass("active"), i.val($(this).attr("rel")), t.hide(), window.location.href = $(this).attr("rel")
   }), $(document).click(function() {
       o.removeClass("active"), t.hide()
   })
});

//Expandable Search
function buttonUp(){
  var valux = $('.sb-search-input--desktop', '.sb-search-input--sticky', '.sb-search-input--mobile').val();
      valux = $.trim(valux).length;

  if(valux !== 0){
    $('.sb-search-submit').css('z-index','99');
  }
  else{
    $('.sb-search-input--desktop', '.sb-search-input--sticky', '.sb-search-input--mobile').val('');
    $('.sb-search-submit').css('z-index','-999');
  }
}

$(document).ready(function(){
  var submitIcon = $('.sb-icon-search');
  var submitInput = $('.sb-search-input--desktop', '.sb-search-input--sticky', '.sb-search-input--mobile');
  var searchBox = $('.sb-search');
  var isOpen = false;

  $(document).mouseup(function(){
      if(isOpen == true){
      submitInput.val('');
      $('.sb-search-submit').css('z-index','-999');
      submitIcon.click();
      }
  });

  submitIcon.mouseup(function(){
      return false;
  });

  searchBox.mouseup(function(){
      return false;
  });

  submitIcon.click(function(){
    if(isOpen == false){
        searchBox.addClass('sb-search-open');
        isOpen = true;
    } else {
        searchBox.removeClass('sb-search-open');
        isOpen = false;
    }
  });
});


// $('.slider').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   responsive: [
//     {
//       breakpoint: 850,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: true,
//       }
//     },
//     {
//       breakpoint: 650,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//       }
//     }
//   ]
// });
