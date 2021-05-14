var char = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "1234567890",
  specialChar: "!@#$%^&*()-=_+[];':\/.,?><"
}

//Choose characters
let criteria = function() {

  let choseChar = "";

  while(choseChar === ""){
    // confirm lowercase
    let confirmLower = confirm('Include lowercase letters in your password?');
    if(confirmLower === true){
      alert("Your password will contain lowercase letters");
      choseChar = choseChar + char.lowerCase;
    }else{
      alert("Your password will NOT contain lowercase letters")
    }

    // Confirm uppercase
    let confirmUpper = confirm('Include uppercase letters in your password?');
    if(confirmUpper === true){
      alert("Your password will contain uppercase letters");
      choseChar = choseChar + char.upperCase;
    }else{
      alert("You have chosen to omit uppercase letters from your password")
    }

    // Confirm numbers
    let confirmNum = confirm('Include numbers in your password?');
    if(confirmNum === true){
      alert("Your password will contain numbers");
      choseChar = choseChar + char.num;
    }else{
      alert("Your password will NOT contain numbers")
    }

    // Confirm special characters
    let confirmSpec = confirm('Include special characters in your password?');
    if(confirmSpec === true){
      alert("Your password will contain special characters");
      choseChar = choseChar + char.specialChar;
    }else{
      alert("Your password will NOT contain special characters");
    }
    // Alert no choice
    if(choseChar === ""){
      alert("You must select at least one type of character");
    }else{
      return choseChar;
    }
  }
};

// Prompt for password length
let passLength = function(){
  let promptLength = prompt("How long do you want your password to be? Please enter a number between 8 and 128");
  promptLength = parseInt(promptLength);

  //Delete NaN's and decimals-integers only
  if(isNaN(promptLength) || Number.isInteger(promptLength) === false || promptLength < 8 || promptLength > 128){
    alert("Enter a length between 8 and 128");
    passLength();
  }else{
    alert(`Password will be ${promptLength} characters long.`)
    return promptLength;
  }
}

// Generate password using criteria selected
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


// References to  #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener 
generateBtn.addEventListener("click", writePassword);