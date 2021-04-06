// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
  var lenghtOfPassword = parseInt(prompt("You must enter 8 characters including special characters, a number and a capital letter"));
 document.getElementById('password')
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
