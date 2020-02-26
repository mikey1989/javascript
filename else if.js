// if (1 === "1") {
//     console.log(true);
// }
// else {

//     console.log(false)
// }

// // False because the second 1 is a "string"

// if (1 != "1") {
//     console.log(true);
// }
// else {

//     console.log(false)
// }

// let age = 10
// let country = "UK"

// if (age > "17" && country == "UK") {
//     console.log("Yes I can serve you");
// }
// else {
//     console.log("No I cant serve you");

// let password = "Michael"

// if (password.length < 8) { console.log("password is too short"); }

// else {
//     console.log("password accepted")
// }

// let num = 10

// if (num % 3 == 0 || num % 5 == 0) {
//     console.log("number is divisible by 3 and 5");
// }

// else {
//     console.log("number is not divisible by 3 and 5")
// }

// // % 3 == 0 means divisible with no remainder 

// let num = 15

// if (num % 3 == 0 && num % 5 == 0) {
//     console.log("fizz buzz")
// }
// else if (num % 3 == 0) {
//     console.log("fizz");
// }
// else if (num % 5 == 0) {
//     console.log("buzz")
// }

// let time = 10
// let placeOfWork = "the office"
// let townOfHome = "chester"

// if (time < 6) {
//     console.log(`I am at ${placeOfWork}`);
// }

// else if (time > 6) {
//     console.log(`I am in ${townOfHome}`);


// let word = "hollow"

// if (word[0] == word[word.length - 1]) {
//     console.log("true")
// }
// else {
//     console.log("false")


// let num1 = 5
// let num2 = 10

// if ((num1 + num2) % 2 == 0) {
//     console.log("even number")
// }
// else {
//     console.log(num1 * num2)
// }

// let space1 = "X"
// let space2 = "0"
// let space3 = "0 "
// let space4 = "X "
// let space5 = "0"
// let space6 = "X"
// let space7 = "X "
// let space8 = "0"
// let space9 = "0"

// console.log(`   |  |`);
// console.log(`  ${space1}|${space2} |${space3}`);
// console.log(`   |  |`);
// console.log("----------");
// console.log("   |  |");
// console.log(` ${space4}|${space5} |${space6}`);
// console.log("   |  |");
// console.log("----------");
// console.log("   |  |");
// console.log(` ${space7}|${space8} | ${space9}`);
// console.log("   |  |");

// if (space1 == space2 && space2 == space3) {
//     console.log("winner")
// }
// else {
//     console.log("loser")
// }


// let child = "£8.00"
// let adult = "£10.95"
// let senior = "£7.50"
// let age = "67"

// if (age < 18) {
//     console.log(child)
// }
// else if (age >= 18 && age <= 59) {
//     console.log(adult)
// }
// else { console.log(senior) }


// const coffeeOrder = (size, type) => {
//     console.log(`one ${size}, ${type}.`)
// }
// coffeeOrder("large", "latte");
// coffeeOrder("small", "americano")
// coffeeOrder("medium", "latte")

// const fullSentence = (name, age, favouriteColour) => {
//     console.log(`my name is ${name}, I am ${age} years old and my favourite colour is ${favouriteColour}.`)
// }
// fullSentence("Mike", "27", "Red")

// const sandwichOrder = (size, filling, sauce) => {
//     console.log(`one ${size}, ${filling} and ${sauce}.`)
// }
// sandwichOrder("large", "ham", "mustard")

let orderCount = 1;

const takeOrder = (topping) => {
    console.log(`Order ${orderCount}: pizza with ${topping}`);
    orderCount++;
}
takeOrder("pineapple");
takeOrder("chicken")
takeOrder("pepperoni")
takeOrder("mushroom")

