/**
 * Created by pborrawar on 6/24/15.
 */
//global variables
var firebaseRef  = new Firebase('https://checkin-checkout.firebaseio.com/'),
    myTabs       = $('#appTabs a'),
    CheckIn      = CheckIn || {};
    CheckIn.data = CheckIn.data || {};

//tabs click event
myTabs.click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

