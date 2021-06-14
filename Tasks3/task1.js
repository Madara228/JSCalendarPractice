
window.onload = function () {
    var str = "ABCD abcd A";
	document.getElementById("element1").innerHTML = str.big();
	document.getElementById("element2").innerHTML = str.blink();
	document.getElementById("element3").innerHTML = str.bold();
	document.getElementById("element4").innerHTML = str.italics();
	document.getElementById("element5").innerHTML = str.small();
	document.getElementById("element6").innerHTML = str.strike();
	document.getElementById("element7").innerHTML = str.sub();
	document.getElementById("element8").innerHTML = str.sup();
	document.getElementById("element9").innerHTML = str.fixed();
};
