function buttonUp(){var e=$(".sb-search-input--desktop",".sb-search-input--sticky",".sb-search-input--mobile").val();0!==(e=$.trim(e).length)?$(".sb-search-submit").css("z-index","99"):($(".sb-search-input--desktop",".sb-search-input--sticky",".sb-search-input--mobile").val(""),$(".sb-search-submit").css("z-index","-999"))}jQuery(function(t){document.getElementById("loader");window.addEventListener("load",function(){loader.style.display="none"}),t(window).scroll(function(){var e=t(this),o=t(".sticky-nav");25<e.scrollTop()?o.addClass("sticky-nav__reveal"):o.removeClass("sticky-nav__reveal")}),t('a[href^="#"]').on("click",function(e){var o=t(this.getAttribute("href"));o.length&&(e.preventDefault(),t("html, body").stop().animate({scrollTop:o.offset().top-50},1e3))}),t("a.mobile-drop").click(function(){return myDropDown=t(this).next(".nav-dropdown"),myDropDown.is(":visible")?(t(this).removeClass("drop-down-open"),myDropDown.hide()):(myDropDown.fadeIn(),t(this).addClass("drop-down-open")),!1}),t(".mobile-drop").on("click",function(){this.classList.toggle("clicked")}),t(".mobile-nav-btn").click(function(){t("nav.nav-mobile").slideToggle()}),t("#nav-toggle").on("click",function(){this.classList.toggle("active")}),t(".mobile-nav-btn").click(function(){t("#hamburger").toggleClass("open")}),t(".sticky-nav-btn").click(function(){t(".nav-sticky").toggleClass("nav-sticky__open"),t(".bg-fade").toggleClass("bg-fade__on")}),t(".sticky-close").click(function(){t(".nav-sticky").toggleClass("nav-sticky__open"),t(".bg-fade").toggleClass("bg-fade__on")})}),$("select.postform").each(function(){var o=$(this),e=$(this).children("option").length;o.addClass("postform select-hidden"),o.wrap('<div class="select"></div>'),o.after('<div class="postform select-styled"></div>');var t=o.next("div.select-styled");t.text(o.children("option").eq(0).text());for(var n=$("<ul />",{class:"select-options"}).insertAfter(t),i=0;i<e;i++)$("<li />",{text:o.children("option").eq(i).text(),rel:o.children("option").eq(i).val()}).appendTo(n);var s=n.children("li");t.click(function(e){e.stopPropagation(),$("div.select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.select-options").hide()}),$(this).toggleClass("active").next("ul.select-options").toggle()}),s.click(function(e){e.stopPropagation(),t.text($(this).text()).removeClass("active"),o.val($(this).attr("rel")),n.hide(),window.location.href=$(this).attr("rel")}),$(document).click(function(){t.removeClass("active"),n.hide()})}),$(document).ready(function(){var e=$(".sb-icon-search"),o=$(".sb-search-input--desktop",".sb-search-input--sticky",".sb-search-input--mobile"),t=$(".sb-search"),n=!1;$(document).mouseup(function(){1==n&&(o.val(""),$(".sb-search-submit").css("z-index","-999"),e.click())}),e.mouseup(function(){return!1}),t.mouseup(function(){return!1}),e.click(function(){0==n?(t.addClass("sb-search-open"),n=!0):(t.removeClass("sb-search-open"),n=!1)});var i=new ScrollMagic.Controller;$(".home-content").each(function(){new ScrollMagic.Scene({triggerElement:this,triggerHook:.9,reverse:!1}).setClassToggle(this,"fade-in").addTo(i)});var s=new ScrollMagic.Controller,c=TweenMax.staggerFromTo(".grid-fadeIn",.5,{y:"-=30",opacity:0},{y:"0",opacity:1},.4);new ScrollMagic.Scene({triggerElement:"#articlesScene",triggerHook:1,reverse:!1}).setTween(c).addTo(s),new ScrollMagic.Scene({triggerElement:".section1-cloud1",triggerHook:.5,duration:"100%"}).setTween(TweenMax.from(".section1-cloud1",1,{y:"-50%",ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".section1-cloud2",triggerHook:.5,duration:0,offset:100}).setTween(TweenMax.from(".section1-cloud2",1,{y:"20%",ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".section1-bird",triggerHook:1,duration:"100%"}).setTween(TweenMax.from(".section1-bird",1,{y:"40%",ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".section2-cloud",triggerHook:1,duration:"100%"}).setTween(TweenMax.from(".section2-cloud",1,{y:"-50%",ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".section2-bird",triggerHook:.5,duration:"100%"}).setTween(TweenMax.from(".section2-bird",1,{y:"20%",ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".section3-cloud",triggerHook:1,duration:"100%"}).setTween(TweenMax.from(".section3-cloud",1,{y:"-50%",ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".section4-bird",triggerHook:.5,duration:"100%"}).setTween(TweenMax.from(".section4-bird",1,{y:"20%",ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".section5-bird",triggerHook:.5,duration:"100%"}).setTween(TweenMax.from(".section5-bird",1,{y:"20%",ease:Power0.easeNone})).addTo(i),new ScrollMagic.Scene({triggerElement:".section5-cloud",triggerHook:1,duration:"100%"}).setTween(TweenMax.from(".section5-cloud",1,{y:"-80%",ease:Power0.easeNone})).addTo(i)});