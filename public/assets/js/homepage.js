$(document).ready(function(){


  $(window).load(function(){
       $('.loader').fadeOut();
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
    y: '20%', ease:Power0.easeNone}))
  .addTo(controller);


  //Section1 Bird 1
  var bird1 = new ScrollMagic.Scene({
    triggerElement: ".section1-bird",
    triggerHook: 1,
    duration: '100%'
  })
  .setTween(TweenMax.from('.section1-bird', 1, {
    y: '40%', ease:Power0.easeNone}))
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
