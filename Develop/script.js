// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Alphabet / Numbers / Special characters

const uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowercase = uppercase.map(letter =>letter.toLowerCase()) 
const Numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() { 
// Step 1: How many characters does the user want for the password 
var passwordLength = prompt('What is the length you would like your password to be? (8-128)','12')
// Step 2: Ask for use of uppercase 
var useUppercase = prompt('Would you like to include uppercase letters in your password?') 
// Step 3: Ask for use of Lowercase 
var useLowercaase = prompt('Would you like to include lowercase letters in your password?') 
// Step 4: Ask for use of numbers 
var usenumbers = prompt('Would you like to include numbers?') 
// Step 5: Ask for use of special characters 
var useSpecialChars = prompt('Would you like to include special characters in your password?') 

}
