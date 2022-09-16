userDay = prompt("Enter the three letter abbreviation for the day of the week in lower case\nExample: tue")

while (isNaN(userDay) == false || userDay.length != 3 || userDay.toLowerCase() != userDay) {
    alert(`Sorry, ${userDay} is not a valid entry`);
    userDay = prompt("Enter the three letter abbreviation for the day of the week in lower case\nExample: tue");
}


switch (userDay) {
    case "mon":
        followingDay = "Tuesday";
        alert(`You entered: ${userDay}\nThe following day is: ${followingDay}`)
        break;
    case "tue":
        followingDay = "Wednesday";
        alert(`You entered: ${userDay}\nThe following day is: ${followingDay}`)
        break;
    case "wed":
        followingDay = "Thursday";
        alert(`You entered: ${userDay}\nThe following day is: ${followingDay}`)
        break;
    case "thu":
        followingDay = "Friday";
        alert(`You entered: ${userDay}\nThe following day is: ${followingDay}`)
        break;
    case "fri":
        followingDay = "Saturday";
        alert(`You entered: ${userDay}\nThe following day is: ${followingDay}`)
        break;
    case "sat":
        followingDay = "Sunday";
        alert(`You entered: ${userDay}\nThe following day is: ${followingDay}`)
        break;
    case "sun":
        followingDay = "Monday";
        alert(`You entered: ${userDay}\nThe following day is: ${followingDay}`)
}