let bullets = [];
let velocities = [];

function setup(){
  createCanvas(550,500);
}

function draw(){
  background(220);
  
  //drawcenter circle
  circle(width/2, height/2, 40);
  
  //draw line between center circle and player
  line(width/2, height/2,mouseX, mouseY)
  
  for (let bullet of bullets){
    for (let velocity of velocities){
      circle(bullet.x, bullet.y, 10);
      bullet.x += bullet.Vx * velocity.x;
      bullet.y += bullet.Vy * velocity.y;
    }
  }
}

function mousePressed(){
  let bullet = {
    x: width/2,
    y: height/2,
    Vx: 4,
    Vy: 4,
  }
  bullets.push(bullet);  
  
  const angle = Math.atan2(mouseY - height/2, mouseX - width/2);
  
  const velocity = {
    x: Math.cos(angle),
    y: Math.sin(angle)
  }
  velocities.pop(velocity);
  velocities.push(velocity);
}
