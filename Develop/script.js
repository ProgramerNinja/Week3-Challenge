// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var special = [" ","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","{","|","}","~",]



// Write password to the #password input
function collectRecq() {
 var passLength = window.prompt("What password length would you like? (8-128)");
  while (8>passLength || passLength>128) {
    window.alert("That is an incompatitable input. Please enter a numeric value between 8 and 128.");
    passLength = window.prompt("What password length would you like? (8-128)");
  };
  var passLower = window.prompt("Would you like to include lowercase characters? (y or n)");
  while (!(passLower == "y" || passLower =="n")) {
    window.alert("That is an incompatitable input. Please enter a (y)es or a (n)o");
    passLower = window.prompt("Would you like to include lowercase characters? (y or n)");
  }
  var passUpper = window.prompt("Would you like to include uppercase characters? (y or n)");
  while (!(passUpper == "y" || passUpper == "n")) {
    window.alert("That is an incompatitable input. Please enter a (y)es or a (n)o");
    passUpper = window.prompt("Would you like to include uppercase characters? (y or n)");
  }
  var passNumeric = window.prompt("Would you like to include numeric characters? (y or n)");
  while (!(passNumeric == "y" || passNumeric == "n")) {
    window.alert("That is an incompatitable input. Please enter a (y)es or a (n)o");
    passNumeric = window.prompt("Would you like to include numeric characters? (y or n)");
  }
  var passSpecial = window.prompt("Would you like to include special characters? (y or n)");
  while (!(passSpecial == "y" || passSpecial == "n")) {
    window.alert("That is an incompatitable input. Please enter a (y)es or a (n)o");
    passSpecial = window.prompt("Would you like to include special characters? (y or n)");
  }
  responseArray = [passLength, passLower, passNumeric, passSpecial, passUpper];
  return responseArray;
};


function writePassword() {
  var userResponse = collectRecq();
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");



 // passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



