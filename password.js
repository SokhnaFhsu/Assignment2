let setPassword;
let confirmPassword;

do {
  setPassword = prompt("Set your password:");
  confirmPassword = prompt("Confirm your password:");

  if (setPassword !== confirmPassword) {
    console.log("Passwords do not match. Please try again.");
  }
} while (setPassword !== confirmPassword);

console.log("Password set successfully!");
