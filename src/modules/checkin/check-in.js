/*jslint browser: true */
/*global CheckIn: true, jQuery: true, $: true, Firebase: true, firebaseRef: true */
"use strict";

(function ($, checkin) {

    checkin.CheckIn = {
        init: function (elem) {
            this.$elem = $(elem);
            this.$name = this.$elem.find("#name");
            this.$device = this.$elem.find("#device");
            this.$checkIn = this.$elem.find("#checkin-click");
            this.setup();
        },
        //set Check-In click event
        setup: function () {
            this.$checkIn.click(checkin.CheckIn.checkInClick);
        },
        // Get Name of the Person of the Input with id "name"
        getName: function () {
            return this.$name.val();
        },
        // Get Device name of the Input with id "device"
        getDevice: function () {
            return this.$device.val();
        },
        // Click event for check-in btn to push data to firebase with today's date
        checkInClick: function (event) {
            event.preventDefault();
            var $checkOutTab = $("#checkout-tab"),
                d = new Date(); // get todays Date

            firebaseRef.child("check-in").push({
                name: checkin.CheckIn.getName(),
                device: checkin.CheckIn.getDevice(),
                time: d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()
            });

            $checkOutTab.tab("show");
            checkin.Typeahaed.clearInput();
        }
    };

    // Initialize check-in div with DOM element when DOM is ready
    $(function () {
        checkin.CheckIn.init("#check-in");
    });

}(jQuery, CheckIn));