
let numberOne = prompt("Enter an integer")

while (isNaN(numberOne) == true || numberOne.length == 0) {
    alert(`Sorry, ${numberOne} is not a valid entry`);
    numberOne = prompt("Enter the first integer")
}

let numberTwo = prompt("Enter another one")

while (isNaN(numberTwo) == true || numberTwo.length == 0) {
    alert(`Sorry, ${numberTwo} is not a valid entry`);
    numberTwo = prompt("Enter the second integer")
}

let convertedNumberOne = Number(numberOne)
let convertedNumberTwo = Number(numberTwo)

let addition = convertedNumberOne + convertedNumberTwo
let subtraction = convertedNumberOne - convertedNumberTwo
let multiplication = convertedNumberOne*convertedNumberTwo
let division = convertedNumberOne/convertedNumberTwo
let modulo = convertedNumberOne%convertedNumberTwo

alert(`
Addition = ${addition}\n
Subtraction = ${subtraction}\n
Multiplication = ${multiplication}\n
Division = ${division}\n
Modulo = ${modulo}`)