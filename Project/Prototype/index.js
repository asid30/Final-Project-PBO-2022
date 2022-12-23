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

const cxCenter = canvas.width / 2;
const cyCenter = canvas.height / 2;

const player = new Hero(20,20,cxCenter,cyCenter,'blue',100,0);
player.draw();
console.log(player);
