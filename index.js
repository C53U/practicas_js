console.log("Hola mundo");

let num1 = 15;
let num2 = 20;
let resultado;

 resultado = 9 * num1; 
 console.log(resultado);

 // 5 * 3 + 10
// (15/6) * 20
 let operacion = 5 * 3 + 10
 console.log(operacion)

let x = 3;
let operacion2= x += 4;
// x = 3 + 4 
console.log(operacion2) 


let x1 = 5;
let x2 = 10;

let rs = x1 *= x2;
// rs = x1 * x2 
console.log(rs)

let hoy = 25;
let ayer = 24;
let mesActual = 11;
let mesPasado = 10;

// verdadero  y false
let comparacion = (hoy > ayer) &&  (mesActual == mesPasado);
console.log(comparacion)


let comparacion1 =  (hoy > ayer) ||  (mesActual == mesPasado);
console.log(comparacion1)

let nombre = "juanito";
let edad = 18;

// Si edad es mayor a 18 ENTONCES tiene permiso para conducir PERO SI NO ENTONCES no tiene permiso
if (edad >= 18) {
    console.log(nombre + "tiene permiso para conducir")
} else {
    console.log (`${nombre}, no tiene permiso para conducir`)
}


// ([Estructura Inicial]; [Estructura condicional]; [expresionActualizacion])
// 1, 2, 3, 4, 5
for(let x = 0;  x < 5; x++){
 console.log(x);
}

 console.log("--------")

for(let x = 1;  x < 6 ; x++){
    console.log(x);
}


function suma(){
    let n1 = 5;
    let n2 = 30;
    let resultado = n1 + n2;
    console.log("suma" + resultado)
}

suma()

