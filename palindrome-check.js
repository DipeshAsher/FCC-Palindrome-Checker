function palindrome(str) {
  var removedChars = /[\W_]/g;  //RegExp to remove unwanted characters but saved to a variable
  var lowerString = str.toLowerCase().replace(removedChars, '');  //Create a lower string variable and replace takes away all the characters not required
  var reverseString = lowerString.split('').reverse().join('');  //Reverse the string we have to save to variable
  if (lowerString === reverseString) {
    console.log(lowerString + " = " + reverseString);
    return true;
  }
  else {
    console.log(lowerString + " != " + reverseString);
    return false;
  }
}

palindrome("eye"); //true
palindrome("_eye"); //true
palindrome("race car"); //true
palindrome("not a palindrome"); //false
palindrome("A man, a plan, a canal. Panama"); //true
palindrome("never odd or even"); //true
palindrome("nope"); //false
palindrome("almostomla"); //false
palindrome("My age is 0, 0 si ega ym."); //true
palindrome("1 eye for of 1 eye."); //false
palindrome("0_0 (: /-\ :) 0-0"); //true
palindrome("five|\_/|four"); //false