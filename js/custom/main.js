(function($, Drupal) {

    Drupal.behaviors.themeSettings = {
        attach: function(context, settings) {

            // Header fixed with admin toolbar
            $(function() {
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
                $('nav ul li').each(function() {
                    if ($(this).find('> ul').length > 0) {
                        $(this).addClass('has-dropdown');
                        $(this).find('> a').append('<span class="dropdown-indicator"><i class="fa fa-angle-down"></i></span>');
                    }
                });
                $('.navbar-collapse.in ul li a .dropdown-indicator').click(function(event){
                    event.preventDefault();
                    alert('clickedd');
                });
            });
        }
    };
})(jQuery, Drupal);