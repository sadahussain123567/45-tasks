// aik array banaya countries ka
let countries: string[] = ["china", "russia", "america", "japan"];

console.log("original order:", countries);
// copy banane ka tarika
console.log("alphabetical order:", [...countries].sort());
//ya batane ke lie ke order original hy
console.log("still in original order:", countries);
//reverse banane ka tariqa
console.log("reverse order:", [...countries].reverse());
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
