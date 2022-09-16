
let userPassword = prompt("Enter your password: ");
let userAttempt = 1
let userAttemptLimit = 3

// First n-1 attempts
while ( userPassword != "secret" && userAttempt < userAttemptLimit) {
    alert(`Sorry, ${userPassword} is invalid. Please try again`);
    userAttempt ++
    userPassword = prompt("Enter your password: ");
}

// Final attempt check and correct guess result
if (userPassword != "secret") {
    alert(`Your account is locked!  You failed to enter the correct password ${userAttempt} times`);
}
else {
    alert(`You entered the correct password after ${userAttempt} attempt(s)`);
}
