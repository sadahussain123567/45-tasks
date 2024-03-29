var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// aik array banaya countries ka
var countries = ["china", "russia", "america", "japan"];
console.log("original order:", countries);
// copy banane ka tarika
console.log("alphabetical order:", __spreadArray([], countries, true).sort());
//ya batane ke lie ke order original hy
console.log("still in original order:", countries);
//reverse banane ka tariqa
console.log("reverse order:", __spreadArray([], countries, true).reverse());
//ya batane ke lie ke order original hy
console.log("still in original order:", countries);
//change karne ka tariqa order ko yani list ko
console.log("original array reversed", countries.reverse());
//wapsi original order kr dia
console.log("back to original order:", countries.reverse());
//wapsi change krdia alphabetical order
console.log("sorted in alphabetical order:", countries.sort());
// reverse
console.log("original array reversed", countries.reverse());
