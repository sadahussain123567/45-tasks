let mango = "mango";

let uppercaseapple = "APPLE";

let ten = 10;
let twenty = 20;

let friends =["asad","muqsit","inam","affan"];
//test for equality
console.log("mango is equal to mango");
console.log(mango == "mango");
// test for unequality
console.log(" \nis mango is not equal to mango");
console.log(mango !== "mango");

//TEST USING lower case function
console.log("\nmango is equal to mango by using lowercase?");
console.log(uppercaseapple.toLowerCase() == "apple");

console.log("\nmango is not equal to mango by using lowercase?");
console.log(uppercaseapple.toLowerCase() != "apple");
//test for equal to
console.log("\n is 10 is equal to twenty? ");
console.log(ten == twenty);
//test for not equal to
console.log("\n is 10 is not equal to twenty? ");
console.log(ten != twenty);
//test for greater than
console.log("\n is 10 is greater than 0 ? ");
console.log(ten > 0);
//test for less than
console.log("\n is 10 is less than 0 ? ");
console.log(ten < 0);
//test for greater than equal to
console.log("\n is 10 is greater than or equal  to 0 ? ");
console.log(ten >= 0);
//test for less than equal to
console.log("\n is 10 is less than or equal  to 0 ? ");
console.log(ten <= 0);

//test using 'and' and 'or' operators
//and ke operator ma dono condition true hone chaheya to answer true  aaega

console.log("\n  20 is not  equal  to 10 and twenty is greater than 10 ? ");
console.log(twenty != 10 && twenty > 10 );
console.log("\n  20 is not  equal  to 10 and twenty is greater than 30 ? ");
console.log(twenty != 10 && twenty > 30 );
//using ||(or) operator
//or ke operator ma aik condition bhe true hoe  to answer true  aaega

console.log("\n  20 is greater  than 50 or twenty is equal to 20 ? ");
console.log(twenty > 50 || 20  == 20 );
console.log("\n  20 is greater  than 50 or twenty is not equal to 20 ? ");
console.log(twenty > 50 || twenty != 20 );

//test include in array
console.log("\nis asad include in my friends array");
console.log(friends.includes("asad"));
//test  not include in array
//is not include ma error aarha hy is ko videos dekhne hain
//answer true de rha hy
console.log("\nis sadam  include in my friends array");
console.log(friends.includes("asad"));
