/**
 * Created by pborrawar on 6/25/15.
 */
(function($, checkin){

    checkin.CheckOut = {
        init: function(elem) {
            this.$elem = $(elem),
            this.$source = this.$elem.find("#some-template").html(),
            this.$template = Handlebars.compile(this.$source),
            this.$checkInList = this.$elem.find("#checkIn-list"),
            this.setup();
        },

        setup: function() {
            this.$elem.on('click', 'td button' , checkin.CheckOut.checkOutClick);
        },

        getKey: function() {
            return this.$name.val();
        },

        getDevice: function() {
            return this.$device.val();
        },

        checkOutClick: function(event) {
            event.preventDefault();
            var fireBaseCheckout = new Firebase('https://checkin-checkout.firebaseio.com/check-in/'+$(this).attr("id"));
            fireBaseCheckout.remove();
        }

    };

    // Initialize checkout div
    $( document ).ready(function() {
        checkin.CheckOut.init('#check-out');
    });

})(jQuery, CheckIn);