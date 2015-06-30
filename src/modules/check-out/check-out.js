"use strict";

//Module Pattern
(function ($, checkin) {

    checkin.CheckOut = {
        init: function (elem) {
            this.$elem = $(elem);
            this.setup();
        },
        //set check out click event
        setup: function () {
            this.$elem.on("click", "td button", checkin.CheckOut.checkOutClick);
        },
        // click event to remove that data from firebase
        checkOutClick: function (event) {
            event.preventDefault();
            var fireBaseCheckout = new Firebase("https://checkin-checkout.firebaseio.com/check-in/" + $(this).attr("id"));
            fireBaseCheckout.remove();
        }

    };

    // Initialize check-out div with DOM element when DOM is ready
    $(function () {
        checkin.CheckOut.init("#check-out");
    });

}(jQuery, CheckIn));