// The password genrator will create a password with lenght betwee 8 to 128 characters based on the selected criteria.

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create Arrays for the criteria values
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charValue = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//User Input Values
var confirmEnter;
var confirmNumber;
var confirmCharacter;
var confirmAlphaLower;
var confirmAlphaUpper;

//Initial promp to begin generation of the PW using the Window promt() method (displays the dialog box that prompts the user for input (returns value if the OK button is pressed))

function generatePassword(){
  confirmEnter = parseInt(prompt("How long would you like your password to be? Select numeric value between 8 and 128."));

//Conditions to validate the user input (if not a numeric value)
if (confirmEnter===false) {
  alert("Invalid Entry: Please enter a numeric value!"); 


// question: how can i make this to prompt another option at entering value without the prompt closing?


} 
// Validates user's input (if the numeric value is outside of the defined parameters, the value is not accepted and the user must enter numeric value within the acceptable range)
else if (confirmEnter < 8 || 128 < confirmEnter) {
  confirmEnter = parseInt(prompt("Invalid entry: Please enter the numeric value between 8 and 128."))
} 
// Begins prompts for input of other values using the Window confirm() method (displays the a dialog box with a message, OK and Cancel buttons)
else {
  confirmAlphaLower = confirm ("Will it include Lowercase letters? If Yes - Click OK. If No - Click Cancel.");
  confirmAlphaUpper = confirm("Will it include Uppercase letters? If Yes - Click OK. If No - Click Cancel.");
  confirmNumber = confirm("Will it contain numbers? If Yes - Click OK. If No - Click Cancel.");
  confirmCharacter = confirm("Will it contain Special Characters? If Yes - Click OK. If No - Click Cancel.");
};

// Condition for not choosing to enter any criteria for the PW
// If (confirmAlphaLower===false || confirmAlphaUpper===false || confirmNumber===false || confirmCharacter===false){
//   alert("You must choose one of the criteria!");
// } else if (confirmAlphaLower===true || confirmAlphaUpper===true || confirmNumber===true || confirmCharacter===true) {

// }


}  
  





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
