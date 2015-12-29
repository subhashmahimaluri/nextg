(function($, Drupal) {

    Drupal.behaviors.themeSettings = {
        attach: function(context, settings) {

            // Header fixed with admin toolbar
            $(function() {
                // Add Body class on view port change
                assign_bootstrap_mode();
                $(window).resize(function() {
                    assign_bootstrap_mode();
                });
                function assign_bootstrap_mode() {
                    width = window.innerWidth;
                    var mode = '';
                    if (width<1024) {
                        mode = "mode-md";
                    }
                    else if (width>1023) {
                        mode = "mode-lg";                        
                    }
                    $("body").removeClass("mode-md").removeClass("mode-lg").addClass(mode);
                }

                // Search Functionality
                $('.search-icon a').click(function(e) {
                    e.preventDefault();
                    $('#search-wrapper').show();
                    $('#search-wrapper input').focus();
                });
                $('#close a').click(function(e) {
                    e.preventDefault();
                    $('#search-wrapper').hide();
                });
                $("#search-wrapper").focusout(function() {
                    $('#search-wrapper').hide();
                });
                // Mobile Dropdown Event
                $('.dropdown-indicator').click(function(){
                    $(this).parent().find('> ul').toggle();
                    $(this).toggleClass('open');
                });

                // Dropdown Menu                
                $('nav ul li').each(function() {
                    if ($(this).find('> ul').length > 0) {
                        $(this).addClass('has-dropdown');
                        $(this).prepend('<span class="dropdown-indicator"><i class="fa fa-angle-down"></i></span>');
                    }
                });
                $("a[href='#top']").on('click', function() {
                  $("html, body").animate({ scrollTop: 0 }, 1000);
                  return false;
                });                
                $(window).scroll(function() {      
                    if ($(window).scrollTop() >= 100 ) {
                      $("#navbar, .main-container").addClass("shrink");
                    } else{
                      $("#navbar, .main-container").removeClass("shrink");
                    }
                });
            });
        }
    };
})(jQuery, Drupal);