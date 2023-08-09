
class Comida{
    constructor(){
        this.X=floor(random(cols));
        this.Y=floor(random(rows));
        this.D=15;
        this.foods=createVector(this.X,this.Y);
    }
    dibujoManzana(){
        fill(255,0,0)
        circle(this.X*tamano,this.Y*tamano,this.D)
    }
    

    
    
}