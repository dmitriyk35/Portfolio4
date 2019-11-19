function ageCalc() {

	var a = document.getElementById("birthYr").value;
	var b = document.getElementById("futureYr").value;
	var y = b - a;
	var x = y++;

	alert("You will be either " + y + " or " + x + " in the year " + document.getElementById("futureYr").value + ".");
}
