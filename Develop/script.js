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

// Step 1: How many characters does the user want for the password 
// Step 2: Ask for use of uppercase 
// Step 3: Ask for use of Lowercase 
// Step 4: Ask for use of numbers 
// Step 5: Ask for use of special characters 
