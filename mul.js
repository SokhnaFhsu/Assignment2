
const userNumber = parseInt(prompt("Enter a number:"));


if (isNaN(userNumber)) {
  alert("Please enter a valid number.");
} else {
  for (let i = 1; i <= 10; i++) {
    const result = userNumber * i;
    console.log(`${userNumber} x ${i} = ${result}`);
  }
}
