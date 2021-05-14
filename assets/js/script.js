var char = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "1234567890",
  specialChar: "!#$%&'()*+,-./\:;<=>?@[]^_`{|}~"
}
//Choose characters
let criteria = function() {

  let choseChar = "";
//Prompt for password length
let passLength = function(){
  let promptLength = prompt("Enter a length between 8 and 128");
  promptLength = parseInt(promptLength);

  //Delete NaN and decimals - integers only
  if(isNaN(promptLength) || Number.isInteger(promptLength) === false || promptLength < 8 || promptLength > 128){
    alert("You must enter a number between 8 and 128");
    passLength();
  }else{
    alert(`Your password will be ${promptLength} characters long.`)
    return promptLength;
  }
}

  while(choseChar === ""){
    // select lowercase
    let confirmLower = confirm('Include lowercase letters in your password?');
    if(confirmLower === true){
      alert("Your password will contain lowercase letters");
      choseChar = choseChar + char.lowerCase;
    }else{
      alert("Your password will NOT contain lowercase letters")
    }

    // select uppercase
    let confirmUpper = confirm('Include uppercase letters in your password?');
    if(confirmUpper === true){
      alert("Your password will contain uppercase letters");
      choseChar = choseChar + char.upperCase;
    }else{
      alert("Your password will NOT contain uppercase letters")
    }

    // select numbers
    let confirmNum = confirm('Include numbers in your password?');
    if(confirmNum === true){
      alert("Your password will contain numbers");
      choseChar = choseChar + char.num;
    }else{
      alert("Your password will NOT contain numbers")
    }

    // select special characters
    let confirmSpec = confirm('Include special characters in your password?');
    if(confirmSpec === true){
      alert("Your password will contain special characters");
      choseChar = choseChar + char.specialChar;
    }else{
      alert("Your password will NOT contain special characters");
    }
    // Alert if no choice
    if(choseChar === ""){
      alert("You must select at least one type of character");
    }else{
      return choseChar;
    }

   