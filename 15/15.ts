let guest= ["hamza","sadam","asad"];
let dontcome=guest[0];

console.log(dontcome,"nahi ah skta");

guest.splice(0, 1, "muqsit");

guest.forEach(oneguest => console.log(`salam  ${oneguest}, would you like to dinner with me`));