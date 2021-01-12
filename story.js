var text = [
	["All around you is darkness",false],
	["Your only feeling from the space around you is frigid air",false],
	["Every breath hurts not just from the cold, but from fine grains of dust entering your lungs",false],
	["Your head is racked with a splitting headache",false],
	["You realize gravity is off",false],
	["You move your uniform to shield your mouth from the metal dust hanging in air",false],
	["Metal creaks and groans around you",false],
	["The cerebral interface shows no useful information",false],
	["Slowly you glide through darkness to an age-old terminal",false],
	["Tapping it brings just a blinking cursor to the screen, but it still lights up the room",false],
	["Must be a small bit of power left in the grid",false],
	["You're not sure how to use it",false],
	["\"Status Report,\" you croak",false],
	["A complete guess",false],
	["INSUFFICIENT POWER",true],
	["This uses the last bit of power remaining, and it blinks off",false],
	["You remember something about where reserves are kept",false],
	["Painfully reaching down, and bracing on the console, you tear off the bottom panel",false],
	["Feeling around, you find a large rectangular shape",false],
	["Rotating it lights up the room",false],
	["Blinded by light",false],
	["You croak again, weaker, \"Status Report\"",false],
	["SCANNING...",true],
	["HULL BREACHES DECKS 3 TO 489",true],
	["POWER...OFFLINE",true],
	["LIFE SUPPORT...OFFLINE",true],
	["CREW COMPLEMENT...1 OF 60500",true],
	["The emergency power blinks out, sending you back to absolute darkness",false],
	["This is an example of the game to come, check back sometime to see the progress",false],
];
var intro = false;
var currentText = 0;

function beginStory() {
	intro = true;
	setStyle("visibility: visible; text-align: center; opacity: 1; transition: 1s;");
}

document.onkeypress=function(e) {
	if (intro) {
		updateText();
	}
};

document.addEventListener("click", bodyClicked, true)
function bodyClicked() {
	if (intro) {
		updateText();
	}
}

function updateText() {
	try {
		makeTransparent();
		setTimeout(setText, 500,text[currentText][0]);
		setTimeout(makeOpaque, 1000);
	}
	catch {
		submitResponses();
		setTimeout(closeIntro, 1000);
	}
}

function setStyle(input) {
	document.getElementById("storyText").style = input;
}

function setText(input) {
	document.getElementById("storyText").innerHTML = input;
}

function makeTransparent() {
	try {
		if (text[currentText-1][1]) {
			setStyle("visibility: visible; text-align: center; opacity: 0; transition: .5s; font-family: 'Turret Road', cursive;");
		}
		else {
			setStyle("visibility: visible; text-align: center; opacity: 0; transition: .5s;");
		}
	}
	catch {
		setStyle("visibility: visible; text-align: center; opacity: 0; transition: .5s;");
	}

}
function makeOpaque() {
	var font = "";
	if (text[currentText][1]) {
		font = " font-family: 'Turret Road', cursive;";
	}
	setStyle("visibility: visible; text-align: center; opacity: 1; transition: .5s;" + font);
	currentText = currentText+1;
}
function closeIntro() {
	document.getElementById("story").style = "visibility: hidden";
	setTimeout(stopIntroDisplay, 500);
	setTimeout(showGameGui,750);
}
function stopIntroDisplay() {
	document.getElementById("story").style = "display: none;";
}
function showGameGui() {
	document.getElementById("infoblock").style = "visibility: visible"
	document.getElementById("textLog").style = "visibility: visible"
}

function updateMaterials() {
	var elements = document.getElementById("infoblock").children;
	for (let value in materials) {
		var breakLoop = false;
		for (i = 0; i<elements.length; i++) {
			if (elements[i].id === value) {
				elements[i].innerHTML = value + ": " + materials[value];
				breakLoop = true;
			}
		}
		if (!breakLoop) {
			var newElement = document.createElement("div");
			newElement.className = "material";
			newElement.id = value;
			newElement.innerText = materials[value];
			document.getElementById("infoblock").appendChild(newElement);
		}
	}
}

//Materials board
var materials = {
	"Dark Sludge" : 100,
	"Red Water": 3,
	"Frozen Meat": 1,
};