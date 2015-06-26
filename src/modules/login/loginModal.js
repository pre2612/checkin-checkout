(function($, checkin){

    checkin.LoginModal = {
        init: function(elem) {
            this.$elem = $(elem);
            this.$emailVal = this.$elem.find("#login-email");
            this.$pwd = this.$elem.find("#login-password");
            this.show();
        },

        show: function() {
            this.$elem.modal('show');
        },
        hide: function() {
            this.$elem.modal('hide');
        },
        getEmailVal: function() {
            return this.$emailVal.val();
        },
        getpwd: function() {
            return this.$pwd.val();
        }
    };

    // Initialize Login modal
    $( document ).ready(function() {
        checkin.LoginModal.init('#loginModal');
    });

})(jQuery, CheckIn);