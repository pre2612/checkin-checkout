/**
 * Created by pborrawar on 6/24/15.
 */
(function($, checkin){


    checkin.ContentShowHide = {
        init: function(elem) {
            this.$elem = $(elem);
            this.hide();
        },

        show: function() {
            this.$elem.fadeIn();
        },
        hide: function() {
            this.$elem.fadeOut();
        }
    };

    // Initialize div
    $( document ).ready(function() {
        checkin.ContentShowHide.init('#my-tab-content');
    });

})(jQuery, CheckIn);