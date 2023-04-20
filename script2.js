var passwordLenght = 10;
// this will be an arrey containing all type of characters from bellow arreys the user chose 
var choiceContainer =[];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacter = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", "<", "=", " > ", " ? ", "@", "[", "`", "{", "|", "}", "~"];


var generateBtn = document.querySelector("#generate");


// Add event listener to generate button will call the "writePassword" function
generateBtn.addEventListener("click", writePassword);

//write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //returns true or false
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
    var finalPassword = generatePassword();
    passwordText.value = finalPassword;
  } else {
  passwordText.value = "";
  }
}
 
//Generate password based on criterea 
function generatePassword(){
  var password = "";
  for(var i = 0; i < passwordLenght; i++) {
    var randomCharacter = Math.floor(Math.random() * choiceContainer.length);
    password = password + choiceContainer[randomCharacter];
  }
return password;//generated password will go here
}

//Need to prompt the user for the passwor criteria 
function getPrompts(){
  //reset to empty
  choiceContainer = [];
  //password lenght between 8-128 
  passwordLenght = parseInt(prompt("Pick your password length: 8-128"));
//NaN - not a number... isNaN returnes true if a value is Not A Number. Converts the value into number before testing it. 
  if(isNaN(passwordLenght) || passwordLenght <8 || passwordLenght >128) {
    alert("Lets try again! Please enter a number 8-128.");
    return false;
  } 
//do they want numbers?
  if (confirm("Would you like your password to include NUMBERS?")){
    choiceContainer = choiceContainer.concat(number);
  }
//do they want lower case
  if (confirm("Would you like your password to include LOWER CASE LETTERS?")){
    choiceContainer = choiceContainer.concat(alphaLower);
  }
//do they want upper case
  if (confirm("Would you like your password to include UPPER CASE LETTERS?")){
    choiceContainer = choiceContainer.concat(alphaUpper);
  }
//do they want special characters
  if (confirm("Would you like your password to include SPECIAL CHARACTERS?")){
    choiceContainer = choiceContainer.concat(specialCharacter);
  }

  return true;

}