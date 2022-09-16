let userNumber = prompt("Enter an integer")


while (isNaN(userNumber) == true || userNumber.length == 0) {
    alert(`Sorry, ${userNumber} is not a valid entry`);
    userNumber = prompt("Enter the  integer")
}

alert(`
${userNumber} x 0 = ${userNumber*0}\n
${userNumber} x 1 = ${userNumber*1}\n
${userNumber} x 2 = ${userNumber*2}\n
${userNumber} x 3 = ${userNumber*3}\n
${userNumber} x 4 = ${userNumber*4}\n
${userNumber} x 5 = ${userNumber*5}\n
${userNumber} x 6 = ${userNumber*6}\n
${userNumber} x 7 = ${userNumber*7}\n
${userNumber} x 8 = ${userNumber*8}\n
${userNumber} x 9 = ${userNumber*9}\n
${userNumber} x 10 =${userNumber*10} \n
`)