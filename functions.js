// let orderCount = 1;

// const takeOrder = (topping) => {
//     console.log(`Order ${orderCount}: pizza with ${topping}`);
//     orderCount++;
// }
// takeOrder("pineapple");
// takeOrder("chicken")
// takeOrder("pepperoni")
// takeOrder("mushroom")

let balance = 500.00
let pinNumber = 5151
// let amount = 100

const cashMachine = (amount, pin1) => {

    if (pinNumber == pin1 && amount <= balance) {
        console.log(`please take your cash`)
    }
    else {
        console.log(`Error`)
    }

    else if (pinumber != pin1) {
    console.log(`incorrect pin`)
}

cashMachine(200, 5151)

// const subtract = (number1, number2) => {
//     console.log(number1 - number2)
// }
// subtract(100, 50)

// const divide = (number3, number4) => {
//     console.log(number3 / number4)
// }
// divide(10, 2)

