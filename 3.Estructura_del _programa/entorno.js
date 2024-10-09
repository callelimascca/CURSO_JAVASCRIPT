/*let cadena="♠♥" 
let saludo="holis"
let suma= 4+12

let edad=18
let respuesta= edad > 18? "eres mayor": "eres bb" */

// let elNumero=Number(prompt("Elije un numero:")) 
// console.log(`tu numero es la raiz cuadrada de: ${elNumero*elNumero}`)
console.time("number")
let elNumero=prompt("Elije un numero:") 
console.log(`tu numero es la raiz cuadrada de: ${(+elNumero)*(+elNumero)}`)
console.timeEnd("numero")