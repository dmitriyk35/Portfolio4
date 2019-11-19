function validateCreditCard() {

  var ccNum = document.getElementById("qt1").value;

  var ccNumSplit = ccNum.split("");

  var sum = 0;



for (var i = ccNum.length; i>0; i--) {
  if(((ccNum.length) === 16))
 {

   document.getElementById("demo").innerHTML = "It is a valid credit card.";
 }
 else {
document.getElementById("demo").innerHTML = "It is NOT a valid credit card.";
}
}


    for (var i = ccNum.length; i>0; i--) {
      if((ccNum[0] != ccNum[i]) || (ccNum[2] != ccNum[i]) || (ccNum[3] != ccNum[i]) || (ccNum[4] != ccNum[i]) || (ccNum[5] != ccNum[i]) ||
     (ccNum[6] != ccNum[i]) || (ccNum[7] != ccNum[i]) || (ccNum[8] != ccNum[i]) || (ccNum[9] != ccNum[i]) ||
     (ccNum[10] != ccNum[i]) || (ccNum[11] != ccNum[i]) || (ccNum[12] != ccNum[i]) || (ccNum[13] != ccNum[i]) || (ccNum[14] != ccNum[i]) || (ccNum[15] != ccNum[i]))
     {

       document.getElementById("demo").innerHTML = "It is a valid credit card.";
     }
     else {
    document.getElementById("demo").innerHTML = "It is NOT a valid credit card. Please enter a 16 digit credit card.";
  }
}

for (var i = ccNum.length; i>0; i--) {
  if(((ccNum[15]%2) === 0))
 {

   document.getElementById("demo").innerHTML = "It is a valid credit card.";
 }
 else {
document.getElementById("demo").innerHTML = "It is NOT a valid credit card.";
}
}




}
