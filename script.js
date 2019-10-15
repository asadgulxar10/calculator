var firstOperant = 0;
var secondOperant = 0;
var opType = "";

// decimalen
function insertDecimal(x) {
	var Currentnumber;
	currentNumber = document.getElementById('displayMain').innerHTML;

	// kan alleen als currentnumber nog geen . bevat
	if (!(currentNumber.includes('.'))) {
		inputDigits(x);
	}
}

// zorgt ervoor dat je niet heel veel nullen neer kan zetten
function trimLead(displ) {
	// als displ begint met 0 EN niet begint met 0
	if ((displ.startsWith('0')) && !(displ.startsWith('0.'))) {
		// haalt een 0 weg waardoor de toegevoegde 0 gelijk verdwijnt en het lijkt alsof er niks gebeurt
		newNum = displ.substr(1);
		return newNum;
	} else {
		return displ;
	}
}

// zorgt ervoor dat het getal waarop geklikt wordt in de display verschijnt
function inputDigits(addedNumber) {
	var currentnumber;
	currentNumber = document.getElementById('displayMain').innerHTML;
	currentNumber = currentNumber + addedNumber;
	currentNumber = trimLead(currentNumber);
	document.getElementById('displayMain').innerHTML = currentNumber;
	console.log("displayMain: " + currentNumber);
}

// zet alle variabelen terug naar 0
function clearDisplay() {
	document.getElementById('displayMain').innerHTML = '0';
	document.getElementById('displayTop').innerHTML = '0';
	firstOperant = 0;
	secondOperant = 0;
	opType = "";
}

// schuift firstOperant naar boven samen met opType als er op een opType geklikt wordt
function setOperation(opSymbol) {

	// firstoperant = welk getal er op dat moment in displayMain staat
	firstOperant = document.getElementById('displayMain').innerHTML;
	opType = opSymbol;
	document.getElementById('displayTop').innerHTML = firstOperant + opType;
	document.getElementById('displayMain').innerHTML = '0';
}

// functie voor delen
function opDivide() {
	if (secondOperant == 0) {
		document.getElementById('displayMain').innerHTML = "ERROR";
		alert("DIVIDE BY 0 ERROR");
		setTimeout(clearDisplay, 1500);
	} else {
		document.getElementById('displayMain').innerHTML = firstOperant / secondOperant;
		document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
	}
}

// functie voor vermenigvuldigen
function opMultiply() {
	document.getElementById('displayMain').innerHTML = firstOperant * secondOperant;
	document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
}

// functie voor aftrekken
function opSubstract() {
	document.getElementById('displayMain').innerHTML = firstOperant - secondOperant;
	document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
}

// functie voor optellen
function opAdd() {
	document.getElementById('displayMain').innerHTML = Number(firstOperant) + Number(secondOperant);
	document.getElementById('displayTop').innerHTML = firstOperant + opType + secondOperant + '=';
}

// wanneer er op de "=" knop gedrukt wordt gaat deze functie bepalen welke functie er gebruikt moet worden voor de berekening
function calculateTotal() {
	secondOperant = document.getElementById('displayMain').innerHTML;
	switch (opType) {
		case '/':
			opDivide();
			break;
		case '*':
			opMultiply();
			break;
		case '+':
			opAdd();
			break;
		case '-':
			opSubstract();
			break;
		default:
			//do something if none of operator found
			break;
	}
}
