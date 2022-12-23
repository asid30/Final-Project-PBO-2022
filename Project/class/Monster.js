class Monster extends Entity {
    
    constructor(height, width, x, y, life, color, effect, type){
        super(height, width, x, y)
        this.life = life;
        this.color = color;
        this.effect = effect;
        this.type = type;
    }

    moveRandom(){
    
    }
    
    saveScore(){
      
    }
    
}