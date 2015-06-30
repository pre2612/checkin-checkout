"use strict";
(function ($, checkin) {

    checkin.Logout = {
        init: function (elem) {
            this.$elem = $(elem);
            this.setup();
        },
        // Set Click event
        setup: function () {
            this.$elem.click(checkin.Logout.logout);
        },
        // Log off user hide content and show Login Modal
        logout: function (event) {
            event.preventDefault();

            firebaseRef.unauth();
            checkin.ContentShowHide.hide();
            checkin.LoginModal.show();
        }

    };

    // Initialize Logout div with DOM element when DOM is ready
    $(function () {
        checkin.Logout.init("#logout");
    });

}(jQuery, CheckIn));