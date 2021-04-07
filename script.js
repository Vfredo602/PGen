//Create global variables to store characters types, and create global variables//
var upperCaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var specialChars = [
  "@",
  "%",
  "+",
  ",",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//function to get input by using promts for the characters types and lenghtofPassword//
function passwordPromts() {
  //variable to grab and store user input and parse into an integer"
  passwordText.value = password;
  var lenghtOfPassword = parseInt(
    prompt(
      "You must enter at least 8 characters and no more than 128 including special characters, a number and a capital letter"
    )
  );
  //check input to see it is 8-128 characters long
  if (lenghtOfPassword < 8) {
    alert("Your password must be at least 8 characters long.");
    return;
  }
  if (lenghtOfPassword > 128) {
    alert("Your password must be less than 128 characters long.");
    return;
  }

  // variable to ask user if they want to upperCase characters, and store the boolean value
  var confirmUppercase = confirm(
    "Do you want uppercase characters in your password?"
  );
  var confirmLowercase = confirm(
    "Do you want lowercase characters in your password?"
  );
  var confirmSpecial = confirm(
    "Do you want special characters in your password?"
  );
  var confirmNumber = confirm(
    "Do you want numbers characters in your password?"
  );

  //validate if user has chosen characters types

  if (
    confirmUppercase === false &&
    confirmLowercase === false &&
    confirmSpecial === false &&
    confirmNumber === false
  ) {
    alert("You must select a character type.");
    return;
  }
  //variable to store user input
  var pwChoices = {
    // create key value pairs for user input (below are objects)
    lenghtOfPassword: lenghtOfPassword,
    uppercase: confirmUppercase,
    lowercase: confirmLowercase,
    special: confirmSpecial,
    number: confirmNumber,
  };
  return pwChoices;
}

//function to randomize the array from the global variables.
function randomize(array) {
  //create a variable to get a random index in the arrays (global variables of characters)
  var randomIndex = Math.floor(Math.random() * array.length);
  // Storing targeted indexes from the getIndex variable in another variable
  var randomArray = array[getIndex];
}
return randomArray;
// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generatePassword.addEventListener("generatePassword");
