$("select#location-select").each(function(){var t=$(this),e=$(this).children("option").length;t.addClass("select-hidden"),t.wrap('<div class="select"></div>'),t.after('<div class="select-styled"></div>');var i=t.next("div.select-styled");i.text(t.children("option").eq(0).text());for(var s=$("<ul />",{class:"select-options"}).insertAfter(i),l=0;l<e;l++)$("<li />",{text:t.children("option").eq(l).text(),rel:t.children("option").eq(l).val()}).appendTo(s);var o=s.children("li");i.click(function(e){e.stopPropagation(),$("div.select-styled.active").not(this).each(function(){$(this).removeClass("active").next("ul.select-options").hide()}),$(this).toggleClass("active").next("ul.select-options").toggle()}),o.click(function(e){e.stopPropagation(),i.text($(this).text()).removeClass("active"),t.val($(this).attr("rel")),s.hide()}),$(document).click(function(){i.removeClass("active"),s.hide()})}),$(".slider").slick({infinite:!0,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:850,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0}},{breakpoint:650,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0}}]});