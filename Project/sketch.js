let bullets = [];

//setup
function setup(){
  createCanvas(550,500);
}

//continously
function draw(){
  background(220);
  
  //drawcenter circle
  circle(width/2, height/2, 40);
  
  //draw line between center circle and player
  line(width/2, height/2,mouseX, mouseY)
  
  //shoot bullet
  for (let bullet of bullets){
    circle(bullet.x, bullet.y, 10);
    bullet.x += bullet.Vx * bullet.Ax;
    bullet.y += bullet.Vy * bullet.Ay;
  }
}

function mousePressed(){
  //define the angle
  const angle = Math.atan2(mouseY - height/2, mouseX - width/2);
  
  //bullet attribut
  let bullet = {
    x: width/2,
    y: height/2,
    Vx: 4,
    Vy: 4,
    Ax: Math.cos(angle),
    Ay: Math.sin(angle)
  }
  
  //push bullet to bullets array
  bullets.push(bullet);  
}
