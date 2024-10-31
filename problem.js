/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

// Completed Problem Below

//------------------------------------------------------------------------------

// define a variable "password" which is what the entered password will be matched against.
// second variable to check password length, if it's too short
// create a function with parameter "password" to check against entered value by user
// there will be 5 if else conditions each for the required result.
// add function to run condition to check password length.
// variabe for user to enter password
// finally console log out what the result is for the entered password.

let password = "babo";
let passwordLength = 5;

function checkPassword(enteredPassword) { // to display output for the entered password
    if (enteredPassword === password) {
        return `Access Granted`
    } else if (enteredPassword === "forgot") {
        return `Here is a hint`
    } else if (enteredPassword === "reset") {
        return `Let's reset your account` 
    } else {
        return `Access Denied`
    }
}

function checkLength(enteredPassword) { //to check lenth of the entered password
    if (enteredPassword.length < passwordLength) {
        return `Your password is too short!`
    } else {
        return ``
    }
}

let enteredPassword = "babo" //enter password here

console.log(`${checkPassword(enteredPassword)}. ${checkLength(enteredPassword)}`);
