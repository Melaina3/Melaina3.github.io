function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
//to be saved as a .js file 
// CHANGE the digits themselves, the 2d shape-type, the number of those shapes, where/how they relate to everyother
//DO NOT CHANGE the stuff in the setup related to the Canvas
function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(204);
  // Neck
  stroke(10); // Set stroke to black
  line(245,257, 245, 162); // Left
  line(260, 257, 260, 162); // Middle
  line(276, 257, 276, 162); // Right
  // Antennae
  line(276, 155, 346, 112); // Small
  line(276, 155, 306, 56); // Tall
  line(276, 155, 342, 170); // Medium
  // Body
  noStroke(); // Disable stroke
  fill(color(0, 0, 255));// Set fill to blue
  ellipse(254, 320, 28, 28); // Antigravity orb
  fill('rgba(100%,0%,10%,.6)');// Set fill to red
  rect(204, 267, 120, 120); // Main body
  fill(255, 204,0);// Set fill to yellow
  rect(219, 260, 90, 10); // Yellow stripe
  fill(255, 204,0);// Set fill to yellow
  rect(114, 269, 90, 20); // Left arm
  fill(255, 204,0);// Set fill to yellow
  rect(324, 269, 90, 20); // Right arm
  fill(255, 204,0);// Set fill to yellow
  rect(268, 387,50, 15); // Right foot
   fill(255, 204,0);// Set fill to yellow
  rect(209, 387,50, 15); // Left foot
  fill(255, 204, 0);// Set fill to yellow
  ellipse(255, 150, 85, 70); // Head
  fill(255); // Set fill to white
  ellipse(288, 150, 10, 14); // Right Large eye
  fill(51);// Set fill to black
  ellipse(288,150, 8, 8); // Pupil
  fill('rgba(100%,0%,10%,.6)'); // Set fill to red
  ellipse(263, 148, 5, 5); // Small eye 1
  ellipse(296, 130, 4, 4); // Small eye 2
  ellipse(305, 162, 3, 3); // Small eye 3
  fill(255); // Set fill to white
  ellipse(220, 150, 10, 14); // Left Large eye
  fill(51);// Set fill to black
  ellipse(220,150, 8, 8); // Pupil
  fill('rgba(100%,0%,10%,.6)'); // Set fill to red
  ellipse(245, 148, 5, 5); // Small eye 1
  ellipse(210, 130, 4, 4); // Small eye 2
  ellipse(202, 162, 3, 3); // Small eye 3
  arc(250, 310, 50, 50, 0, HALF_PI);
}