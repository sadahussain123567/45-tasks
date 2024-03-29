/// array no:1
var current_users = ["asad", "saif", "usama", "jameel", "wajahat"];
// array no:2
var new_users = ["sadam", "saad", "usama", "aneel", "ayesha"];
////condition lagae hy new user or current user ko check karne ke
new_users.forEach(function (newoneuser) {
    var our_condition = (current_users.some(function (newoneusers) { return newoneusers.toLowerCase() === newoneuser.toLowerCase(); }));
    /////
    if (our_condition) {
        console.log("sorry ".concat(newoneuser, " is already taken"));
        /////
    }
    else {
        console.log("sorry ".concat(newoneuser, " is available"));
    }
});
