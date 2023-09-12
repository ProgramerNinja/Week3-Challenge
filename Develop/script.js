// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
collectRecq(){
  var passLength = window.prompt("What password length would you like? (8-128)");
  if (!8<=passLength>=128) {
    window.alert("That is an incompatitable input. Please enter a numeric value between 8 and 128.");
    passLength = window.prompt("What password length would you like? (8-128)");
  }
  var passLower = window.prompt("Would you like to include lowercase characters? (y or n)");
  if (passLower !== "y" || passLower !== "n") {
    window.alert("That is an incompatitable input. Please enter a (y)es or a (n)o");
    passLower = window.prompt("Would you like to include lowercase characters? (y or n)");
  }
  var passUpper = window.prompt("Would you like to include uppercase characters? (y or n)");
  if (passUpper !== "y" || passUpper !== "n") {
    window.alert("That is an incompatitable input. Please enter a (y)es or a (n)o");
    passUpper = window.prompt("Would you like to include uppercase characters? (y or n)");
  }
  var passNumeric = window.prompt("Would you like to include numeric characters? (y or n)");
  if (passNumeric !== "y" || passNumeric !== "n") {
    window.alert("That is an incompatitable input. Please enter a (y)es or a (n)o");
    passNumeric = window.prompt("Would you like to include numeric characters? (y or n)");
  }
  var passSpecial = window.prompt("Would you like to include special characters? (y or n)");
  if (passSpecial !== "y" || passSpecial !== "n") {
    window.alert("That is an incompatitable input. Please enter a (y)es or a (n)o");
    passSpecial = window.prompt("Would you like to include special characters? (y or n)");
  }
}; return passLength, passLower, passNumeric, passSpecial, passUpper

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  collectRecq();



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



init();