/*jslint browser: true */
/*global CheckIn: true, jQuery: true, $: true, Firebase: true, Handlebars: true */

"use strict";

//single var pattern
var firebaseRef = new Firebase("https://checkin-checkout.firebaseio.com/"), //Define firebase global variable to access
    myTabs = $("#appTabs a"), // Tabs Element
    CheckIn = CheckIn || {}; //Global namespace for Entire app

//tabs click event to switch between tabs
myTabs.click(function (e) {
    e.preventDefault();
    $(this).tab("show");
});

