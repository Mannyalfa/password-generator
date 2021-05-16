var char = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "1234567890",
  specialChar: "!@#$%^&*()-=_+[];':\/.,?><"
}

//Choose character. Because user chooses successive sets of variables, we build an "aggregate" variable array  
//using conditional statements rather than concatenate the character sets.  
let criteria = function() {

  let choseChar = "";

  while(choseChar === ""){
    // confirm lowercase selection
    let confirmLower = confirm('Include lowercase letters?');
    if(confirmLower === true){
      alert("Password will contain lowercase letters");
      choseChar = choseChar + char.lowerCase;
    }else{
      alert("Password will NOT contain lowercase letters")
    }

    // Confirm uppercase selection
    let confirmUpper = confirm('Include uppercase letters?');
    if(confirmUpper === true){
      alert("Password will contain uppercase letters");
      choseChar = choseChar + char.upperCase;
    }else{
      alert("Password will NOT contain uppercase letters")
    }

    // Confirm numbers selection
    let confirmNum = confirm('Include numbers?');
    if(confirmNum === true){
      alert("Password will contain numbers");
      choseChar = choseChar + char.num;
    }else{
      alert("Password will NOT contain numbers")
    }

    // Confirm special characters selection
    let confirmSpec = confirm('Include special characters?');
    if(confirmSpec === true){
      alert("Password will contain special characters");
      choseChar = choseChar + char.specialChar;
    }else{
      alert("Password will NOT contain special characters");
    }
    // Alert  if 'no choice'
    if(choseChar === ""){
      alert("Select at least ONE type of character");
    }else{
      return choseChar;
    }
  }
};

// Prompt for password length
let passLength = function(){
  let promptLength = prompt("How many characters in your password? Enter a number between 8 and 128");
  promptLength = parseInt(promptLength);

  //Delete NaN's and decimals
  if(isNaN(promptLength) || Number.isInteger(promptLength) === false || promptLength < 8 || promptLength > 128){
    alert("Enter a length between 8 and 128");
    passLength();
  }else{
    alert(`Password will be ${promptLength} characters long.`)
    return promptLength;
  }
}

// Use for loop to generate password-THIS is where the 'magic' happens!
function generatePassword(){
  let pass = "";
  let chosenLength = passLength();
  let userCriteria = criteria();

  for(i = 1; i <= chosenLength; i++){
    let char = Math.floor(Math.random() * userCriteria.length +1);
    pass += userCriteria.charAt(char);
  }
return pass;
}


// Add generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener 
generateBtn.addEventListener("click", writePassword);