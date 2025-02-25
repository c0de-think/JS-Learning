// Strings
var brand = "Amigoscode";
console.log(typeof brand); // string
console.log(brand.length); // 10
console.log(brand.toUpperCase()); // AMIGOSCODE
console.log(brand.toLowerCase()); // amigoscode
console.log(brand[0]); // A
console.log(brand[1]); // m
console.log(brand[2]); // i
console.log(brand[3]); // g
console.log(brand[4]); // o
console.log(brand[5]); // s
console.log(brand[6]); // c
console.log(brand[7]); // o
console.log(brand[8]); // d
console.log(brand[9]); // e
console.log(brand.charAt(0)); // A
console.log(brand.charAt(1)); // m
console.log(brand.charAt(2)); // i
console.log(brand.charAt(3)); // g
console.log(brand.charAt(4)); // o
console.log(brand.charAt(5)); // s
console.log(brand.charAt(6)); // c
console.log(brand.charAt(7)); // o
console.log(brand.charAt(8)); // d
console.log(brand.charAt(9)); // e
console.log(brand.indexOf("A")); // 0
console.log(brand.indexOf("m")); // 1
console.log(brand.indexOf("i")); // 2
console.log(brand.indexOf("g")); // 3
console.log(brand.indexOf("o")); // 4
console.log(brand.indexOf("s")); // 5
console.log(brand.indexOf("c")); // 6
console.log(brand.indexOf("o")); // 7
console.log(brand.indexOf("d")); // 8
console.log(brand.indexOf("e")); // 9
console.log(brand.indexOf("x")); // -1
console.log(brand.includes("A")); // true


console.log(brand.substring(0, 3)); // Ami
console.log(brand.substring(3, 6)); // gos

var firstName = "Amigos";
var lastName = "code";
console.log(firstName + " " + lastName); // Amigos code
console.log(`${firstName} ${lastName}`); // Amigos code
console.log(firstName.concat(" ", lastName)); // Amigos code