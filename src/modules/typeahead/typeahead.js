/**
 * Created by pborrawar on 6/26/15.
 */

(function($, checkin){

    checkin.Typeahaed = {
        init: function(elem,arr) {
            this.$typeAhead = $(elem);
            this.setup(arr);
        },

        setup: function(arr) {
            this.setAutoComplete(arr);
        },

        setAutoComplete: function(arr) {
            this.$typeAhead.typeahead(
                {
                    hint: true,
                    highlight: true,
                    minLength: 1
                },
                {
                    name: 'names',
                    displayKey: 'value',
                    source: checkin.Typeahaed._autoCompleteSearch(arr)
                }
            );
        },
        _autoCompleteSearch: function(strings) {
            return function findMatches(q, cb) {
                var matches = [],

                    substrRegex = new RegExp(q, 'i');

                $.each(strings, function(i, str) {
                    if (substrRegex.test(str)) {
                        matches.push({ value: str });
                    }
                });

                cb(matches);
            };
        },
        clearInput: function() {
            $(':input').val('');
        }
    };

    $( document ).ready(function() {
        setTimeout(function(){
            checkin.Typeahaed.init('#device' , checkin.GetContent.getDevices());
            checkin.Typeahaed.init('#name' , checkin.GetContent.getNames());
        }, 500);

    });

})(jQuery, CheckIn);
