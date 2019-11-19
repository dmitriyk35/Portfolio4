/*function cashRegister () {



    var y = (document.getElementById("qt1").value * 1.25) + (document.getElementById("qt2").value * .99) + (document.getElementById("qt3").value * 25.01) + (document.getElementById("qt4").value * .60) + (document.getElementById("qt5").value * 10.34) + (document.getElementById("qt6").value * 22.36);


    document.getElementById("demo").innerHTML = "Your total is: $" + y;
}*/

function cashRegister () {
   var y = (document.getElementById("qt1").value * 1.25) + (document.getElementById("qt2").value * .99) + (document.getElementById("qt3").value * 25.01) + (document.getElementById("qt4").value * .60) + (document.getElementById("qt5").value * 10.34) + (document.getElementById("qt6").value * 22.36);
  
  var shoppingCart = [
    {item: "Banana",
     price: 1.25,
     qty: document.getElementById("qt1").value},
    {item: "Grapes",
     price: 0.99,
     qty: document.getElementById("qt2").value},
    {item: "T-shirt",
     price: 25.01,
     qty: document.getElementById("qt3").value},
     {item: "Apple",
     price: 0.60,
     qty: document.getElementById("qt4").value},
    {item: "Oranges",
     price: 10.34,
     qty: document.getElementById("qt5").value},
    {item: "Protein Shake",
     price: 22.36,
     qty: document.getElementById("qt6").value},
     ];
    
    var receipt = "";
    
    for (var i = 0; i < shoppingCart.length; i++) {
     receipt += shoppingCart[i].item + " @ $" + shoppingCart[i].price + " @ " + shoppingCart[i].qty + " pieces" + "<br>";
    }
    document.getElementById("demo").innerHTML = "Here is your receipt: <br>" + receipt + "<br>" + "<strong>Your total is: " + y;
}
//cashRegister();



    /*var x = document.getElementById("frm1");
    var number = "";
    var i;
    for (i = 0; i < x.length; i++) {
      number = number + x.elements[i].value + "Banana @ $1.25: <br>";
    }
    document.getElementById("demo").innerHTML = number + "Your total is " + y;*/



/*var x = {
    name: "banana",
    price: 1,
    qty: 2
  },
  {
    name: "apple",
    price: 2,
    qty: 5
  }
]

$2
$10
onclick
var x = document.getElementById("appl");
x.addEventListner("click,""function())*/
