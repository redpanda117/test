function textInput(){
var input = document.getElementById("textField").value;
   document.getElementById("textEnter").innerHTML = input;
  document.getElementById("reverseString").innerHTML = reverseText(input);
  //console.log(input); 
  //clear input field after button clicked
  document.getElementById("textField").value= "";
  }
//function that reverse the text the user enter
function reverseText(str) {
  //string has more than 2 characters
 if(typeof str === 'string' && str.length >= 2){
  //if input is more than one letter then run this code 
   const arr = str.trim().split(''),
        alpha = arr.reverse().join('');  
       return alpha;
}else{
    console.log ("string not long enough")
    } 
}