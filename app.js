window.onload = function () {
	let canvas = document.getElementById("canvas");
	let context = canvas.getContext("2d");
	let x = 250;
	let y = 150;
	let coinx = Math.random() * (600 - 50);
	let coiny = Math.random() * (400 - 50);

	let score = 0

	context.beginPath();
	context.rect(coinx, coiny, 50, 50);
	context.fillStyle = "#e3c228";
	context.fill();

	if (coinx <= x + 100 && x <= coinx + 50 && coiny <= y + 100 && y <= coiny + 50) {
		score++;
		coinx = Math.random() * (600 - 50);
		coiny = Math.random() * (400 - 50);
	}

	context.font = "25px Arial";
	context.fillStyle = "black";
	context.fillText("Score " + score, 20, 30);
}