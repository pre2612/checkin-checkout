/**
 * Created by pborrawar on 6/26/15.
 */
(function($, checkin){

    checkin.FetchContent = {
        init: function(elem) {
            this.$elem = $(elem),
            this.$source = this.$elem.find("#some-template").html(),
            this.$template = Handlebars.compile(this.$source),
            this.$checkInList = this.$elem.find("#checkIn-list"),
            this.fetchContent(this.$checkInList , this.$template);
        },

        updateContent: function($source , $template) {
            setTimeout(function(){
                $source.html("");
                $source.append($template(checkin.GetContent.getCheckedInUsers()));
            }, 500);

        },

        fetchContent: function($source,$template) {
            firebaseRef.on("value", function(data) {
                checkin.data = data.val();
                checkin.FetchContent.updateContent($source, $template);
            });
        }

    };

    $( document ).ready(function() {
        checkin.FetchContent.init('#check-out');
    });

})(jQuery, CheckIn);
