## TAREA
### Averiguar la forma en que se realizan las comparaciones con cadena de texto.

En JavaScript, las comparaciones con cadenas de texto se realizan utilizando operadores de comparación, como ==, ===, !=, !==, <, >, <=, y >=. Aquí te explico cómo funcionan:

1. Comparación de igualdad
==: Compara dos valores para ver si son iguales, haciendo una conversión de tipo si es necesario.
===: Compara dos valores para ver si son estrictamente iguales, sin realizar conversión de tipo.

Ejemplo:

```js
console.log("10" == 10);   // true (convierte "10" a número)
console.log("10" === 10);  // false (diferentes tipos)
```

2. Comparación de desigualdad
   
- !=: Compara dos valores y devuelve true si son diferentes, haciendo conversión de tipo.
- !==: Compara dos valores y devuelve true si son diferentes, sin conversión de tipo.

Ejemplo:

```js
console.log("10" != 10);   // false
console.log("10" !== 10);  // true 
```
3. Comparaciones lexicográficas
   
Las cadenas se comparan en orden lexicográfico, basado en los valores Unicode de los caracteres. Esto significa que se comparan carácter por carácter de izquierda a derecha.

Ejemplo:

```js 
console.log("apple" < "banana");  // true
console.log("a" < "A");            // false (la "A" tiene un valor Unicode menor que la "a")
console.log("abc" > "ab");         // true
```