"use strict";
(function ($, checkin) {

    checkin.Login = {
        init: function (elem) {
            this.$elem = $(elem);
            this.setup();
            this.ifAuth();
        },

        setup: function () {
            this.$elem.click(checkin.Login.loginClick);
        },
        // Login click event
        loginClick: function (event) {
            event.preventDefault();
            checkin.Login.checkCredentails(checkin.LoginModal.getEmailVal(), checkin.LoginModal.getpwd());
        },
        // Check credentials if right show main content or console error msg
        checkCredentails: function (email, password) {
            firebaseRef.authWithPassword({
                email    : email,
                password : password
            }, function (error) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    checkin.Login.showContent();
                }
            });
        },
        // Show Content and Hide Login Modal
        showContent : function () {
            checkin.ContentShowHide.show();
            checkin.LoginModal.hide();
        },
        // Check if user is authenticated
        checkIfAuth: function (authData) {
            if (authData) {
                checkin.Login.showContent();
            } else {
                checkin.LoginModal.show();
            }
        },
        // Callback to fire on auth
        ifAuth: function () {
            firebaseRef.onAuth(this.checkIfAuth);
        }
    };

    // Initialize Login div with DOM element when DOM is ready
    $(function () {
        checkin.Login.init("#login");
    });

}(jQuery, CheckIn));
