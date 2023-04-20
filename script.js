// Assignment Code
let generateBtn = document.querySelector("#generate");
let passwordLength = 0
let useLowercase = false;
let useUppercase = false;
let useNumeric = false;
let useSpecial = false;
let parameters = "";
let characterSet = "";
let lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numericChars = "0123456789"
let specialChars = "!#$%&()*"

function checkLength() {
  var passwordLength1 = prompt("Enter the length of the password (between 8 and 128 characters):");
  while (isNaN(passwordLength1) || passwordLength1 < 8 || passwordLength1 > 128) {
    passwordLength1 = prompt("Please enter a valid length for your password (between 8 and 128 characters):");
  }
  return passwordLength1;
}

function getParameters() {
  useLowercase = confirm("Do you want to include lowercase characters?");
  useUppercase = confirm("Do you want to include uppercase characters?");
  useNumeric = confirm("Do you want to include numeric characters?");
  useSpecial = confirm("Do you want to include special characters?");
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type for your password.");
    useLowercase = confirm("Do you want to include lowercase characters?");
    useUppercase = confirm("Do you want to include uppercase characters?");
    useNumeric = confirm("Do you want to include numeric characters?");
    useSpecial = confirm("Do you want to include special characters?");
  }
  if (useLowercase) {
    characterSet += lowercaseChars;
  }

  if (useUppercase) {
    characterSet += uppercaseChars;
  }

  if (useNumeric) {
    characterSet += numericChars;
  }

  if (useSpecial) {
    characterSet += specialChars;
  }

  return characterSet;
}

function generatePassword() {
  var password1 = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomize = Math.floor(Math.random() * characterSet.length);
    password1 += characterSet[randomize];
  }
  return password1;
}

// Write password to the #password input
function writePassword (){
  passwordLength = checkLength()
  parameters = getParameters()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
