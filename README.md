# Random Password Generator Tool

## Project Description

The objective of the Challenge 3 was to create a randowm password genarator application that would produce a strong password that would meet security requirements.

## Application Summary

Link to the deployed application: https://anryl050.github.io/user-password-generator/ 

To execute, application needs to be opened in the browser.

![Password Generator](https://user-images.githubusercontent.com/118693401/212821482-05b7be5f-0e03-406a-be2f-a81e045308c0.gif)

### Summary

Once application is opened in the browser window, the user can click on "Generate Password" button.
![Image 1](https://user-images.githubusercontent.com/118693401/212821871-9ba32595-e543-48ea-8a90-962c72cd4746.png)

Once the button is pressed a promp window is displayed to guide the user through the password criteria selection. 
![image 2](https://user-images.githubusercontent.com/118693401/212822095-d7d4da49-b663-4560-9a43-a87d6379b952.png)

Once the password criteria is selected, the password is successfully generated.
![image 3](https://user-images.githubusercontent.com/118693401/212822292-3ab47999-12ff-4b88-a569-f79b36555cba.png)

## Project's Acceptance Criteria

- When a user clicks the button to generate a password, then he/she is presented with a series of propmps for the password criteria.
- Once prompted for password criteria, the user can select which criteria to include in the password:
    -   determine the lenght of the password,
    -   selected numbers, upper and/or lower case letters, and special characters.
 - The length of the password must be between 8 and 128 characters.
    - If a password if selected outside of the defined range, an error message will be received to re-evaluate the choice and input number within the       range.
    - If user enter's string values (such as letters), an error message will be received notifying the user to input numeric value.
- The user must select at least one criteria to generate the password.
- Based on the selected criteria, the password generator will produce the desired password.
- The generated password will be displayed in the application's window.

## Technology Used

The website was built using HMTL and CSS programing languages.
The JavaScript was used to trigger actions behind the "Generate Password" button. 

## JS Features Used
To create the password generator the following multiple features of the JavaScript were used:
- Variable declaration
- Event listener, which produced the action behind the button.
- additional varibale to concat the values from the previous defined arrays
- conditional statements to trigger actions for the false statements.
- empty array to collect the random variable selection from previously defined arrays
- empty string to output the generated random password
- Math.floor(Math.random()) method to generate a random selection of the variable. 
