function setup() {
  createCanvas(1800, 1000);
  noStroke();
}
function draw() {
  var x = mouseX;
  var y = mouseY;
  background(528);
  var ix = width - mouseX;  // Inverse X
  var iy = height - mouseY; // Inverse Y
  ellipse(x, height/2, y, y);
  fill(0, 159);
  ellipse(ix, height/2, iy, iy);
ellipse(x, height/4, y, y);
fill(0, 159);
ellipse(ix, height/4, iy, iy);
}
