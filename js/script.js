var UIManager = (function() {

    // Change the .nav__item_active class between li
    function activeNav() {
        $navItem.on("click", function() {
            $(this).addClass("nav__item_active").siblings().removeClass("nav__item_active");
        });
    }

    // Toggle the nav ul on Nav-Button click
    function responsiveNav() {
        $navButton.on("click", function() {
            $navList.toggleClass("nav__list_full");
            $(this).toggleClass("nav__button_opened");
            $(".nav").toggleClass("nav_full");
            if($(".nav ").hasClass("nav_full")) {
                $("body").addClass('fix_body');
            } else {
                $("body").removeClass('fix_body');
            }
        });
    }

    // Placeholder fallback FOR IE8 & IE9
    function placeholder() {
        $('[placeholder]').focus(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();

        $('[placeholder]').parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            });
        });
    }

    // Main Slider
    function slider() {
        slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        (function addDots(dotted) {
            if(dotted === true) {
                var dotsContainer = document.createElement("div");
                dotsContainer.classList.add("dots");
                var dots;
                for (var i = 1; i <= slides.length; i++) {
                    dots = document.createElement("span");
                    dots.classList.add("dot");
                    dotsContainer.appendChild(dots);
                }

                dotsContainer.firstChild.classList.add("dot_active");
                var slider = document.querySelector(".slider");
                slider.appendChild(dotsContainer);
                var children = dotsContainer.children;

                for (var i = 0; i < children.length; i++) {
                    (function(i) {
                        children[i].onclick = function() {
                            currentSlide(i+1);
                            for (var j = 0; j < children.length; j++) {
                                children[j].classList.remove("dot_active");
                            }
                            this.classList.add("dot_active");
                        };
                    })(i);
                }

            } else {
                console.error("Please, provide {dotted: true} option untill I implement more options")
            }
        })(dotted);

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }
    }

    // Parallax Animation
    function parallax() {
        $window = $(window);
        $window.scroll(function() {

            $scrollTop = $(this).scrollTop();

            // SHRINKING NAV ON SCROLL
            if( $scrollTop > 0 ) {
                $('.nav').addClass('nav_parallax');
            } else {
                $('.nav').removeClass('nav_parallax');
            }

            // Parallax Effect (Header)
            var headrHeight = $(".header").height();
            if($scrollTop <= headrHeight) { //Optimization code to stop the parallax after passing the section
                $(".slider").css({
                    "margin": -60 + $scrollTop /3 +"px auto" //Used Margin For IE9
                    // "transform": "translate(0px, "+ wScroll /4 +"%)"
                });
            }

            // Parallax Effect (Call-To-Action)
            if( $scrollTop > $('.call2action').offset().top - $window.height() ) {
                var offset = (Math.min(0, $scrollTop - $('.call2action').offset().top + $window.height() - 350)).toFixed();
                $('.call2action__content').css({'marginTop': - Math.abs(offset * 0.5) +'px'}); //Used Margin For IE9
            }

            // Landing Elements into page (InfoList)
            if( $scrollTop > $(".column").offset().top - $window.height() ) {
                $(".information .info__list").each(function(i) {
                    setTimeout(function() {
                        $(".information .info__list").eq(i).addClass("info__list_is-showing");
                    }, 150 * (i+1) );
                });
            }

        });
    }

    // Initialise the whole Module
    function init(opts) {
        $navItem = $(opts.navItem);
        $navButton = $(opts.navButton);
        $navList = $(opts.navList);
        slides = document.querySelectorAll(opts.slides);
        dotted = opts.dotted;
        activeNav();
        responsiveNav();
        placeholder();
        slider();
        parallax();
    }

    // Caching variables
    var $navItem,
    $navButton,
    $navList,
    slideIndex,
    slides,
    dotted,
    $window,
    $scrollTop,
    publicAPI = {
        init: init
    };

    return publicAPI;

})();

(function() {
    UIManager.init({
        navItem: ".nav__item",
        navButton: ".nav__button",
        navList: ".nav__list",
        slides: ".slider__item",
        dotted: true
    });
})();
