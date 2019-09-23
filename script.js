var numColors = 6;
var colors = generateRandomColor(numColors);
pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var color = document.querySelectorAll(".square");
var msg = document.getElementById("message");
var h1 = document.querySelector("h1");
var button1 = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove('selected');
	easyBtn.classList.add("selected");
	numColors = 3;
	colors = generateRandomColor(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <= color.length; i++){
		if(colors[i]){
			color[i].style.background = colors[i];
		} else {
			color[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove('selected');
	hardBtn.classList.add("selected");
	numColors = 6;
	colors = generateRandomColor(numColors);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <= color.length; i++){
		color[i].style.background = colors[i];
		color[i].style.display = "block";
		}
})

for(var i = 0; i < color.length; i++){
	// adding initial colors to squares
	color[i].style.background = colors[i];
	// Adding event listener to squares
	color[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
        console.log(clickedColor, pickedColor)
		if(clickedColor == pickedColor){
			msg.textContent = "CORRECT !"
			changedColor(clickedColor);
			h1.style.background = clickedColor;
			button1.textContent = "PLAY AGAIN"
		} else {
			this.style.background = "#232323";
			msg.textContent = "TRY AGAIN"
		}
	})
}

function changedColor(col) {
	for(var i = 0; i < color.length; i++){
		color[i].style.background = col;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr
}

function randomColor() {
	var R = Math.floor(Math.random() * 256);
	var G = Math.floor(Math.random() * 256);
	var B = Math.floor(Math.random() * 256);
	return "rgb(" + R + ", " + G + ", " + B + ")";

}

button1.addEventListener("click", function(){
	//generating new colors
	colors = generateRandomColor(numColors);
	// picking a new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// changing color of squares
	for(var i=0; i < color.length; i++){
		color[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
	msg.textContent = "";
	this.textContent = "NEW COLORS";
});
