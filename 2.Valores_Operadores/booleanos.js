// ejemplos con operadores de comparacion
console.log(5>6) //FALSE //el resultado mostrara falso
// esta operacion me genera un valor de tipo booleano 

//mayor o igual que
console.log(6>=6) //TRUE

//no es igual que
console.log(5!=6) // TRUE
 
//NaN == NaN
console.log(NaN==NaN) //FALSE

//Averiguar la forma en que se realizan las comparaciones con cadena de texto.
// Todas las letras mayusculas seran menores a las minusculas.
// EJEMPLO: Z>a
//Por que JavaScript compara los codigos unicode de cada caracter
//!>=? ---> 33>=63
console.log("!" >= "?") //false

//Ardvark < Zoroaster
console.log("Ardvark" < "Zoroaster") //True

//OPERADORES LOGICOS
//EN EL CASO DEL OPERADOR AND(&&) SU RESULTADO SERA VERDADERO SI AMBOS VALORES SON VERDADEROS.
console.log(true && false) //FALSE
console.log(true && true) //TRUE

//OBSERVACION: si ambos valores son verdaderos devolvera el segundo valor.
console.log("hola" && "mundo")
//OBSERVACION: en caso de que exista un valor verdadero y uno falso devolvera el valor falso.
console.log(0 && "hola")

// OJO: los valores 0, NaN y una cadena vacia "" son considerados falso.

//EN EL CASO DEL OPERADOR OR(||) PRODUCE VERDADERO SI CUALQUIERA DE SUS VALORES DADOS ES VERDADERO.
console.log(false || false) //FALSE
console.log(false || true) //TRUE

//
respuesta="TE DEVUELVO LOS OSITOS TIERNOS"
console.log(respuesta || "tu busqueda no existe")

//EN EL CASO DEL OPERADOR NOT(!) INVIERTE EL VALOR DADO.
console.log(!true) //FALSE
console.log(!false)//TRUE

// USANDO EL OPERADOR RELACIONAL 
//OBSERVACION: solo funciona en objetos o listas
//Averiguar: por que muestra falso.
console.log(["hola"] in ["hola", "mundo"])

// p