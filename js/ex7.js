
let userHours = prompt("Enter hours")
while (isNaN(userHours) == true || userHours.length == 0) {
    alert(`Sorry, ${userHours} is not a valid entry`);
    userHours = prompt("Enter seconds")

}




let userMinutes = prompt("Enter minutes");
while (isNaN(userMinutes) == true || userMinutes.length == 0) {
    alert(`Sorry, ${userMinutes} is not a valid entry`);
    userMinutes = prompt("Enter seconds")

}





let userSeconds = prompt("Enter seconds")
while (isNaN(userSeconds) == true || userSeconds.length == 0) {
    alert(`Sorry, ${userSeconds} is not a valid entry`);
    userSeconds = prompt("Enter seconds")

}

let keepHours = userHours
let keepMinutes = userMinutes
let keepSeconds = userSeconds


userSeconds = Number(userSeconds) + 1


if (userSeconds == 60) {
    userSeconds = 0;
    userMinutes++
}

if (userMinutes == 60) {
    userMinutes = 0;
    userHours++
}

if (userHours == 24) {
    userHours = 0;
}

alert(`
Time input: ${keepHours}h ${keepMinutes}m ${keepSeconds}s\n
One second later: ${userHours}h ${userMinutes}m ${userSeconds}s`)