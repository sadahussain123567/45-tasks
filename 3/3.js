//Name Cases: Store a person’s name in 
//a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var username = "abdul muqsit";
console.log(username.toUpperCase());
console.log(username.toLowerCase());
console.log(username.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
