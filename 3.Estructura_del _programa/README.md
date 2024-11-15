# Estructura del programa
## Indice

- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [INTERACCION BASICA CON EL USUARIO](#interaccion-basica-con-el-usuario)
  - [EXPRESIONES Y DECLARACIONES](#expresiones-y-declaraciones)
  - [BINDING (ENLACES)](#binding-enlaces)
  - [EL ENTORNO](#el-entorno)
  - [CONTROL DE FLUJO](#control-de-flujo)
    - [Ejecucion Condicional](#ejecucion-condicional)
    - [BUCLES](#bucles)

## INTERACCION BASICA CON EL USUARIO
Podemos interactuar con el usuario desde JavaScript, utilizando un metodo sencillo que viene implementado en los navegadores.
El metodo es conocido como: `window` o el metodo de `ventana` este metodo en realidad es un objeto que contiene o almacena varias funciones entre ellas las de mostrar mensajes o pedir datos al usuario.
- **alert** - esta funcion nos muestra un mensaje en pantalla
```js
window.alert("mensaje")
```
- **confirm** - preguntar al usuario y ofrecer dos botones  que se traduce en valores booleanos `Aceptar` (True) y `cancelar` (False)
```js
//si deseamos capturar la respuesta almacenaremos al codigo en una variable
respuesta=window.confirm("Te gustaria ser mi universo")
```
- **prompt** - pregunta al usuario y espera que se ingrese una respuesta 
```js
window.prompt("como te llamas?")
//si deseamos almacenar la respuesta usaremos una variable
respuesta=window.prompt("como te llamas")
```
## EXPRESIONES Y DECLARACIONES
- **Expresiones**: En JavaScript un fragmento de codigo que produce valor es llamda `Expresiones`, tambien se dice que una `expresion` es el fragmento de una `oracion`.
```js
1
"hola"
3*6
5>6
!true
```
- **Declaracion**: en JavaScript es una oracion
```js
!true;
let estado=!false; // el ; nos ayuda a dar sentido a al declaracion y finalizar
```

## BINDING (ENLACES)
Cunado creamos un valor estos valores son volatiles solo existen en la ejecucion del programa y solo cuando son llamados.
El bindings o enlace es la manera que JavaScript recuerda los valores y mantiene un estado interno asi como la reutilizacion del valor.

**como usamos los bindings en javascript**
 Para usar el bindings primero debemos usar la palabra reservada o `keyword` de nombre `let`, despues debemos darle un nombre para identificar el enlace luego asignarle el valor

```js
34
let edadPersona= 34 //enlace --> palabra reservada para el enlace "let" 
//este enlace puede guardar varios valores
let edadPersona=34
//si deseamos que nuestro enlace solo apunte un solo valor entonces para crear este en lace debemos hacer uso de la keyword conts
const edad=45
//enlace siempre apuntara al valor 45 no podra modificar su enlace a otro valor
```
> [!NOTE]
> **Que nombre ponerle a nuestro enlace** - El nombre del enlace debera describir el valor al que esta enlazado, y debera estar escrita en `camelCase`

```JS
//quiero crear un enlace que tenga la fecha actual
let yyyymmdd="20241010"
//correcto
let fechaActual="2024-10-10"
//correcto
let edadActualAlumno= 34
```
## EL ENTORNO
Es conocido como el momento en que se ejecuta o inicia un archivo de JAVASCRIPT.
El entorno al crear no se crea vacio dentro del entorno se creara una coleccion de enlaces y valores.

**TAREA** - Averiguar mas sobre la ejecucuion en linea de los entornos en javascript

## CONTROL DE FLUJO 
Una sentencia se ejecuta como si fuera una historia de arriba a abajo.

```js
let elNumero=prompt("Elije un numero:") 
console.log("tu numero es la raiz cuadrada de:" +elNumero* el numero) 
//primero le pide al usuario un numero y despues muestra un mensaje y el cuadro de ese numero
let comparacion=5>4
if comparacion {
  prompt("escribe")
}
```
### Ejecucion Condicional
Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.

- **Condicion simple `if` de una sola linea**
  ```js
  if (1+1==2) console.log("es verdad")
  ```
- **Condicion de doble evaluacion `if else`** --
Existen casos en los que tendremos que ejecutar un codigo si es verdad y tambien si es falso. ejecucion condicional de dos caminos
  ```js
  let edadPersona= 16;
  if (edadPersona =>18){
    console.log("eres mayor de edad"):
  }
  else{
    console.log("eres menor")
  }
  ```
- **Condicion multiple `if` `else if`** -- 
Se utiliza cuando se tine que evaluar y devolver varias opciones o multiples respuestas.
  ```js
   let total_compra=30 //501  //105
  if (total_compras > 50 && total_compra < 100) {
    console.log(`tiene un descuento del 10% ${total_compra * 0.10`)
  }
  else if (total_compras > 100 && total_compra < 500){
    console.log(`tines un descuento del 20% ${total_compra * 0.20}`)
  }
  else{
    console.log(`tines el descuento de 50% ${total_compra * 0.50}`)
  }
  ```
- **Condicion multiple `switch`**-- consume mucha energia
  JavaScript dispone de una opcion para crear estructuras codicionales multiples. `switch` permite crear etsructuras mas optimizadas para cubrir un amplio abanico de posibilidades.
```js
let edad=Number(prompt("Ingrese su edad"))
switch (edad){
  case 4: 
    console.log("tienes 4 año")
    break
  case 8:
    console.log("tienes 8 año")
    break
  default:
    console.log("tienes:" , edad)
    break
}
```

### BUCLES
Consideremos el siguiente problema
Crear un programa que imprima del 1 al 12 una forma seria el sguiente:
```js
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
```
El ejemplo anterior es valido pero la idea cuando programamos es hacer menos trabajo, en el ejercicio anterior tendriamos problemas si deseamos mostrar todos los numeros menores a 1000.
Necesitamos una manera de ejecutar un fragmento de codigo multiples veces. A esta forma de control de flujo se le llama `blucle`.
Pra crear un bucle tenmos dos formas de hacer.

- **PRIMERO (`While`)** --
Para hacer uso de este bucle primero debemos usar la palabra reservada `while` este a su vez como el `if` debera tener una `condicion` si esta condicion es verdadera el bucle se ejecutara indefinidamente en caso que la condicion sea falsa el bucle no se ejecutara, al igual que el **if** luego de darle la condicion crearemos el `cuerpo` donde escribiremos el codigo que deseamos ejecutar
```js
while (true){
  console.log("hola")
}
```
- **SEGUNDO (`for`)** -- Esta es la manera mas abreviada de crear un bucle en JavaScript, en el caso de `while` necesitamos una variable contador luego la condicion y finalmente el aumento del contador. En el caso de for estos tres pasos se realizan en una sola linea.
```js
for (let i=2; i <= 20; i++){
  if (i % 2 == 0) console.log(i)
}
```
> [!TIP]
> `WHILE` se usa cuando no sabemos la cantidad de veces que deseamos ejecutar un codigo, por lo general su finalizacion requerira de una intervencion externa.
>
> `FOR` Se usa cuando sabemos la cantidad de veces que vamos a ejecutar un codigo.

> [!NOTE]
> Para terminar un bucle se hace uso de la palabra reservada `breack` 
