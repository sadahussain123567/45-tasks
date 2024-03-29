// pehle variable banaya
var guestlist = ["shahmeer", "daniyal", "wajahat", "asad"];
//aik dosra variable banaya
var dontcome = guestlist[0];
// console kia
console.log(dontcome, "wo nahi aah skta");
guestlist.splice(0, 1, "aamir");
console.log("good news ! we have foun a bigger table for dinner.");
guestlist.unshift("ali");
guestlist.push("zain");
var middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "osama");
console.log("uppdate list of our guest");
guestlist.forEach(function (one) { return console.log("salam ".concat(one, ", would you like to dinner with me")); });
console.log(" unfortunately ,the new table will arrive on time, so i can only invite two guests to dinner with me");
//while loop- use kia hy guest remove kie hain
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("sorry,".concat(removeguest, ", i cant invite you to dinner"));
}
console.log("invitataion to the last two guest");
guestlist.forEach(function (fore) { return console.log("lucky,".concat(fore, ", you are still invited to dinner")); });
// last ke do guest remove kr die
guestlist.pop();
guestlist.pop();
console.log("emptylist:", guestlist);
