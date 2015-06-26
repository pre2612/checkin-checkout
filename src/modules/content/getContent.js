/**
 * Created by pborrawar on 6/26/15.
 */


(function($, checkin){

    checkin.GetContent = {
        getNames: function() {
            return checkin.data.names;
        },

        getDevices: function() {
            return checkin.data.devices;
        },

        getCheckedInUsers: function() {
            return checkin.data;
        }
    }

})(jQuery, CheckIn);