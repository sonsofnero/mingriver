function progressBarScroll(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progressBar").style.width=e+"%"}function buttonUp(){var e=$(".sb-search-input--desktop",".sb-search-input--sticky",".sb-search-input--mobile").val();0!==(e=$.trim(e).length)?$(".sb-search-submit").css("z-index","99"):($(".sb-search-input--desktop",".sb-search-input--sticky",".sb-search-input--mobile").val(""),$(".sb-search-submit").css("z-index","-999"))}jQuery(function(t){t(window).scroll(function(){var e=t(this),s=t(".sticky-nav");25<e.scrollTop()?s.addClass("sticky-nav__reveal"):s.removeClass("sticky-nav__reveal")}),t("a.mobile-drop").click(function(){return myDropDown=t(this).next(".nav-dropdown"),myDropDown.is(":visible")?(t(this).removeClass("drop-down-open"),myDropDown.hide()):(myDropDown.fadeIn(),t(this).addClass("drop-down-open")),!1}),t(".mobile-drop").on("click",function(){this.classList.toggle("clicked")}),t(".mobile-nav-btn").click(function(){t("nav.nav-mobile").slideToggle()}),t("#nav-toggle").on("click",function(){this.classList.toggle("active")}),t(".mobile-nav-btn").click(function(){t("#hamburger").toggleClass("open")}),t(".sticky-nav-btn").click(function(){t(".nav-sticky").toggleClass("nav-sticky__open"),t(".bg-fade").toggleClass("bg-fade__on")}),t(".sticky-close").click(function(){t(".nav-sticky").toggleClass("nav-sticky__open"),t(".bg-fade").toggleClass("bg-fade__on")})}),window.onscroll=function(){progressBarScroll()},$("select.postform").each(function(){var s=$(this),e=$(this).children("option").length;s.addClass("postform select-hidden"),s.wrap('<div class="select"></div>'),s.after('<div class="postform select-styled"></div>');var t=s.next("div.select-styled");t.text(s.children("option").eq(0).text());for(var o=$("<ul />",{class:"select-options"}).insertAfter(t),i=0;i<e;i++)$("<li />",{text:s.children("option").eq(i).text(),rel:s.children("option").eq(i).val()}).appendTo(o);var n=o.children("li");t.click(function(e){e.stopPropagation(),$("div.select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.select-options").hide()}),$(this).toggleClass("active").next("ul.select-options").toggle()}),n.click(function(e){e.stopPropagation(),t.text($(this).text()).removeClass("active"),s.val($(this).attr("rel")),o.hide(),window.location.href=$(this).attr("rel")}),$(document).click(function(){t.removeClass("active"),o.hide()})}),$(document).ready(function(){var e=$(".sb-icon-search"),s=$(".sb-search-input--desktop",".sb-search-input--sticky",".sb-search-input--mobile"),t=$(".sb-search"),o=!1;$(document).mouseup(function(){1==o&&(s.val(""),$(".sb-search-submit").css("z-index","-999"),e.click())}),e.mouseup(function(){return!1}),t.mouseup(function(){return!1}),e.click(function(){0==o?(t.addClass("sb-search-open"),o=!0):(t.removeClass("sb-search-open"),o=!1)})}),$(".slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:850,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]});