"use strict";
(function ($, checkin) {

    checkin.Typeahaed = {
        init: function (elem, arr) {
            this.$typeAhead = $(elem);
            this.setup(arr);
        },

        setup: function (arr) {
            this.setAutoComplete(arr);
        },
        // Typeahead set with options
        setAutoComplete: function (arr) {
            this.$typeAhead.typeahead(
                {
                    hint: true,
                    highlight: true,
                    minLength: 1
                },
                {
                    name: "names",
                    displayKey: "value",
                    source: checkin.Typeahaed.autoCompleteSearch(arr)
                }
            );
        },
        autoCompleteSearch: function (strings) {
            return function findMatches(q, cb) {
                var matches = [],

                    substrRegex = new RegExp(q, 'i');

                $.each(strings, function (i, str) {
                    if (substrRegex.test(str)) {
                        matches.push({ value: str });
                    }
                });

                cb(matches);
            };
        },
        // Clear Typeahead Input
        clearInput: function () {
            $(":input").val('');
        }
    };
    // Initialize typeahaed for name and device elements and pass corresponding name, device arrays to it
    $(function () {
        setTimeout(function () {
            checkin.Typeahaed.init("#device", checkin.GetContent.getDevices());
            checkin.Typeahaed.init("#name", checkin.GetContent.getNames());
        }, 500);

    });

}(jQuery, CheckIn));
