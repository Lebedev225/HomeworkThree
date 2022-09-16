
userNumber = prompt("Enter a number between 1-100");


while (isNaN(userNumber) == true || Number(userNumber) < 1|| Number(userNumber) > 100) {
    alert(`Sorry, ${userNumber} is not a valid entry`);
    userNumber = prompt("Enter a number between 1-100");
}

alert(`Thank you! You entered ${userNumber}, a valid number.`);
