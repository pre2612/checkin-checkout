/**
 * Created by pborrawar on 6/24/15.
 */
(function($, checkin){

    checkin.Login = {
        init: function(elem) {
            this.$elem = $(elem),
            this.setup();
            this.ifAuth();
        },

        setup: function() {
            this.$elem.click(checkin.Login.loginClick);
        },

        loginClick: function(event) {
            event.preventDefault();
            checkin.Login.checkCredentails(checkin.LoginModal.getEmailVal(),checkin.LoginModal.getpwd());
        },

        checkCredentails: function(email , password) {
            firebaseRef.authWithPassword({
                email    : email,
                password : password
            }, function(error, authData) {
                error ? console.log("Login Failed!", error) : checkin.Login.showContent();
            });
        },

        showContent : function(){
            checkin.ContentShowHide.show();
            checkin.LoginModal.hide();
        },

        checkIfAuth: function(authData) {
            authData ? checkin.Login.showContent() : checkin.LoginModal.show();
        },

        ifAuth: function() {
            firebaseRef.onAuth(this.checkIfAuth);
        }
    };

    // Initialize Login div
    $( document ).ready(function() {
        checkin.Login.init('#login');
    });

})(jQuery, CheckIn);
