var username = ["sadam", "asad", "mahad", "admin"];
username.forEach(function (elements) {
    if (elements === "admin") {
        console.log("hello &{elements},would you like to see a status report");
    }
    else {
        console.log("hello &{elements}, thank you for login in again");
    }
});
