(function($) {
    "use strict";
    var cycling = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }this.Fixedmenu();
            this.Togglemenu();
        },
        // Fixed Menu
        Fixedmenu: function() {
            if ($('.cy_top_wrapper').length > 0) {
                var height = $('.cy_top_wrapper').outerHeight();
                $('.cy_menu_wrapper').css("top", height);
            }
        },
        //Menu
        Togglemenu: function() {
            $(".cy_menu_btn").on('click', function() {
                $(".cy_menu_wrapper").toggleClass('open_menu');
            });
            $(".cy_menu_close").on('click', function() {
                $(".cy_menu_wrapper").removeClass('open_menu');
            });
            $('.cy_menu ul li.dropdown').children('a').append(function() {
                return '<div class="dropdown-expander"><i class="fa fa-bars"></i></div>';
            });
            $(".cy_menu ul > li:has(ul) > a").on('click', function(e) {
                var w = window.innerWidth;
                if (w <= 991) {
                    e.preventDefault();
                    $(this).parent('.cy_menu ul li').children('ul.sub-menu').slideToggle();
                }
            });
        }
    };
    $(document).ready(function() {
        cycling.init();
    });
})(jQuery);