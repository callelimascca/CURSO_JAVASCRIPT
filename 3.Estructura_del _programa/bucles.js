/* 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)
let contador = 1
while (contador <= 12){
    console.log(contador)
    contador = contador + 1
  }
*/

/*EJERCICIOS 
Crear un programa que me muestre los numeros pares que existen entre 11 y 20
 WHILE
let par=2
while (par <= 20){
    console.log(par)
    par += 2
    par = par + 2
  }

while (par <= 20){
    if (par % 2 == 0){
        console.log(par)
    }
    par += 1
}
FOR
for (let i=2; i <= 20; i++){
    if (i % 2 == 0) console.log(i)
  }
*/
/* EJERCICIO
CREAR UN PROGRAMA QUE PIDA UN NUMERO Y MUESTRE POR CONSOLA TODOS LOS NUMEROS MENOR AL NUMERO INGRESADO POR LA PERSONA.

let numUser=Number(prompt("Ingresa un numero:"))
//contador
let contador = 1
while (contador <= numUser){
    console.log(contador)
    contador += 1
}
*/
/*EJERCICIO 
CREAR UN PROGRAMA QUE ME MUESTRE LOS NUMEROS MENORES A 20 EN CASO QUE ENCUENTRE UN 7 BEBERA TERMINAR EL PROGRAMA Y NO MOSTRAR EL RESTO DE NUMEROS*. */
for ( let num = 1 ; num <= 20 ; num ++){
    if (num == 7) {
        break 
    }
    console.log(num)
}