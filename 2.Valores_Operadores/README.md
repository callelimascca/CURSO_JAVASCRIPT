# VALORES, TIPOS Y OPERADORES
## Indice
- [tipos de datos o valores](#valores)
## Valores
Imagina un mar de bits

![IMG](https://upload.wikimedia.org/wikipedia/commons/c/c2/Memory_Address_Register_%28MAR%29.jpg)

Una computadora moderna tiene mas de 100 mil millones de bits almacenados en su `memoria de trabajo` o `memoria principal` o `memoria volatil` o `ram`.
Ahora la memoria no volatil o memoria secundaria o memoria de almacenamiento tiene estos bits de manera ordenada generalmente apilada como si de un estante de una biblioteca se tratara.

cuando nosotros programamos hacemos uso de `memoria de trabaj○`,
para trabajar con los bits que se encuentran en nuestro mar de bits, javascript ordena los bits en pequeñas partes o piezas de informacion a esto se le conoce como **VALORES**

Cada valor tiene una funcionalidad distinta puede ser un numero, texto o una funcion.
cuando habloamos de tipo de datos de javascript nos referimos a su representacion binaria y al tipo de valor que usamos. **En JavaScript se le conoce como:**
### Datos primitivos:
son aquellos datos que ya existen no pueden ser creados, actualizados ni eliminados solo pueden ser llamados para el uso que deseamos dar.
Los datos primitivos en javascript son:
#### - Numericos(number): 
Los valores de tipo numero como es de esperar son numero y en javascript se escribe o se hace el llamado de este valor de la siguiente manera:

- **NUMERO DE TIPO ENTERO**
```js
//estamos usando un patron de bits para el numero 20 que existia dentro de la memoria de trabajo.
// este numero es entero positivo
20
// esto es numero entero negativo
-20
```
- **NUMERO DE PUNTO FLOTANTE DECIMAL FRACCION**
```JS
// decimal positivo
2.7 
.0
0.
//decimal negativo
-2.7 
```
- **NUMEROS DE NOTACION CIENTIFICA:**
```JS
// decimal positivo
2.998e8 //Esta info se almacena en 64 bits
//2,998*10^8

// decimal negativo
-2.998e8
```
> [!WARNING]
> Cuando javascript realiza operacion con numeros enteros el resultado simepre sera exacto, cuando realice operaciones con numeros decimales el resulado perdera presicion por que solo tiene 64 bits para almacenar esto suele ocurrir con resultados cuyos decimales sean infinitos com en el caso del numero pi. **Es nuestra responsabilidad como programador hacer el uso de los decimales con aproximaciones para evitar errores.**

> [!TIP]
> Cuando javascript hace trabajo de memoria **(cuando crea un patron de bits para almacenar)** todos los numeros son almacenados como decimal positivo.


- **NUMEROS ESPECIALES**
  En JavaScript existen tres valores de tipo numero que se consideran un dato primitivo numerico de tipo especial.

  ```Js
  Infinity // cuando la operacion muestra un resultado infinito.
  - Infinity // cuando la operacion es de numeros negativo.
  NaN //not a number ("no es un numero").
  // cuando el resultado de la operacion es matematicamente imposible te muestra el msj de (NaN).
 
  ```
#### - Aritmetica (Operadores aritmeticos) 
 La principal operacion que se puede hacer con numeros es la aritmetica.
 Para esto tenemos lo operadores aritmeticos como:
 - suma(+).
 - resta (-).
 - multiplicacion (*).
 - division (/).
 - potencia (**).
 - modulo (%).
**Podemos agrupar operaciones con parentesis () las operaciones que esten entre las parentesis se jecutaran primero**

 Cosulta el archivo de operadores [aqui](./operadores.js)

  Ve los ejercicios [aqui](./ejercicios.js)
   
- tipos (tipos de datos)
- operadores
