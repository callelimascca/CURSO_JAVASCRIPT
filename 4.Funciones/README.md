FUNCIONES
- [Estructura  de una funcion (como se crea una funcion)](#estructura--de-una-funcion-como-se-crea-una-funcion)
- [Tipos de argumentos y parametros](#tipos-de-argumentos-y-parametros)
  - [Argumentos y parametros posicionales](#argumentos-y-parametros-posicionales)
  - [Argumentos y parametros nominales](#argumentos-y-parametros-nominales)
- [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
  - [Funciones como valor](#funciones-como-valor)
  - [Funcion como declaracion](#funcion-como-declaracion)
  - [Funcion de flecha](#funcion-de-flecha)
  - [Diferencias:](#diferencias)
  - [Binding](#binding)
- [La pila de llamadas (CALL STACK)](#la-pila-de-llamadas-call-stack)
- [CLOSURE o Funciones de cierrre (Funciones que retorna funciones)](#closure-o-funciones-de-cierrre-funciones-que-retorna-funciones)
  - [Closure tipo clase](#closure-tipo-clase)
- [Prototype (Tarea- averiguar y sus ejemplos)](#prototype-tarea--averiguar-y-sus-ejemplos)
- [RECURSION EN FUNCIONES](#recursion-en-funciones)
- [FUNCIONES CALLBACK](#funciones-callback)
  
Las funciones en JS son `bloques de codigo ejecutable` a los que podemos pasar parametro y operar con ellos. Nos sirve para modular o `modularizar` nuestro programa y estructurar en bloques  que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones normalmente al acabar `devuelve un valor`, que conseguimos con el parametro `retunr`.

## Estructura  de una funcion (como se crea una funcion)
Para crear una funcion debemos realizar los siguyientes pasos.
1. Hacer uso del keyboard `function`
2. Darle un `nombre` a la funcion.
3. Crear los parametros que recibira entre `()`.
4. Crear el cuerpo de la funcion `{}`.
```js
//funcion sin parametro
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con parametro
function miFuncionParametro(texto){
    console.log("tu parametro es", texto)
}
//texto es un valor para agrewgra mas  solo cmabia el tipo de valor

//Funcion con varios parametro
function variosParametros(a,b){
    console.log(a + b)
}
```
**COMO EJECUTAMOS UNA FUNCION**

Para ejecutar una funcion debemos hacer el llamado de la misma haciendo uso unicamente de su nombre y los parametros que reciba.
```js
//creando la funcion
function saludo(){
    console.log("hola")
}
//ejecutamos la funcion
saludo ()

function saludo2(texto){//-->PARAMETRO--crear funcion
    console,.log("hola: ", texto)
}
//ejecutar
saludo2("Jory")//-->ARGUMENTO-- llamas el parametro
```
> [!NOTE]
> **Reglas para poner un nombre a una funcion**- los nombres de las funciones deben representar acciones, por lo que deben construirse usando el `verbo` que representa una accion seguido de un `sustantivo` representara a la entidad.
```js
function crearUsuario(){
    console.log()
}
funtion enviarCorreo(){
    console.log()
}
```
## Tipos de argumentos y parametros
Es la manera como se reemplazan los argumentos con los parametros.

### Argumentos y parametros posicionales
Posicionales se les llama por que los argumentos tomaran los parametros en el orden que se les pase a la funcion, segun la posicion entre argumento y  parametro.
```js
function suamNumeros(a,b,c,d){
    let suma= a + b + c + d
    return suma
}
//argumento posicional
let respuesta=suamNumeros(1,3,4,2)
console.log(respuesta)
```
### Argumentos y parametros nominales
Los `nominales` se les conoce a los argumentos que en su creacion se les asocia a un parametro en especifico.
```js
function registroAlumno(nombre, apellido,sexo){
    let respuesta= `${nombre}, ${apellido}, ${sexo}`
    return respuesta
}
//NOMINAL
registroAlumno(sexo="primo", nombre="Edwin", apellido="del mar")
//POSICIONAL
registroAlumno("JORY", "Rodrigues","todos los dias")
```
> [!INFO]
> Posicional en orden y nominal especificar el parametro y su valor

## Tipos de funciones por su notacion
### Funciones como valor
En este caso se crea una funcion como si fuera el valor de un enlace.
```js
let saludo= funcion(){
    console.log("Bienvenido")
}
saludo()
```
En etse caso la el nombre de la funcion sera el nombre que le pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentecis.
Al igual que una funcion clasica podemos tambien pasarle parametros

### Funcion como declaracion
Se le conoce como una funcion `declarativa` a la manera clasicca de como creamos una funcion.
```js
function saludo(){
    return "saludo a todos"
}
console.log(saludo())
```
### Funcion de flecha
Esta funcion es introducida a partir de la version ecma script 5 o `es5`. Se implemento para la creacion y ejecucion rapida y mas entendible de la funciones.
La funcion flecha evita la ``verbosidad`` en JS.

> [!NOTE]
> `verbosidad` se utiliza en la programacion para referirse a un codigo que necesite demaciada lineas de codigo o necesite cumplir estrictamente una serie de reglas ppodemos comprar la `verbosidad` a un texto demasiado exteno o redundante. 

Se crea a la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace. La funcion flecha tiene la siguiente estrcutura.
El parametro seguido del simbolo `=>` y del cuerpo de ser necesario o solo codigo que se retornara.
```js
function saludo(){
    return "saludo a todos"
}
console.log(saludo())

let saludo=()=> ("hola mundo")
console.log(saludo())
let mensaje=texto=>console.log("hola," texto)
console.log(mensaje("Primo"))
//en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registroUsuario=(nombre,apellido)=> {
    let alumno= `${nombre}, ${apellido}`
    return alumno
}
console.log(registroUsuario("edwin", "ramos"))
```
### Diferencias:
Las diferencias que tenemos al momento de crear una funcion declarativa, funcion como valor y flecha es el `binding`.
### Binding
Es una tecnica que guarda las funciones y variables (enlaces) sube al principio la declaracion del archivo JavaScript.
```js
despedida()
function saludo(){
    return "hola primo"
}
function despedida(){
    return "adios primo"
}
```
- JavaScript eleva la funcion al principio del archivo (**caso:** funcion declarativa)
```js
saludo()
despedida()
```
## La pila de llamadas (CALL STACK)
Es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.
**Averiguar sobre LIFO** 
Es un algoritmo de estrcutura de datos
```js
// PROGRAMA PARA CREAR UNA ENSALADA
Function cortarTomate(){
    console.log("cortando tomates")
}
Function cortarLechuga(){
    console.log("cortando lechugas")
}
Function cortarPepino(){
    console.log("cortando pepino")
}
Function cortarLimon(){
    console.log("cortando limones")
}
Function prepararEnsalada(){
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("Mesclando las verduras")
}
fucntion comer(){
    prepararEnsalada()
    console.log("comiendo la ensalada")
}
comer()
```
## CLOSURE o Funciones de cierrre (Funciones que retorna funciones)
Un `closure` es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el (`keyword`) `return`.
Antes de que aparesca la version `ecma 6` los `closure` eran un patron creacional que nos permitia modularizar nuestro codigo, en lugar de usar las `clases` que eran populares en otros lenguajes pero que javascript aun no lo implementaba.
```js
//una funcion que retorna otra funcion (por lo general es una funcion `anonima`)
// funcion CLASICA
function retornaValor(n){
    return n + 1
}
retornaValor(10)//llamando a la funcion CLASICA
//funcion CLOSURE
function retornaValor(n){
    return function(){
        return n + 1
    }
}
retornaValor(10)()//llamando a la funcion CLOSURE
```
>[!NOTE]
> Las funciones `CLOSURE` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se le realize.

### Closure tipo clase
son funciones cuyo uso so iguales a las clases dentro de la ejecucion de una clase tenemos lo que se llama como `instancia` en JavaScript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la diferencia con la funciones `closure clasicas` es que en esta hacemos uso de la palabra reservada `keyword` llamada `this`.
```js
function contador(){
    this.contador = 0 //objeto creado dentro de una funcion
    this.incre= function(){
        this.contador++
    }
    this.decre= function(){
        this.contador--
    }
}
let count1= new contador()//realizar la instancia
count1.contador
```
> [!NOTE]
> La funcion **closure de tipo clase** no hace uso de `return` en sus funciones al hacer uso de `this` **casa funcion o variable estara enlazada al objeto que cree**.

> [!WARNING]
> El problema principal de este tipo de funcion, es que cuando creamos un nuevo objeto a partir de la funcion tipo clase , reservara espacio en memoria para toda la clase y su valor creados eso quiere decir variable y funciones, cada vez que llamamos a una funcion esta se replica en la memoria. 

## Prototype (Tarea- averiguar y sus ejemplos)
Para crear un prototype tendremos que crear primero nuestra funcion principal que es la encargada de almacenar nuestra variables locales con las que trabajaremos.
Luego accederemos al prototype de nuestra funcion creada y en valor o variable de tipo objeto le indicaremos las funciones que tendra nuestra funcion principal que interactuara con nuestras variables locales.
```js
function Contador(){
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
    mostrarDatos:function(){
        return `${this.count}, ${this.nombre}`
        }
}
```
> [!NOTE]
> Es una convencion usar  como nombre de nuestra funcion principal. 
> 1. Que debe ser singular 
> 2. Que use PascalCase

## RECURSION EN FUNCIONES (tareas)
## FUNCIONES CALLBACK (tareas)
# CLASES 
Las clases en javascript llegan en la version `ECMAScript6`, javascript no tenia al igual que en otros lenguajes de programacion orientadas a objetos las `clases` ya que javascript se enfocaba en la `programacion funcional` sin embargo con la llegada de `ES6` adopta ser un lenguaje de programacion multiparadigma, entre ellos la `programacion orientada de objetos` con la llegada de las `clases`.
## Estructura de una clase en JavaScript
Una clase esta separada en tres grandes secciones.
1. El nombre de la clase que debera ser en `sigular y PascalCase`.
2. Debera tener atributos (valor, variable) estos deberan ser `sustantivos` y estar escrito en `CamelCase`.
3. Debera tener metodos (acciones, funciones) estos deberan ser verbos u estar escritos en `CamelCase`.
```js
class Computadora{
    //atributos
    constructor(marca){
        this.marca="marca"
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){
        return "estoy encendiendo..."
    },
    apagar(){
        return "estoy cerrando cesion..."
    },
    escribir(){
        return "estoy haciendo un informe"
    }
    jugar(){
        return "estoy jugando"
    }
}
//instanciar
let miPC=new Computadora(gigabyte)
miPC.endender()

```
