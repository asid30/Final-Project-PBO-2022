const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Entity {
  
    constructor(height, width, x, y){
      this.height = height;
      this.width = width;
      this.x = x;
      this.y= y;
    }
    
    attack(){
      
    }
    
    moveRight(){
      
    }
    
    moveLeft(){
      
    }
    
    moveDown(){
      
    }
    
    moveUp(){
      
    }
    
}

class Hero extends Entity {

    constructor(height, width, x, y, color, life, score){
        super(height, width, x, y)
        this.color = color;
        this.life = life;
        this.score = score;
    }

    increaseScore(){
    
    }
    
    calculateLife(){
      
    }
    
    saveScore(){
      
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.height+this.width/2, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

}

class Monster extends Entity {

    constructor(height, width, x, y, life, color, effect, type, velocity){
        super(height, width, x, y)
        this.life = life;
        this.color = color;
        this.effect = effect;
        this.type = type;
        this.velocity = velocity;
    }

    moveRandom(){

    }

    saveScore(){

    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.height+this.width/2, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(){
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(){
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}

const cxCenter = canvas.width / 2;
const cyCenter = canvas.height / 2;

const player = new Hero(20,20,cxCenter,cyCenter,'blue',100,0);
player.draw();
console.log(player);

const projectiles = [];
const monster = [];

function spawnMonster(){
    setInterval(() => {
        let x;
        let y;
        const height = 30;
        const width = 30;
        const radius = width+height/2;
        if(Math.random() < 0.5){
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
            y = Math.random() * canvas.height;
        }else{
            x = Math.random() * canvas.width;
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
        }

        const color = 'green';
        const angle = Math.atan2(canvas.height/2 - y, canvas.width/2 - x);
        const velocity = {x : Math.cos(angle), y : Math.sin(angle)};

        monster.push(new Monster(height,width,x,y,100,color,null,null,velocity))}, 1000)
}

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.draw();
    projectiles.forEach(projectile => {projectile.update()})
}

window.addEventListener('click', (event) => {
        const angle = Math.atan2(event.clientY - canvas.height/2, event.clientX - canvas.width/2);
        const velocity = {x : Math.cos(angle), y : Math.sin(angle)}
        projectiles.push(new Projectile(canvas.width/2,canvas.height/2,5,'red',velocity))
    })

animate();
spawnMonster();
