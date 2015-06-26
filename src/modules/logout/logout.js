/**
 * Created by pborrawar on 6/24/15.
 */
(function($, checkin){

    checkin.Logout = {
        init: function(elem) {
            this.$elem = $(elem);
            this.setup();
        },

        setup: function() {
            this.$elem.click(checkin.Logout.logout);
        },

        logout: function(event) {
            event.preventDefault();

            firebaseRef.unauth();
            checkin.ContentShowHide.hide();
            checkin.LoginModal.show();
        }

    };

    // Initialize Logout div
    $( document ).ready(function() {
        checkin.Logout.init('#logout');
    });

})(jQuery, CheckIn);