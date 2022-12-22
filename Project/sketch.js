let yPos = 0;
function setup() {
  // create canvas (width,height)
  createCanvas(550,500)
  // setup() runs once
  frameRate(80);
}
function draw() {
  // draw() loops forever, until stopped
  background(204);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}
