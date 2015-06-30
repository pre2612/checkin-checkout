"use strict";
(function ($, checkin) {

    checkin.LoginModal = {
        init: function (elem) {
            this.$elem = $(elem);
            this.$emailVal = this.$elem.find("#login-email");
            this.$pwd = this.$elem.find("#login-password");
        },
        // Show modal
        show: function () {
            this.$elem.modal("show");
        },
        // Hide modal
        hide: function () {
            this.$elem.modal("hide");
        },
        // Get email value from Modal
        getEmailVal: function () {
            return this.$emailVal.val();
        },
        // Get pwd value from Modal
        getpwd: function () {
            return this.$pwd.val();
        }
    };

    // Initialize Login modal div with DOM element when DOM is ready
    $(function () {
        checkin.LoginModal.init("#loginModal");
    });

}(jQuery, CheckIn));