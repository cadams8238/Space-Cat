let cat;

function preload() {

}


/*
---------------------------------------------------------
setup() only executes once. Elements such as the back-
ground are placed here so they don't execute over and over
unnecessarily.
---------------------------------------------------------
*/

function setup() {
  
  createCanvas(600, 600);
  background(0);
  createBackground();

  cat = new Cat(100,100,50);


}


/*
---------------------------------------------------------
draw() will continuously run unless it's stopped.
It's responsible for drawing each iteration of the game
---------------------------------------------------------
*/

function draw() {
	cat.show();
  
}


/*
---------------------------------------------------------
createBackground() draws out the background for the game.
This includes the outline for the gameboard, the lighter
black box at the bottom of gameboard, and the stars.
---------------------------------------------------------
*/

function createBackground() {

	//creates outline around gameboard
	stroke('#EBEBD3');
  strokeWeight(4);
  noFill();	//noFill needed so that the black background will show through
  rect(0,0,600,600);

  //creates "Milky way", lighter black box at bottom of gameboard
  fill('#1F2223');
  noStroke();
  rect(2,298,596,300); //values take outer stroke into concideration and don't cover it up, stroke = 2 px (approx)
  
  //creates stars
  for (let i = 0; i < 150; i++) {

  	let x = random(1,width),
  			y = random(1,height),
  			diameter = random(1,3);

  	fill('#EBEBD3');
  	noStroke();
  	ellipse(x,y,diameter);
  }

}


// function Cat(x,y,widthHeight) {


// 	//assuming the cat is a square, keeps track of all 4 corners
// 	//t = top, b = bottom

// 	this.tLeft = x;
// 	this.tRight = x + widthHeight;
// 	this.bLeft = y;
// 	this.bRight = y + widthHeight;


// 	this.intersects = function(obstacle) {
// 		return !(this.left > obstacle.right || this.right < obstacle.left ||
// 						 this.right > obstacle.left || this.left < obstacle.right);
// 	}

// 	this.show = function() {
// 		fill('white');
// 		rect(100, 100, 50);
// 	}


// 	update = function() {

// 	}


// }

class object {

	constructor(x,y,widthHeight) {

		this.tLeft = x;
		this.tRight = x + widthHeight;
		this.bLeft = y;
		this.bRight = y + widthHeight;
	}

	intersects(obstacle) {
		return !(this.left > obstacle.right || this.right < obstacle.left ||
						 this.right > obstacle.left || this.left < obstacle.right);
	}
}



class Cat extends object {
	

	show() {
		fill('white');
		rect(100, 100, 50, 50);
	}


	update() {

	}
}





















