userName = prompt("Enter your name");
numberOfUnits = prompt("Enter number of units completed");

while (isNaN(numberOfUnits) == true || numberOfUnits < 0) {
    alert(`Sorry, ${numberOfUnits} is not a valid entry`);
    numberOfUnits = prompt("Enter number of units completed");
}

if (Number(numberOfUnits > 91)) {
    alert(`Hello ${userName}\nYour grade standing is Senior`)
}
else if (Number(numberOfUnits >= 61)) {
    alert(`Hello ${userName}\nYour grade standing is Junior`)
}
else if (Number(numberOfUnits >= 31)) {
    alert(`Hello ${userName}\nYour grade standing is Sophomore`)
}
else {
    alert(`Hello ${userName}\nYour grade standing is Freshman`)
}