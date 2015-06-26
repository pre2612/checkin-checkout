/**
 * Created by pborrawar on 6/24/15.
 */
(function($, checkin){

    checkin.Login = {
        init: function(elem) {
            this.$elem = $(elem),
            this.setup();
        },

        setup: function() {
            this.$elem.click(checkin.Login.loginClick);
        },

        loginClick: function(event) {
            event.preventDefault();
            checkin.Login.checkAuth(checkin.LoginModal.getEmailVal(),checkin.LoginModal.getpwd());
        },
        checkAuth: function(email , password) {
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
        }
    };

    // Initialize div
    $( document ).ready(function() {
        checkin.Login.init('#login');
    });

})(jQuery, CheckIn);
