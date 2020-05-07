function validateCreditCard() {

  var ccNum = document.getElementById("qt1").value;

  var ccNumSplit = ccNum.split("");

  var sum = 0;



for (var i = ccNum.length-1; i >= 0; i--) {
    sum = parseInt(ccNum[i]) + sum;
    console.log(sum);
    }

for (i = ccNum.length-1; i >= 0; i--) {
  if(((ccNum.length) < 16) || ((ccNum.length) > 16))
     {
      document.getElementById("demo").innerHTML = "It is NOT a valid credit card. Enter a card with only 16 digits.";
     }
     else if(sum < 16)
     {
      document.getElementById("demo").innerHTML = "It is NOT a valid credit card. <br> Enter a card with entire value greater than 16.";
     }
     else if((ccNum[0] === ccNum[i]) && (ccNum[2] === ccNum[i]))
     {
      document.getElementById("demo").innerHTML = "It is NOT a valid credit card. <br>Same values for all digits are not allowed.";
     }
     else if(((ccNum[15]%2) !== 0))
     {
      document.getElementById("demo").innerHTML = "It is NOT a valid credit card. <br>Last digit must be an even number.";
     }
     else
     {
      document.getElementById("demo").innerHTML = "It is a valid credit card.";
     }
    }

}
