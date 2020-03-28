
"use strict";
/*
var body = document.querySelector('body')
var block = body.querySelector('.block')


var button = document.getElementById("clickable")
	button.addEventListener("click", () => {
		block.classList.remove("yellow")
		block.classList.add('hidden')
});


//var yellowBlock = document.querySelector('.yellowButton')

var yellowButton = document.getElementById("yellowButton")
	yellowButton.addEventListener("click", () => {
		block.classList.add('yellow')
});


function fillBody(color) {

	body.classList.add(color);
};*/




/*var setup = document.querySelector('.setup')

var userNameInput = setup.querySelector(".setup-user-name")

userNameInput.addEventListener('keydown', (e) => {
	if (e.keyCode === 13) {
		userNameInput.classList.add("green")

	};
});
*/







//MOVE AND DRAG OBJECT WITH MOUSE


/*var circle = document.querySelector(".circle")
var bobo = document.querySelector(".bobo")



bobo.addEventListener("mousedown", (evt) => {
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX,
		y: evt.clientY,
	};

	var dragged = false;


	var onMouseMove = (moveEvt) => {
		moveEvt.preventDefault();
		dragged = true;

		var shift = {
			x: startCoords.x - moveEvt.clientX,
			y: startCoords.y - moveEvt.clientY
		};

		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		};

		bobo.style.top = (bobo.offsetTop - shift.y) + "px";
		bobo.style.left = (bobo.offsetLeft - shift.x) + "px";
		bobo.style.background = "red";

	}

	var onMouseUp = function (upEvt) {
		upEvt.preventDefault();

		document.removeEventListener("mousemove", onMouseMove);
		document.removeEventListener("mouseup", onMouseUp);

		bobo.style.background = "blue";



	}

	document.addEventListener("mousemove", onMouseMove);
	document.addEventListener("mouseup", onMouseUp);
});
*/





// ЗАДАЧА НА СОБЕСЕДОВАНИИ
// 5 ЛЕКЦИЯ 1:40

var buttons = document.querySelectorAll("button");

var addClickListener = function(button) {
	button.addEventListener("click", (e) => {
		console.log(button.textContent)
	});
};


for (var i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	addClickListener(button)
}

