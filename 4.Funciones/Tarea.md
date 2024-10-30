## LIFO
La gestión de stock para almacenes LIFO (Last in, First out, en inglés) o  UEPS (Última en Entrar, Primera en Salir)
## Que es?
LIFO, que significa último en entrar, primero en salir, es un principio de estructura de datos en el que el elemento agregado más recientemente es el primero en eliminarse. Este método se usa comúnmente en estructuras de datos de pila, donde se agregan y eliminan elementos desde la parte superior. En una estructura LIFO, el último elemento agregado a la pila será el primero en retirarse, similar a una pila de placas donde se agregan y quitan placas desde la parte superior.
El término LIFO se utiliza en estructuras de datos y teoría de colas. Guarda analogía con una pila de platos, en la que los platos van poniéndose uno sobre el otro, y si se quiere sacar uno, se saca primero el último que se ha puesto.
LIFO es el algoritmo utilizado para implementar pilas.

## ¿Cómo funciona el método LIFO?
El método LIFO (Último en entrar, primero en salir) funciona siguiendo un proceso sencillo en el que el elemento agregado más recientemente es el primero en eliminarse. A continuación te explicamos detalladamente cómo funciona:

Adición de elementos. Cuando se agrega un elemento a una estructura LIFO, se coloca encima de los elementos existentes. Esta operación normalmente se denomina operación "push" en el contexto de pilas.
Eliminación de elementos. Cuando es necesario eliminar un elemento, primero se retira el elemento que se encuentra en la parte superior de la pila. Esta operación se conoce como operación "pop". Debido a que los elementos siempre se agregan y eliminan desde la parte superior, el último elemento agregado es siempre el primero en eliminarse.
Accediendo a elementos. En una estructura LIFO no se permite el acceso directo a elementos distintos al superior. Para acceder a un elemento, primero se deben eliminar todos los elementos que se encuentran encima de él.
Operaciones de pila. Además de las operaciones de empujar y hacer estallar, suele haber una operación de "mirar" que permite ver el elemento superior sin quitarlo.