let animales=["gato", "perro","vaca"];

for(anima in animales){
    console.log(anima+"<br>");
}

for(anima of animales){
    console.log(anima+"<br>");
}
// FUNCION FLECHA
const VALOR=(nombre)=>{
    let frase=`hola ${nombre}`;
    console.log(frase);
}

VALOR("ronald");

let edad=["12",24,23,13,16,18,12,56];

const validar=(edad)=>{
    let hora=prompt("ingrese hora");
    if (hora>=2) {
        if(edad>=18){
        alert("si pasas ");
        }else{
            alert("si fueras menor de edad pasarias ");
        }
    }
    else{
        alert("imposible no puedes pasar ");
    }


    // for (let index = 0; index < edad.length; index++) {
    //     const element = edad[index];
    //     if(element<18){
    //         continue;
    //     }else{
    //         console.log(`si pasa : ${edad[index]}`);
    //     }
        
    // }
}
//validar(17);

let cadena="hola como estas";
let cadena2="como";
resultadp=cadena.includes("juan");// si una cadena esta c¿incluida en otra 
resultadp2=cadena.indexOf(cadena2);// en que posiscion esta la cadena concatnada 
//console.log(resultadp2);

let nombres=["1","jaime","diego","amanecer"];
console.log(nombres.pop());
console.log(nombres.shift())
console.log(nombres.push("andres"));


 

