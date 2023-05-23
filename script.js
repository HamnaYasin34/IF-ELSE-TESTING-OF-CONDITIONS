// Take input from the user
var input = prompt("Enter a character:");

// Check if the input is a number, uppercase letter, or lowercase letter
if (!isNaN(input)) {
  document.write("The input is a number.");
} else if (input.charCodeAt(0) >= 65 && input.charCodeAt(0) <= 90) {
  document.write("The input is an uppercase letter.");
} else if (input.charCodeAt(0) >= 97 && input.charCodeAt(0) <= 122) {
  document.write("The input is a lowercase letter.");
} else {
  document.write("Invalid input.");
}

// Take input from the user
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

// Compare the two integers
if (num1 > num2) {
  document.write(num1 + " is larger than " + num2);
} else if (num1 < num2) {
  document.write(num2 + " is larger than " + num1);
} else {
  document.write("Both integers are equal.");
}

// Take input from the user
var character = prompt("Enter a character:");

// Check if the character is a vowel
var vowels = ["a", "e", "i", "o", "u"];
if (vowels.indexOf(character.toLowerCase()) !== -1) {
  document.write("The character is a vowel.");
} else {
  document.write("The character is not a vowel.");
}

// Store correct password in a variable
var correctPassword = "Password123";

// Ask user to enter password
var userPassword = prompt("Enter your password:");

// Validate the passwords
if (!userPassword) {
  document.write("Please enter your password.");
} else if (userPassword === correctPassword) {
  document.write("Correct! The password you entered matches the original password.");
} else {
  document.write("Incorrect password.");
}

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

