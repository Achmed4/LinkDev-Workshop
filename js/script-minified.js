var UIManager=function(){function t(){i.on("click",function(){$(this).addClass("nav__item_active").siblings().removeClass("nav__item_active")})}function a(){s.on("click",function(){c.toggleClass("nav__list_full"),$(this).toggleClass("nav__button_opened"),$(".nav").toggleClass("nav_full"),$(".nav ").hasClass("nav_full")?$("body").addClass("fix_body"):$("body").removeClass("fix_body")})}function n(){$("[placeholder]").focus(function(){var t=$(this);t.val()==t.attr("placeholder")&&(t.val(""),t.removeClass("placeholder"))}).blur(function(){var t=$(this);(""==t.val()||t.val()==t.attr("placeholder"))&&(t.addClass("placeholder"),t.val(t.attr("placeholder")))}).blur(),$("[placeholder]").parents("form").submit(function(){$(this).find("[placeholder]").each(function(){var t=$(this);t.val()==t.attr("placeholder")&&t.val("")})})}function e(){function t(t){a(r=t)}function a(t){var a;for(t>d.length&&(r=1),1>t&&(r=d.length),a=0;a<d.length;a++)d[a].style.display="none";d[r-1].style.display="block"}r=1,a(r),function(a){if(a===!0){var n=document.createElement("div");n.classList.add("dots");for(var e,l=1;l<=d.length;l++)e=document.createElement("span"),e.classList.add("dot"),n.appendChild(e);n.firstChild.classList.add("dot_active");var o=document.querySelector(".slider");o.appendChild(n);for(var i=n.children,l=0;l<i.length;l++)!function(a){i[a].onclick=function(){t(a+1);for(var n=0;n<i.length;n++)i[n].classList.remove("dot_active");this.classList.add("dot_active")}}(l)}else console.error("Please, provide {dotted: true} option untill I implement more options")}(v)}function l(){f=$(window),f.scroll(function(){u=$(this).scrollTop(),u>0?$(".nav").addClass("nav_parallax"):$(".nav").removeClass("nav_parallax");var t=$(".header").height();if(t>=u&&$(".slider").css({margin:-60+u/3+"px auto"}),u>$(".call2action").offset().top-f.height()){var a=Math.min(0,u-$(".call2action").offset().top+f.height()-350).toFixed();$(".call2action__content").css({marginTop:-Math.abs(.5*a)+"px"})}u>$(".column").offset().top-f.height()&&$(".information .info__list").each(function(t){setTimeout(function(){$(".information .info__list").eq(t).addClass("info__list_is-showing")},150*(t+1))})})}function o(o){i=$(o.navItem),s=$(o.navButton),c=$(o.navList),d=document.querySelectorAll(o.slides),v=o.dotted,t(),a(),n(),e(),l()}var i,s,c,r,d,v,f,u,h={init:o};return h}();!function(){UIManager.init({navItem:".nav__item",navButton:".nav__button",navList:".nav__list",slides:".slider__item",dotted:!0})}();
