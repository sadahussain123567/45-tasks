var guest = ["hamza", "sadam", "asad"];
var dontcome = guest[0];
console.log(dontcome, "nahi ah skta");
guest.splice(0, 1, "muqsit");
guest.forEach(function (oneguest) { return console.log("salam  ".concat(oneguest, ", would you like to dinner with me")); });
