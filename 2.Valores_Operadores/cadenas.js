console.error("Hola soy cadena")

//si nuestro texto tiene que estar entre comillas simple
console.log("'este texto se muestra entre comillas simples'")
//si nuestro texto tiene que estar entre comillas simple
conosle.log('" este texto se muestra entre comillas dobles"')
//si nuestro texto tendra tanto comillas dobles como simples
console.log(`'comilla simple' , "comilla doble"`)

// usando caracter de escape
console.log("este texto solo esta \"palabra\" estara en comillas")

//salto de linea usando acentos graves -- para uso de multilinea
console.log(`
    aqui linea 1
    aqui 2 linea`)

// salto de linea antes de ES6-- solo se usara de esta manera caso contario mostrar error
conosle.log("esta es la primera linea \n y esta la segunda linea")

// Tabulacion de un texto con acento grave
conosle.log(`
este texto no esta tabulado
        este texto si esta tabuladoe`)

//Tabulando con el carcter de escape
console.log("Tabulado \n \t No tabulado")

//ejercicio para mostrar barra invertida
conosle.log(" esta es una barra invertida \\")

//concatenacion de cadenas
console.log("hola"+"mundo") //sin espaciado==holamundo
console.log("hola"+" "+"mundo") //con espaciado==hola mundo

//Usando plantillas literales
conosle.log(`la suma de 1+1 es = ${1+1}`)

numUno=12
numDos=8
conosle.log(`la suma de ${numUno} + ${numDos} es = ${numUno + numDos}`)