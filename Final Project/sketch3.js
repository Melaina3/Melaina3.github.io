let time = 0
let vel = NaN 
let hori_count= 14
let vert_count =23
let colors = ["#06D6A0", "#06D6A0", "#06D6A0",
              "#E84855", "#E84855", "#E84855",
              "#F9DC5C", "#F9DC5C", "#F9DC5C",
              "#3185FC", "#3185FC", "#3185FC",
              "#fffff", "#fffff", "#fffff",]

function setup() {
  createCanvas(400, 400);
  noFill()
  strokeWeight(3)
  blendMode(SCREEN)
  vel = TWO_PI / 300
}

function draw() {
  clear()
  background(0, 0, 32);
  for (let y = 0; y < vert_count; y++){
    for (let t = 0; t < hori_count; t++){
        y_pos = map(sin(time + t / 6 + y / 2), -1, 1, 75, width - 75)
        x_pos = map(y, 0, vert_count - 1, 50, height - 50)
        stroke(colors[t])
        triangle(x_pos, y_pos,85)
    }
  }
  time += vel
}
