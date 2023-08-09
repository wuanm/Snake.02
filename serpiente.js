
class serpiente {
    constructor(){
        this.body=[];
        //le damos la posicion en medio de la pantalla a la primera posicion
        this.body[0]=createVector(floor(cols/2),floor(rows /2));
        this.xDireccion=0;
        this.yDireccion=0;


    }
        //con esta funcion recivimos los valores de x-y segun se mueva la cabeza.
    modificarDireccion(x,y){
        this.xDireccion=x;
        this.yDireccion=y;

    }



    actualizaSerpiente(){
        //copiamos la ultima posicion en la variable head
        let head = this.body[this.body.length - 1].copy();
        // borramos  la primera posicion
        this.body.shift();
        //actualizamos la posicion de la cabeza
        head.x +=this.xDireccion;
        head.y +=this.yDireccion;
        //agregamos a nuestro array la cabeza ya con su nueva posicion
        this.body.push(head);
   
    }
        

    mostrarSerpiente(){
        for(let i=0; i<this.body.length;i++){
            fill(250);
            //Dibujar cada parte del cuerpo  de la serpiente como un cuadro individual
            rect(this.body[i].x * tamano,this.body[i].y * tamano,tamano,tamano);
        }
    }

    
  
    
   
}