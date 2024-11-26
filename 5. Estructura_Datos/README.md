# Estructura de datos
## Indice
- [Estructura de datos](#estructura-de-datos)
  - [Indice](#indice)
  - [Lista o Array](#lista-o-array)
  - [Creacion](#creacion)
  - [Acceder a un elemento array](#acceder-a-un-elemento-array)
  - [Metodos](#metodos)
    - [Tarea, averiguar que otros metodos mas usados que existen para tratamiento de listas en JavaScript](#tarea-averiguar-que-otros-metodos-mas-usados-que-existen-para-tratamiento-de-listas-en-javascript)
  - [Objetos](#objetos)
  - [Creacion](#creacion-1)
  - [Acceder a un elemento del objeto](#acceder-a-un-elemento-del-objeto)
  - [Metodos](#metodos-1)

A parte de los tipos de datos primitivos, javascript nos proporciona los tipos de datos complejos conocidos tambien como datos estructurados.
Para trabajar con estos datos deberemos conocer la forma de representarlos en la memoria de nuestra maquina.
Javascript trabaja con dos tipos de datos estructurados que trabajan de manera independiente o en conjunto. son:
## Lista o Array
Es lista en JavaScript son un tipo de datos estructurados que no permiten almacenar distintos tipos de datos primitivos separados por comas, cada tipo de dato queq se almacena en una lista se lee como elemento.
Asi cada elemento estara separado por coma.
## Creacion
Primero debemos crear un enlace (una variable) y luego le asignamos la lista que se cree con un `corchete []`, los elementos estaran dentro de los corchetes separados por comas.
```js
// estoy creando un alilsta vacia 
let miLista= []
//creando una lista con numeros
let numeros=[]
//creando lista de nombres
let nombre=["jory","adan","nadine"]
//crear una lista mixta
let listaMixta=[2,"edwin",false,["hola","mundo"]]
``` 
## Acceder a un elemento array
Para acceder a un elemento del array debemos, entender que JavaScrip asignara por cada elemento un indice que nos permitira acceder a un elemnto en especificoeste indicees incremental y comenzara de cero con el primer elemnto, el ultimo elemento sera la cantidad de elementos menos uno.
```js
let numeros=[3,5,4,9,62,7,6]
console.log(numeros[5])
```
>[!NOTE]
> Existe otra manera de acceder a los elementos de una lista, esto se logra resorriendo cada elemento de la lista esto se logra con el bucle `for`

```js
let nombres=["cristian","jory","orlando","edwin"]
for (let i=0; i < nombres.length; i++){
  console.log(nombres[i])
}
```
## Metodos
Los metodos son funciones que nos permiten crear, actualizar y eliminar los elementos de una lista, todas las variables que alamacenan una lista  nos permiten acceder a sus metodos poniendo un punto despues del nombre de la variable.
- Metodo para `recuperar la logitud o cantidad` de elementos que tiene una lista.
  ```js
  let numeros=[2,4,5,6,7]
  numeros.length
  ```
- Metodos apara `agregar` un elemento al final de la lista
  ```js
  let vocales=["a"]
  vocales.push("e")
  ```  
- Metodo para `eliminar el ultimo` elemento de uan lista
  ```js
  let vocales=["a","e"]
  numeros.pop()
  ```
### Tarea, averiguar que otros metodos mas usados que existen para tratamiento de listas en JavaScript
Métodos Comunes para Tratamiento de Listas en JavaScript

- **shift:** Elimina el primer elemento de un array y lo devuelve, desplazando todos los demás elementos hacia la izquierda.
Ejemplo:
```js
let arr = [1, 2, 3];
arr.shift();  // Devuelve 1, array ahora es [2, 3]
```
- **unshift():** Añade uno o más elementos al principio de un array y devuelve la nueva longitud del array.
Ejemplo:
```js
let arr = [1, 2, 3];
arr.unshift(0);  // [0, 1, 2, 3]
```
- **splice():** Modifica el contenido de un array eliminando, reemplazando o añadiendo elementos en una posición específica.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 'a', 'b');  // Elimina 1 elemento en el índice 2 y agrega 'a' y 'b'
// Resultado: [1, 2, 'a', 'b', 4]
```
- **slice():** Devuelve una copia superficial de una porción de un array, sin modificar el array original.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3);  // Devuelve [2, 3]
```

- **forEach():** Ejecuta una función sobre cada elemento del array.
Ejemplo:
```js
let arr = [1, 2, 3];
arr.forEach(item => console.log(item));  // Imprime 1, 2, 3
```
- **map():** Crea un nuevo array con los resultados de aplicar una función a cada elemento del array original.
Ejemplo:
```js
let arr = [1, 2, 3];
let newArr = arr.map(x => x * 2);  // [2, 4, 6]
```
- **filter():** Crea un nuevo array con todos los elementos que pasen una prueba definida por una función.
Ejemplo:
```js
let arr = [1, 2, 3, 4, 5];
let evenArr = arr.filter(x => x % 2 === 0);  // [2, 4]
```
- **reduce():** Aplica una función a un acumulador y a cada valor del array (de izquierda a derecha) para reducirlo a un solo valor.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, curr) => acc + curr, 0);  // 10
```
- **find():** Devuelve el primer elemento en el array que satisface la condición proporcionada en la función.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let found = arr.find(x => x > 2);  // 3
```
- **some():** Verifica si al menos un elemento en el array cumple con una condición especificada en la función.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let result = arr.some(x => x > 3);  // true
```
- **every():** Verifica si todos los elementos del array cumplen con la condición definida por una función.
Ejemplo:
```js
let arr = [2, 4, 6];
let result = arr.every(x => x % 2 === 0);  // true
```

- **indexOf():** Devuelve el primer índice en el que un elemento aparece en el array, o -1 si no se encuentra.
Ejemplo:
```js
let arr = [1, 2, 3, 4];
let index = arr.indexOf(3);  // 2
```
- **includes():** Verifica si un array contiene un elemento determinado.
Ejemplo:
```js
let arr = [1, 2, 3];
let contains = arr.includes(2);  // true
```
- **join():** Une todos los elementos de un array en una cadena de texto, separada por un delimitador especificado.
Ejemplo:
```js
let arr = ['a', 'b', 'c'];
let str = arr.join('-');  // 'a-b-c'
```
- **concat():** Une dos o más arrays y devuelve un nuevo array.
Ejemplo:
```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1.concat(arr2);  // [1, 2, 3, 4]
```
- **sort():** Ordena los elementos de un array en su lugar.
Ejemplo:
```js
let arr = [3, 1, 4, 2];
arr.sort();  // [1, 2, 3, 4]
```
- **reverse():** Invierte el orden de los elementos en un array.
Ejemplo:
```js
let arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1]
```
## Objetos
## Creacion
## Acceder a un elemento del objeto
## Metodos
