# Random Password Generator Tool

## Project Description

The objective of the Challenge 3 was to create a randowm password genarator application that would produce a strong password that would meet security requirements.

## Application Summary

#### Link to the deployed application: https://anryl050.github.io/user-password-generator/ 

To execute, application needs to be opened in the browser.

![Password Generator](https://user-images.githubusercontent.com/118693401/212824005-d604df46-75fb-4b14-9b21-7a5e54739c9c.gif)


### Summary

- Once application is opened in the browser window, the user can click on "Generate Password" button.

![Image 1](https://user-images.githubusercontent.com/118693401/212823456-1ba75cc3-a949-40d0-9ac8-8cea2270de11.png)


- Once the button is pressed a promp window is displayed to guide the user through the password criteria selection. 

![image 2](https://user-images.githubusercontent.com/118693401/212823476-57a91064-2f93-45cd-9c40-7acb61c49f11.png)


- Once the password criteria is selected, the password is successfully generated.

![image 3](https://user-images.githubusercontent.com/118693401/212823501-2b52c355-77dd-4dfe-899f-6140d5ea2659.png)


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
To create the password generator the following features of the JavaScript were used:
- Variable declaration.
- Event listener, which produced the action behind the button.
- additional varibale to concat the values from the previous defined arrays.
- conditional statements to trigger actions for the false statements.
- empty array to collect the random variable selection from previously defined arrays.
- empty string to output the generated random password.
- Math.floor(Math.random()) method to generate a random selection of the variable. 
