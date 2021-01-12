//I wrote this over thanksgiving break hiding from relatives so I have a good excuse for my bad code

var optionSelection = [];
var questionNumber = 0;
//first is sound
var questions = [
	"Continue Animations?"
];

function loaded() {
	if (document.cookie.includes("name=GOTEM.ME")) {
		document.getElementById("options").style = "display: none";
		document.getElementById("story").style = "display: none;";
		document.body.style = "padding-top: 0px";
		console.log(document.cookie);
	}
}

function selectedYes() {
	if (questionNumber === 0) {
		var audio = new Audio('sounds/shipAmbience.mp3');
		audio.play();
	}
	optionSelection.push(true);
	nextQuestion();
}
function selectedNo() {
	optionSelection.push(false);
	nextQuestion();
}

function nextQuestion() {
	document.getElementById("questionText").style = "font-size: 35px; padding-left: 6%; color: white; width: 400px; display: inline-block; transition: .5s;";
	setTimeout(changeText, 500);
}

function changeText() {
	if (questionNumber === questions.length) {
		document.getElementById("options").style = "margin: auto; width: 0%; height: 30%; background-color: white; text-align: left; box-shadow: 0px 5px 5px; transition: 1s;";
		document.getElementById("questionText").style = "font-size: 35px; padding-left: 6%; color: white; width: 400px; display: inline-block; transition: .5s; visibility: hidden;";
		document.getElementById("questionText").innerHTML = ".";
		document.getElementById("no").style = "float:right; visibility: hidden; color: white; border-color: white; transition: .03s";
		document.getElementById("yes").style = "foalt:right; visibility: hidden; color: white; border-color: white; transition: .03s";
		setTimeout(cleanQuestionBoard, 1000);
		return;
	}
	document.getElementById("questionText").innerHTML = questions[questionNumber];
	document.getElementById("questionText").style = "font-size: 35px; padding-left: 6%; color: black; width: 400px; display: inline-block; transition: .5s;";
	questionNumber = questionNumber + 1;
}
function cleanQuestionBoard() {
	document.getElementById("options").style = "display: none;";
	document.body.style = "padding-top: 0px";
	setTimeout(beginStory, 1000);
}

function submitResponses() {
	console.log("submitted as:");
	console.log(optionSelection);
	document.cookie = "name=GOTEM.ME; expires=Sat, 03 May 2025 17:44:22 GMT; settings=" + optionSelection;
}

var counter = 0;

//function for updating the log box
function log(input) {
	var parent = document.getElementById("textLog");
	var child = document.createElement("div");
	child.className = "logblock";
	child.id = "text" + counter;

	var insertText = document.createElement("p");
	insertText.className = "logText";
	insertText.innerText = input;
	child.style = "transform: translateY(0px); opacity: 0;";
	child.appendChild(insertText);
	parent.prepend(child);
	counter++;

	var height = child.clientHeight;
	var currentTransform;
	var children = parent.children;
	for (i = 1; i<children.length; i++) {
		currentTransform = children[i].getAttribute("style");
		currentTransform = currentTransform.substring(currentTransform.indexOf("(")+1, currentTransform.indexOf(")"));
		var trans = parseInt(currentTransform,10)+parseInt(height,10);
		children[i].setAttribute("style","transform: translateY(" + trans + "px)");
	}
	setTimeout(makeElementVisible, 100, child);
}

function makeElementVisible(input) {
	input.style = "transform: translateY(0px); opacity: 1;";
}
