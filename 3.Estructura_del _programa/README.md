# Estructura del programa
## Indice

- [Estructura del programa](#estructura-del-programa)
  - [Indice](#indice)
  - [INTERACCION BASICA CON EL USUARIO](#interaccion-basica-con-el-usuario)
  - [EXPRESIONES Y DECLARACIONES:](#expresiones-y-declaraciones)

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
## EXPRESIONES Y DECLARACIONES:
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