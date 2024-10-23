console.log("soy condiciones")
// //ejemplo de condicion simple
// //capturamos la edad y lo convertimos a numero
// let edad = Number(prompt("ingresa tu edad:"))
// //verificamos si el tipo de dato de edad es number realmente
// if (typeof edad == "number"){
//     //si la comparacion es verdadera mostrara por consola la raiz cuadrada de edad.
//     console.log(edad*edad)
// }
// //console.log(typeof numero)

// //EJEMPLO DE CONDICION SIMPLE DE UNA SOLA LINEA
// if (1+1==2) console.log("es verdad");console.log()

// // EJERCICIOS DE DOS OPCIONES
// //crear un programa que me pida un numero y me muestra por consola si es un numero primo
// let num=Number(prompt("Ingresa un numero:"))
// if (num === 1 || num === 2 || ! (num % 2 === 0 || num % 3 === 0(num) === 0)) {
//     console.log(`El ${num} es un numero primo`);
// } else{
//     console.log(`El ${num} NO es un numero primo`);
// }

// let number = promt("Ingrese un numero")
// if (+number % 2==0){
//     console.log("es par")
// }
// else{
//     console.log("no es par")
// }

// let total_compra=30 //501  //105
// if (total_compra> 50 && total_compra < 100) {
//   console.log(`tiene un descuento del 10% ${total_compra * 0.10}`)
// }
// else if (total_compras > 100 && total_compra < 500){
//   console.log(`tines un descuento del 20% ${total_compra * 0.20}`)
// }
// else{
//   console.log(`tines el descuento de 50% ${total_compra * 0.50}`)
// }

// Ejercicio
/*
Crear un programa que pida al usuario su edad y dependiendo a su edad le daras un regalo 
REGALOS
 
- Si su edad esta entre 4 a 8 años: regalo chupetin.
- Si su edad esta entre 9 a 13 año: regalo pelota
- Si su edad esta entre 14 a 17 año: regalo TELEFONOCELULAR
- Si su edad es mayor o igual a 18: regalo el primo
*/

/*let edad= Number(prompt("Escribe tu edad ☻"))
if (edad =>4 && edad <= 8 ) {
    console.log("Tu regalo es un chupetin")
}
else if (edad => 9 && edad <= 13){
    console.log("Tu premio es un balon de futbol")
}
else if (edad => 14 && edad <= 17){
    console.log("Tu premio es un TELEFONOCELULAR ")
}
else {
    console.log("Te ganaste al primo")
}*/

    // > mayor
    // < menor

/*let edad= Number(prompt("Escribe tu edad ☻"))
switch (edad){
    case (edad <= 4 && edad <= 8):
        console.log("Tu regalo es un chupetin")
        break
    case (edad => 9 && edad <= 13):
        console.log("Tu premio es un balon de futbol")
        break 
    case (edad => 14 && edad <= 17):
        console.log("Tu premio es un TELEFONOCELULAR ")
        break
    default:
        console.log("Te ganaste al primo")
        break
}*/

//EJERCICIO
// Realizar un programa que pida 5 frutas a travez de la consola.
// y realizar la suiente evaluacion, si es:
// naranja, limon -> "es una fruta citrico"
// platano, manzana -> "es una fruta dulce"
// fresa, pera, papaya -> "haga una ensalada"
// si es otra fruta -> "no tine clasificacion esta fruta"

for (let i= 1; i <= 5; i++){
    let fruta=prompt(`Ingresa una fruta: ${i}`) 
    switch (i){
        case (i == "limon" && "naranja"):
            console.log("es una fruta citrico");
            break;
        case (i == "platano" && "manzana"):
            console.log("es una fruta dulce");
            break;
        case (i == "fresa" && "pera" || "papaya"):
            console.log("haga una ensalada");
            break;
        default:
            console.log("no tiene clasificacion esta fruta");
            break;
    }
}
