// console.log("hola")
//EJERCICIOS
//CREAR UNA FUNCION QUE ME DE UN SALUDO DE BIENVENIDA

// function saludo(){
//     console.log("HOLA, BIENVENIDO")
// }

//FUNCION COMO VALOR
// let saludo=function(){
//     console.log("Bienvenido");
// }
// saludo()

//BINDING en JS lo que hace es subir las funciones declarativas a la cabecera de mi archivo
console.log(despedida()) //binding
//en el caso de funcion como valor o funciones flecha el binding solo eleva al principio del archivo la declaracion del enlace o variable mas no el valor por eso en estos casos debemos ejecutar la funciones despues de haberlo creado.
let saludo =()=> {return "hola primo"}
console.log(saludo())
//en el caso de la funcion declarativa al binding elva toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
    function despedida(){
        return "Adios"
    }
