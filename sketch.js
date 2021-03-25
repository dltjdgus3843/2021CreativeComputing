let x, y, z;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(243, 205, 160);
}

function draw() {
  if (mouseIsPressed) {
    var c = color(196, 244, 254);
    pastelDrops(c);
    
    c = color(175, 251, 170);
    pastelDrops(c);
    
    c = color(252, 198, 247);
    pastelDrops(c);
  }
}

function pastelDrops(c) {
  x = random(-10, 10);
  y = random(-10, 10);
  z = random(10, 20);
  stroke(c);
  strokeWeight(2);
  fill(243, 205, 160);
  ellipse(mouseX+x, mouseY+y, z, z);
}