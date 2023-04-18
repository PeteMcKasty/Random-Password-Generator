// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  getParameters()

}
function getParameters() {
  var useLowercase = confirm("Do you want to include lowercase characters?");
  var useUppercase = confirm("Do you want to include uppercase characters?");
  var useNumeric = confirm("Do you want to include numeric characters?");
  var useSpecial = confirm("Do you want to include special characters?");
}

  while (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type for your password.");
    useLowercase = confirm("Do you want to include lowercase characters?");
    useUppercase = confirm("Do you want to include uppercase characters?");
    useNumeric = confirm("Do you want to include numeric characters?");
    useSpecial = confirm("Do you want to include special characters?");
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
