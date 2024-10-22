# FUNCIONES
- [FUNCIONES](#funciones)
  - [Estructura  de una funcion (como se crea una funcion)](#estructura--de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de argumentos y parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y parametros posicionales](#argumentos-y-parametros-posicionales)
    - [Argumentos y parametros nominales](#argumentos-y-parametros-nominales)
  
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