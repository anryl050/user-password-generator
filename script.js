// The password generator will create a new, secure password with length between 8 to 128 characters based on the selected criteria.

// Step 1:
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

            // Assignment Code            
            var generateBtn = document.querySelector("#generate");
            
            // // Add event listener to generate button
            // generateBtn.addEventListener("click", writePassword);

// Step 2:
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

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

            function generatePassword(){

// Step 3:
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

            confirmEnter = parseInt(prompt("How long would you like your password to be? Select numeric value between 8 and 128."));
            
            console.log(confirmEnter);

            if (confirmNumber !== true){
                confirmEnter = parseInt (
                    prompt("Please select a NUMBER value between 8 and 128")
                );
            }
// Step 4:
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

                while (confirmEnter < 8 || confirmEnter > 128){
                // Validates user's input (if the numeric value is outside of the defined parameters, the value is not accepted).
                    confirmEnter = parseInt(
                        prompt("Invalid entry: Please enter the numeric value between 8 and 128.")
                        );
                    }

                 while (confirmEnter===false) {
                   alert("Invalid Entry: Please enter a numeric value!");
                    confirmEnter = parseInt(
                         prompt("How long would you like your password to be? Select numeric value between 8 and 128.")
                         );
                     }
                
                // Begins prompts for input of other values using the Window confirm() method.
                  confirmAlphaLower = confirm ("Will it include Lowercase letters? If Yes - Click OK. If No - Click Cancel.");
                  confirmAlphaUpper = confirm("Will it include Uppercase letters? If Yes - Click OK. If No - Click Cancel.");
                  confirmNumber = confirm("Will it contain numbers? If Yes - Click OK. If No - Click Cancel.");
                  confirmCharacter = confirm("Will it contain Special Characters? If Yes - Click OK. If No - Click Cancel.");
                

// Step 5:
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

              //  Condition for not choosing to enter any criteria for the PW
              if (confirmAlphaLower===false && confirmAlphaUpper===false && confirmNumber===false && confirmCharacter===false){
                  alert("You must choose one of the criteria!");
               } 
                   
// Step 6:
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
                
                // array to store the selected criteria for the random password 
                var selections = [];

               //based on the criteria selected, the assigned values will be selected for the generation of the random password. 
              if (confirmAlphaLower){
                  selections = selections.concat(alphaLower);
                  } 
              if (confirmAlphaUpper){
                  selections = selections.concat(alphaUpper);
                  }
              if (confirmNumber){
                  selections = selections.concat(number);
                  } 
              if (confirmCharacter){
                  selections = selections.concat(charValue);
                } 

                console.log(selections)
             
              // create an empty string to hold the values from the selections array
              var newPassword = "";

              for (var i=0; i < confirmEnter; i++ ){
                newPassword = newPassword + selections[Math.floor(Math.random() * selections.length)]; 
              }
              return newPassword;
                }

// Step 7:
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

              // Write password to the #password input
              function writePassword() {
                var password = generatePassword();
                var passwordText = document.querySelector("#password");

                passwordText.value = password;
              }

              // Add event listener to generate button
            generateBtn.addEventListener("click", writePassword);