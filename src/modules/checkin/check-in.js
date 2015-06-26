/**
 * Created by pborrawar on 6/24/15.
 */

(function($, checkin){

    checkin.CheckIn = {
        init: function(elem) {
            this.$elem = $(elem),
            this.$name = this.$elem.find("#name"),
            this.$device = this.$elem.find("#device"),
            this.$checkIn = this.$elem.find("#checkin-click"),
            $checkOutTab = $("#checkout-tab"),
            d = new Date(),
            this.setup();
        },

        setup: function() {
            this.$checkIn.click(checkin.CheckIn.checkInClick);
        },

        getName: function() {
            return this.$name.val();
        },

        getDevice: function() {
            return this.$device.val();
        },

        checkInClick: function(event) {
            event.preventDefault();

            firebaseRef.child("check-in").push({
                name: checkin.CheckIn.getName(),
                device: checkin.CheckIn.getDevice(),
                time: d.getDate()+"/"+ d.getMonth()+"/"+ d.getFullYear()
            });

            $checkOutTab.tab("show");
            checkin.Typeahaed.clearInput();
        }
    };

    $( document ).ready(function() {
        checkin.CheckIn.init('#check-in');
    });

})(jQuery, CheckIn);