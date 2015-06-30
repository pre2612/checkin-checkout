"use strict";
(function ($, checkin) {

    checkin.FetchContent = {
        init: function (elem) {
            this.$elem = $(elem);
            this.$source = this.$elem.find("#some-template").html();
            this.$template = Handlebars.compile(this.$source);
            this.$checkInList = this.$elem.find("#checkIn-list");
            this.fetchContent(this.$checkInList, this.$template); // On initial Load attach firebase on value change event
        },
        // Update Check-In List of Users
        updateContent: function ($source, $template) {
            setTimeout(function () {
                $source.html("");
                $source.append($template(checkin.GetContent.getCheckedInUsers()));
            }, 500);

        },
        //Fetch Content from Firebase and Update Handlebar template
        fetchContent: function ($source, $template) {
            firebaseRef.on("value", function (data) {
                checkin.data = data.val();
                checkin.FetchContent.updateContent($source, $template);
            });
        }

    };

    // Initialize check-out div with DOM element when DOM is ready
    $(function () {
        checkin.FetchContent.init("#check-out");
    });

}(jQuery, CheckIn));
