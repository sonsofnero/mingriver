jQuery(function($) {

$(window).load(function(){
     $('.loader').fadeOut();
});

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

//Scroll To
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top-50 }, 1000);
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


// window.onscroll = function() {progressBarScroll()};
//
// function progressBarScroll() {
//   var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//   var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   var scrolled = (winScroll / height) * 100;
//   document.getElementById("progressBar").style.width = scrolled + "%";
// }

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


  //ScrollMagic

  //Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//loop through each .project element
	$('.home-content').each(function(){
		//build scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.9,
      reverse: false
		})
		.setClassToggle(this, 'fade-in') //add class to project01
		.addTo(controller);
	});



  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  // Animation will be ignored and replaced by scene value in this example
  var tween = TweenMax.staggerFromTo('.grid-fadeIn', 0.5,
    {y: '-=30', opacity: 0},
    {y: '0', opacity: 1},
    0.4
  );

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
    triggerElement: '#articlesScene',
    triggerHook: 1,
    reverse: false
  })
  .setTween(tween)
  .addTo(scrollMagicController);



  //Section1 Cloud 1
  var cloud1 = new ScrollMagic.Scene({
    triggerElement: ".section1-cloud1",
    triggerHook: 0.5,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section1-cloud1', 1, {
    y: '-50%', ease:Power0.easeNone}))
  .addTo(controller);


  //Section1 Cloud 2
  var cloud2 = new ScrollMagic.Scene({
    triggerElement: ".section1-cloud2",
    triggerHook: 0.5,
    duration: 0,
    offset: 100
  })
  .setTween(TweenMax.from('.section1-cloud2', 1, {
    y: '10%', ease:Power0.easeNone}))
  .addTo(controller);


  //Section1 Bird 1
  var bird1 = new ScrollMagic.Scene({
    triggerElement: ".section1-bird",
    triggerHook: 0.5,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section1-bird', 1, {
    y: '20%', ease:Power0.easeNone}))
  .addTo(controller);

  //Section2 Cloud
  var cloud3 = new ScrollMagic.Scene({
    triggerElement: ".section2-cloud",
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section2-cloud', 1, {
    y: '-50%', ease:Power0.easeNone}))
  .addTo(controller);



  //Section2 Bird
  var bird2 = new ScrollMagic.Scene({
    triggerElement: ".section2-bird",
    triggerHook: 0.5,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section2-bird', 1, {
    y: '20%', ease:Power0.easeNone}))
  .addTo(controller);

  //Section3 Cloud
  var cloud3 = new ScrollMagic.Scene({
    triggerElement: ".section3-cloud",
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section3-cloud', 1, {
    y: '-50%', ease:Power0.easeNone}))
  .addTo(controller);

  //Section4 Bird
  var bird3 = new ScrollMagic.Scene({
    triggerElement: ".section4-bird",
    triggerHook: 0.5,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section4-bird', 1, {
    y: '20%', ease:Power0.easeNone}))
  .addTo(controller);

  //Section5 Bird
  var bird4 = new ScrollMagic.Scene({
    triggerElement: ".section5-bird",
    triggerHook: 0.5,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section5-bird', 1, {
    y: '20%', ease:Power0.easeNone}))
  .addTo(controller);

  //Section5 Cloud
  var cloud4 = new ScrollMagic.Scene({
    triggerElement: ".section5-cloud",
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section5-cloud', 1, {
    y: '-80%', ease:Power0.easeNone}))
  .addTo(controller);

});
