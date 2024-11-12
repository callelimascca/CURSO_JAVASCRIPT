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

/*//BINDING en JS lo que hace es subir las funciones declarativas a la cabecera de mi archivo
console.log(despedida()) //binding
//en el caso de funcion como valor o funciones flecha el binding solo eleva al principio del archivo la declaracion del enlace o variable mas no el valor por eso en estos casos debemos ejecutar la funciones despues de haberlo creado.
let saludo =()=> {return "hola primo"}
console.log(saludo())
//en el caso de la funcion declarativa al binding elva toda la funcion al principio del archivo por eso podemos ejecutar la funcion desde cualquier parte del archivo incluso antes de que sea creada.
    function despedida(){
        return "Adios"
    }*/
//Crear una funcion que tenga o almacene una variable contador y podamos con funciones realizar la suma + 1 de esta variable y resta mas uno de la misma variable ademas de poder tener una funcion que me permita acceder al valor actual y poder mostrarlo.
/*let contador = 0
function incre(){
    //variables locales si `let contador = 0` estuviera dentro de las {}
    return contador++
}
function decr(){
    return contador--
}
function valueCont(){
    console.log(contador)
}
valueCont()
incre()
valueCont()*/

//FUNCION CLOSURE
// function contador(){
//     let contador = 0
//     function incre(){
//         return contador++
//     }
//     function decre(){
//         return contador--
//     }
//     function valueCont(){
//     console.log(contador)
//     }
//     return {
//         valueCont,
//         incre,
//         decre,
//     }
// }
// // let count1 = contador()//estado 
// // count1.valueCont()
// // count1.incre()
// // count1.valueCont()
// let count1 = contador()
// for (let i = 0; i < 5; i++){
//     count1.incre()
// }
// count1.valueCont()

// let count2 = contador()
// for (let i = 0; i < 5; i++){
//     count2.decre()
// }
// count2.valueCont()

//CLOSURE DE TIPO CLASE
/*function contador(){
    this.contador = 0 //objeto creado dentro de una funcion
    this.incre= function(){
        this.contador++
    }
    this.decre= function(){
        this.contador--
    }
}
let count1= new contador()//realizar la instancia
console.log(count1.contador)
count1.incre()
console.log(count1.contador)
*/
function Contador(nombre){
    this.count=0
    this.nombre=nombre
}
Contador.prototype={
    incremento:function(){
        this.count++
        }, 
    decremento:function(){
        this.count--
        },
    actualizarNombre:function(nuevoNombre){
            this.nombre=nuevoNombre
        },
    mostrarDatos:function(){
        return `${this.count}, ${this.nombre}`
        }
    
}
//instaciar  la funcion
let contadorUno=new Contador("el primo")
console.log(contadorUno.mostrarDatos())
contadorUno.incremento()
contadorUno.incremento()
console.log(contadorUno.mostrarDatos())
contadorUno.incremento()
contadorUno.actualizarNombre("Feli")
console.log(contadorUno.mostrarDatos())