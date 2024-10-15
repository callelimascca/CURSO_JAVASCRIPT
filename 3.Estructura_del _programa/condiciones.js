console.log("soy condiciones")
//ejemplo de condicion simple
//capturamos la edad y lo convertimos a numero
let edad = Number(prompt("ingresa tu edad:"))
//verificamos si el tipo de dato de edad es number realmente
if (typeof edad == "number"){
    //si la comparacion es verdadera mostrara por consola la raiz cuadrada de edad.
    console.log(edad*edad)
}
//console.log(typeof numero)

//EJEMPLO DE CONDICION SIMPLE DE UNA SOLA LINEA
if (1+1==2) console.log("es verdad");