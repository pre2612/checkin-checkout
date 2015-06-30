"use strict";

CheckIn.data = CheckIn.data || {}; //Global nested variable to hold data from Firebase

// Global Functions to get Names, Device and Users Value used Revealing Module Pattern
CheckIn.GetContent = (function (checkin) {

    function getNames() {
        return checkin.data.names;
    }

    function getDevices() {
        return checkin.data.devices;
    }

    function getCheckedInUsers() {
        return checkin.data;
    }

    // explicitly return public methods when this object is instantiated
    return {
        getNames : getNames, //revealing module pattern
        getDevices : getDevices,
        getCheckedInUsers: function () { //facade pattern we mask the internals so no one has direct access by doing this:
            getCheckedInUsers();
        }
    };
}(CheckIn));