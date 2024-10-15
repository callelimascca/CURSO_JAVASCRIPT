//EJERCICIO N° 01
/*let numUno= Number(prompt("Ingresa el primer numero:"))
let numDos= Number(prompt("Ingresa el segundo numero:"))
if (numUno+numDos > 100){
    console.log("el numero es mayor que 100");
}
else
{
    console.log("el numero es menor que 100");
}
(numUno+numDos > 100) ? console.log("el numero es mayor que 100") : console.log("el numero es menor que 100"); */

//EJERCICIO N° 02 condicion simple.
/*let contraseña="luna_04"
let ingresaContraseña= prompt("Ingresa tu contaseña:");
if (contraseña===ingresaContraseña){
    console.log("Ingresando al sistema");
}
else
{
    console.log("Contraseña incorrecta");
}
(contraseña===ingresaContraseña) ? console.log("Ingresando al sitema") : console.log("Contraseña incorrecta");*/

//EJERCICIO N° 03
let num=Number(prompt("Ingresa un numero:"))
if (num === 1 || num === 2 || ! (num % 2 === 0 || num % 3 === 0(num) === 0)) {
    console.log(`El ${num} es un numero primo`);
} else{
    console.log(`El ${num} NO es un numero primo`);
}