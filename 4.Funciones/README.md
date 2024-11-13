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
La recursión en JavaScript, como en otros lenguajes de programación, se refiere a la técnica en la que una función se llama a sí misma para resolver un problema. Cada llamada recursiva suele acercarse a una solución más sencilla o más pequeña hasta llegar a un caso base, que es la condición que detiene la recursión.

Ejemplo básico de recursión en JavaScript
Un ejemplo clásico de recursión es el cálculo del factorial de un número.

Factorial de un número:
El factorial de un número n (denotado como n!) se define como el producto de todos los números enteros positivos desde 1 hasta n. Matemáticamente:

- `n! = n * (n-1) * (n-2) * ... * 1`
- Caso base: `0! = 1` y `1! = 1`
Implementación recursiva en JavaScript:
```js
function factorial(n) {
  // Caso base: cuando n es 0 o 1, el factorial es 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Paso recursivo: n * factorial de (n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Resultado: 120
```
En este ejemplo:

El caso base es cuando n es igual a 0 o 1, en cuyo caso se retorna 1.
Si n es mayor que 1, la función se llama a sí misma con n-1 y multiplica ese resultado por n (el paso recursivo).
Explicación paso a paso de la recursión:
Para calcular factorial(5), el proceso sería el siguiente:

- `factorial(5)` devuelve `5 * factorial(4)`
- `factorial(4)` devuelve `4 * factorial(3)`
- `factorial(3)` devuelve `3 * factorial(2)`
- `factorial(2)` devuelve `2 * factorial(1)`
- `factorial(1)` devuelve `1 (caso base)`
  
Luego, los resultados se "desenrollan" en orden inverso:

- `factorial(1) = 1`
- `factorial(2) = 2 * 1 = 2`
- `factorial(3) = 3 * 2 = 6`
- `factorial(4) = 4 * 6 = 24`
- `factorial(5) = 5 * 24 = 120`
  
Casos base y la importancia de la recursión
Es fundamental tener un caso base en la recursión para evitar que la función se llame indefinidamente, lo que llevaría a un desbordamiento de pila (stack overflow). El caso base es la condición en la que la recursión termina.

Otros ejemplos de recursión
Suma de los primeros n números
Este es otro ejemplo de una función recursiva. La suma de los primeros n números es:

`Suma(0) = 0`
`Suma(n) = n + Suma(n-1)`

Implementación en JavaScript:

```js
function suma(n) {
  // Caso base
  if (n === 0) {
    return 0;
  }
  // Paso recursivo
  return n + suma(n - 1);
}

console.log(suma(5)); // Resultado: 15 (5 + 4 + 3 + 2 + 1)
```
#### Peligros de la recursión:
Desbordamiento de pila (stack overflow): Si no hay un caso base adecuado o si el caso base no se alcanza, la recursión seguirá ocurriendo hasta que el programa se quede sin memoria de pila.

Eficiencia: La recursión puede ser menos eficiente en comparación con la iteración en algunos casos, debido a que las funciones recursivas requieren una sobrecarga adicional para almacenar el estado de las llamadas recursivas. Algunas funciones recursivas pueden ser optimizadas utilizando técnicas como la recursión de cola o memorización.

#### Recursión de cola
Una forma especial de optimizar la recursión es la recursión de cola (tail recursion). En este caso, la llamada recursiva es la última operación de la función, lo que permite a los motores JavaScript optimizar el uso de la pila.

Ejemplo de recursión de cola:
```js
function factorialTail(n, acc = 1) {
  // Caso base
  if (n === 0 || n === 1) {
    return acc;
  }
  // Paso recursivo
  return factorialTail(n - 1, n * acc);
}

console.log(factorialTail(5)); // Resultado: 120
```

En este caso, el acumulador `acc` mantiene el resultado parcial, y la llamada recursiva se realiza al final de la función, lo que permite optimizar la recursión.

```js
function factorial(n){
    if n==1{
        return 1
    }
    return n * factorial(n-1)
}
console.log(factorial(5))
```
## FUNCIONES CALLBACK (tareas)
Es una función callback es una función que se pasa como argumento a otra función y se ejecuta después de que la otra función haya completado su tarea. Las funciones callback se utilizan comúnmente para manejar operaciones asincrónicas, como la lectura de archivos, las solicitudes HTTP, o cualquier otra operación que no se complete de inmediato.
- **Ejemplo básico de una función callback**
En este ejemplo, tenemos una función saludar, que toma una función de callback llamada despedirse:
```js
function saludar(nombre, callback) {
  console.log("Hola, " + nombre);
  // Llamamos a la función callback después de la operación
  callback();
}

function despedirse() {
  console.log("Adiós!");
}

saludar("Juan", despedirse);  // Salida: "Hola, Juan" luego "Adiós!"
```
#### Funciones callback en operaciones asincrónicas
Uno de los usos más comunes de las funciones callback es en operaciones asincrónicas. Cuando necesitas realizar una operación como una solicitud HTTP o leer un archivo, no puedes simplemente esperar que se complete de manera sincrónica porque podría bloquear el hilo de ejecución. En su lugar, usas una función callback para ejecutar un código después de que la operación haya terminado.

- **Ejemplo de callback con setTimeout (simulando asincronía)**
```js
console.log("Inicio");

setTimeout(function() {
  console.log("Esto se ejecuta después de 2 segundos");
}, 2000);

console.log("Fin");
//salida
// Inicio
// Fin
// Esto se ejecuta después de 2 segundos

```

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