var circle = document.querySelector(".circle")
var square = document.querySelector(".square")


function moveElement(element) {
	element.addEventListener("mousedown", (evt) => {
		evt.preventDefault();

		element.style.background = "red";
		element.style.transition = "background-color 0.8s 0.1s ease";

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

			element.style.top = (element.offsetTop - shift.y) + "px";
			element.style.left = (element.offsetLeft - shift.x) + "px";
			if (element == square || circle) {
				element.style.background = "blue";
				element.style.transition = "background-color 0.8s 0.1s ease";
			}
		}

		var onMouseUp = function (upEvt) {
			upEvt.preventDefault();

			document.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseup", onMouseUp);
			if (element == circle || square) {
				element.style.background = "yellow";
				element.style.transition = "background-color 0.8s 0.1s ease";
			}
		}

		document.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseup", onMouseUp);
	});
}


moveElement(circle)
moveElement(square)
