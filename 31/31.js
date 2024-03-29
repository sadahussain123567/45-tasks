var usernames = ["asad", "saif", "admin", "usman"];
usernames = [];
if (usernames.length === 0) {
    console.log("your array is empty we need to find some users");
}
else {
    usernames.forEach(function (oneuser) {
        if (oneuser === "admin") {
            console.log("hello ".concat(oneuser, ",would  you like to see a status report"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thank you for login in again"));
        }
    });
}
