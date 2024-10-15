# Estructura del programa
## Indice

- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [INTERACCION BASICA CON EL USUARIO](#interaccion-basica-con-el-usuario)
  - [EXPRESIONES Y DECLARACIONES](#expresiones-y-declaraciones)
  - [BINDINGS (ENLACES)](#bindings-enlaces)
  - [EL ENTORNO](#el-entorno)
  - [CONTROL DE FLUJO](#control-de-flujo)
    - [Ejecucion Condicional](#ejecucion-condicional)

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

## BINDINGS (ENLACES)
Cunado creamos un valor estos valores son volatiles solo existen en la ejecucion del programa y solo cuando son llamados.
El bindings o enlace es la manera que JavaScript recuerda los valores y mantiene un estado interno asi como la reutilizacion del valor.

**como usamos los bindings en javascript**
 Para usar el bindings primero debemos usar la palabra reservada o `keyword` de nombre `let`, despues debemos darle un nombre para identificar el enlace luego asignarle el valor

```js
34
let edadPersona= 34 //enlace --> palabra reservada para el enlace "let" 
//este enlace puede guardar varios valores
let edadPersona=34
//si deseamos que nuestro enlace solo apunte un solo valor entonces para crear este enlace debemos hacer uso de la keyword conts
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
//CONTROL DE FULJO LINEAL
```
### Ejecucion Condicional
Hacemos uso de este control de flujo cuando tenemos distintos caminos o distintos mensajes que deseamos mostrar segun una condicion.

**Como creamos una condicion**
La ejecucion condicional se crea con la palabra reservada (keyword)`let` (para crear una variable), `if` a continuacion de una `condicion` en llaves `{}` se escribira el cuerpo del codigo que deseo ejecutar en caso que la condicion sea `verdadera`

- **Condicion simple `if`:**
  ```js
  let comparacion= 5>4
  if true{
    prompt("escribe tu nombre: ")
  }
  ```