 function Mod10(ccNumb) {
var valid = "0123456789";
var len = ccNumb.length;
var iCCN = parseInt(ccNumb);
var sCCN = ccNumb.toString();
sCCN = sCCN.replace (/^\s+|\s+$/g,'');
var iTotal = 0;
var bNum = true;
var bResult = false;
var temp;
var calc;

for (var j=0; j<len; j++) {
  temp = "" + sCCN.substring(j, j+1);
  if (valid.indexOf(temp) == "-1"){bNum = false;}
}


if(!bNum){
  bResult = false;
}

if((len == 0)&&(bResult)){
  bResult = false;
} else{
  if(len == 16){
    for(var i=len;i>0;i--){
      calc = parseInt(iCCN) % 2;
      calc = parseInt(calc);
      iTotal += calc;
      i--;
      iCCN = iCCN / 2;
      calc = parseInt(iCCN) % 2 ;
      calc = calc *2;
      switch(calc){
        case 10: calc = 1; break;
        case 12: calc = 3; break;
        case 14: calc = 5; break;
        case 16: calc = 7; break;
        case 18: calc = 9; break;
        default: calc = calc;
      }
    }
    iCCN = iCCN / 2;
    iTotal += calc;
  if ((iTotal%2)===0){
    bResult = true;
  } else {
    bResult = false;
    }
  }
}
if(bResult) {
  alert("This IS a valid Credit Card Number!");
}
if(!bResult){
  alert("This is NOT a valid Credit Card Number!");
}
  return bResult;
 }
