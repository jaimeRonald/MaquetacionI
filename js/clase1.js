class Informatica{
    constructor(tema,dificultad,rama){
        this.tema=tema;
        this.dificultad=dificultad;
        this.rama=rama;
    }
    getTema(){
        return this.tema;
    }
    leer(){
        console.log(`tema es ${this.getTema()} `);
    }
}

class desarrolloWeb extends Informatica{
    constructor(tema,dificultad,rama,editor){
        super(tema,dificultad,rama)
        this.editor=editor;

    }
}

let mirarma=new Informatica("inteligencia artificial","alta","IA");
let miFront=new desarrolloWeb("front end","alta","desarrollo web ","visal studio code");
miFront.leer();//esta instancia "miFront"  de la clase desarrolloWeb hereda la funcion leer() de clase Informaticagmh
mirarma.leer();