// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Need listener to generate buttons 

generateBtn.addEventListener("click", writePassword); 


// Alphabet / Numbers / Special characters

var Uppercase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var Lowercase = Uppercase.map(letter =>letter.toLowerCase()) 
var Numbers = [0,1,2,3,4,5,6,7,8,9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

// Need to add function for random generator 

function getRandomInt(max) { 
  return Math.floor(Math.random() * max) 
}

function generatePassword() { 
// Step 1: How many characters does the user want for the password 
var passwordLength = prompt('What is the length you would like your password to be? (8-128)','12')
// If they put less than 8 characters or more than 128 characters, redirect them to fix the issue 
if (passwordLength <= 7 || passwordLength >=129) {
  alert ("Please choose a length that fits the parameters :)")
  return generatePassword()
} 
// Step 2: Ask for use of uppercase, replace prompt w/ confirm 
var useUppercase = confirm('Would you like to include uppercase letters in your password?') 
// Step 3: Ask for use of Lowercase 
var useLowercase = confirm('Would you like to include lowercase letters in your password?') 
// Step 4: Ask for use of numbers 
var useNumbers = confirm('Would you like to include numbers?') 
// Step 5: Ask for use of special characters 
var useSpecialChars = confirm('Would you like to include special characters in your password?') 

// If nothing is selected, the process will restart until parameters are met

if (useLowercase === false && useUppercase === false && useNumbers === false && useSpecialChars === false) {
  alert ("You must select at least one type of character for your password!") 
  return generatePassword()
}

var potentialChars = []

if (useUppercase) {
  potentialChars = potentialChars.concat(Uppercase);
}

if (useLowercase) {
  potentialChars = potentialChars.concat(Lowercase);
} 

if (useNumbers) {
  potentialChars = potentialChars.concat(Numbers);
} 

if (useSpecialChars) {
  potentialChars = potentialChars.concat(special);
} 

var password = ''
for (var i = 0; i < passwordLength; i++) { 
  password = password + potentialChars[getRandomInt (potentialChars.Length)]
}
return password 
}