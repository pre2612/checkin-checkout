"use strict";
(function ($, checkin) {

    checkin.ContentShowHide = {
        init: function (elem) {
            this.$elem = $(elem);
            //On Initial Load Hide Main content
            this.hide();
        },
        // Show Main Content
        show: function () {
            this.$elem.fadeIn();
        },
        // Hide main content
        hide: function () {
            this.$elem.fadeOut();
        }
    };

    // Initialize Main Content Area div with DOM element when DOM is ready
    $(function () {
        checkin.ContentShowHide.init("#my-tab-content");
    });

}(jQuery, CheckIn));