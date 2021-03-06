let snakeX = [];
let snakeY = [];

function setup() {
createCanvas(800, 800);
}

function draw() {
background(528);

/*The push(##) method adds the value ## to the end of an array.  In the example to the right, the arrays for snakeX and snakeY initially have no values in them.*/
snakeX.push(mouseX);
snakeY.push(mouseY);

/*
To remove a value from an array, use the splice(loc, num) method.  This goes to the index value specified by loc and removes num values from the array, shortening it.

The following if() statements checks to see if the snakeX.length is longer than 50 values and removes the oldest one (the first one) if it is.
*/

if(snakeX.length>50){
snakeX.splice(0,1);
snakeY.splice(0,1);
}

for(let i = 0; i<snakeX.length; i++){
noStroke();
fill(500, 0, 2*i, 2*i);
rect(snakeX[i], snakeY[i], i, i); //try changing the graphic primitive-type to get other shapes to appear
}
for(let k= 0; k<snakeY.length; k++){
  noStroke();
  fill(100, 0, 2*k, 2*k);
  rect(snakeX[k]+80, snakeY[k]+80, k+20, k+20); //try changing the graphic primitsive-type to get other shapes to appear
  }
}
