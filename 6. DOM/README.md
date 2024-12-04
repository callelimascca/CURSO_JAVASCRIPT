# DOM-Document Object Model
Modelo de Documento de Objeto

El DOM es un conjunto de utilidades especificamente diseñadas para manipular documentos html.
El DOM transforma el archivo html en un arbol de nodos jerarquicos, facilmente manipulables.
El DOM convierte todo el contenido todo el archivo en objeto de JavaScript.

- **Mi archivo index.html**
```html
<body>
    <h1 id="titulo">Titulo</h1>
    <p class="parrafo">Esta es la descripcion de mi pag.</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
    </ul>
</body>
```
- **Mi archivo script.js**
```js
document:{
    Element:body,
    Attr:null,
    text:null,
    child:[
    {
        Element:h1,
        Attr:{id:"titulo"},
        Text:"Titulo",
        child:null
    }
    {
        Element:p,
        Attr:{class:"parrafo"},
        Text:"Esta es la descripcion de mi pag.",
        child:null
    }
    {
        Element:ul,
        Attr:null,
        Text:null
        child:[
        {
            Element:li,
            Attr:null,
            Text:"primer elemento",
            child:null
        },
        {
            Element:li,
            Attr:null,
            Text:"segundo elemento",
            child:null           
        },
        {
            Element:li,
            Attr:null,
            Text:"tercer elemento",
            child:null
        }
        ]
    }
    ]
}
```
DOM ademas de realizar el trabajo de convertir un archivo `HTML` en un objeto de JavaScript nos ofrece una `API` **(Application Programming Interface-Interfaz de Programación de Aplicaciones)**.

## Selectores
Los selectores nos permiten obtener o capturar una etiqueta o varias etiquetas `HTML` incluyendo sus atributos, contenido e hijos si los tuviera.
Los selectores que podemos utilizar son variados podemos capturar etiquetas a travez de sus atributos como de el nombre de la etiquetas misma.
Los Selectores son funciones si hablamos de `POO` entonces se puede decir que son metodos.

Son los siguientes:

-**getElementById** - Devuelve un elemento(etiquet) que tenga un `ID` especifico.

```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById()
```
- **getElementByClassName** - Devuelve un elemento que tenga una clase especifica.
```html
<h1 id="titulo">Titulo</h1>
<p class="parrafo">Parrafo uno</p>
<p id="parrafo_dos">Parrafo dos</p>
```
```js
let parrafo=document.getElemtByClassName("parrafo")
```
- **querySelector** - Devuelve el primer elemento que coincida con el selector ingresado puede ser un id, class, name o tag.
  
```html
<h1 id="titulo">Titulo</h1>
<p class="parrafo">Parrafo uno</p>
<p id="parrafo_dos">Parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo=document.querySelector("#titulo")
let primerParrafo=document.querySelector(".parrafo")
let segundoParrafo=document.querySelector("#parrafo_dos")
let subtitulo=document.querySelector("h2")
```
**Averiguar que otros selectores o metodos existe para recorrer el DOM tiene JavaScript**

1. **getElementsByTagName** Selecciona todos los elementos que tienen un nombre de etiqueta específico. También devuelve una colección de nodos.
  ```js
  let elementos = document.getElementsByTagName('div')
  ```
2. **querySelectorAll** - Selecciona todos los elementos que coinciden con el selector CSS proporcionado. Devuelve una NodeList (similar a un array).
```js
  let elementos = document.querySelectorAll('.miClase');
```  
3. **children** - Similar a childNodes, pero solo devuelve los elementos hijos (ignora los nodos de texto y comentarios).
```js
let elementosHijos = document.getElementById('miId').children;
```
4. **parentNode** -  Selecciona el nodo padre de un elemento.
```js
let padre = document.getElementById('miId').parentNode;
```
## Manipulacion del DOM 
- **createElement** - Este metodo crea un elemento HTML con el nombre que le pasemos por parametro.
```js
let titulo=document.createElement("h1")
```
- **appendChild** - Nos permite hacer hijo un elemento dentro de otro.
```js
let titulo=document.createElement("h1")
let body=document.querySelector("body")
body.appendChild(titulo)
```
## Propiedades de los elementos DOM
- **className** - Permite setear o capturar el nombre de la clase que tenga un elemento.
- **id** - lo mismo que `className` pero con el atributo id.
- **inner HTML** - Devuelve o permite insertar codigo HTML (INCLUYENDO TAG Y TEXTO)
- **inner Text** - Devuelve o permite insertar texto en un elemento
- **textContent** - Nos permite agregar o modificar el contenido de un elemento.
- **value** - Nos permite optener o setearvalores de un elemento `input`.
 ## Acciones  o eventos con elementos en el DOM (averiguar)
 1. **Eventos de ratón (mouse events)**
- **click**: Se activa cuando se hace clic en un elemento.
- **dblclick**: Se activa cuando se hace doble clic.
- **mouseover**: Se activa cuando el ratón pasa por encima de un elemento.
- **mouseout**: Se activa cuando el ratón sale de un elemento.
- **mousemove**: Se activa cuando el ratón se mueve dentro de un área específica.
```js
let boton = document.getElementById("miBoton");

boton.addEventListener("click", function() {
  alert("¡Botón clickeado!");
})
```
2. **Eventos del teclado (keyboard events)**
- **keydown**: Se activa cuando se presiona una tecla.
- **keypress**: Se activa cuando se presiona una tecla que genera un carácter (como letras o números).
- **keyup**: Se activa cuando se suelta una tecla.
```js
document.addEventListener("keydown", function(event) {
  console.log(`Tecla presionada: ${event.key}`);
})
```
3. **Eventos de cambio (change events)**
- **change**: Se activa cuando el valor de un campo de entrada cambia y el elemento pierde el foco (como en un campo de formulario).
- **input**: Similar a change, pero se activa en tiempo real a medida que el usuario escribe.
```js
let input = document.getElementById("miInput");

input.addEventListener("input", function() {
  console.log(`Valor del input: ${input.value}`);
})
```
4. **Eventos de enfoque (focus events)**
- **focus**: Se activa cuando un elemento (como un campo de formulario) recibe el foco.
- **blur**: Se activa cuando un elemento pierde el foco.
```js
let input = document.getElementById("miInput");

input.addEventListener("focus", function() {
  console.log("El campo ha recibido el foco");
});

input.addEventListener("blur", function() {
  console.log("El campo ha perdido el foco");
})
```
5. **Eventos de formulario (form events)**
- **submit**: Se activa cuando un formulario se envía.
- **reset**: Se activa cuando un formulario es reiniciado.

```js
let formulario = document.getElementById("miFormulario");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();  // Evitar el envío real del formulario
  console.log("Formulario enviado");
})
```
6. **Eventos de carga (load events)**
- **load**: Se activa cuando un recurso (como una página o una imagen) ha sido completamente cargado.
- **DOMContentLoaded**: Se activa cuando el documento HTML ha sido completamente cargado y parseado, sin esperar por hojas de estilo, imágenes, etc.
```js
window.addEventListener("load", function() {
  console.log("La página y todos los recursos se han cargado");
})
```
7. **Eventos de cambio de tamaño (resize)**
- **resize**: Se activa cuando el tamaño de la ventana del navegador cambia.
```js
window.addEventListener("resize", function() {
  console.log("El tamaño de la ventana ha cambiado");
})
```
8. **Eventos de arrastre y soltado (drag events)**
- **dragstart**: Se activa cuando un elemento comienza a ser arrastrado.
- **dragover**: Se activa cuando un elemento arrastrado pasa sobre un área de destino.
- **drop**: Se activa cuando un elemento arrastrado se suelta sobre un área de destino.

```js
let dragItem = document.getElementById("dragItem");
let dropZone = document.getElementById("dropZone");

dragItem.addEventListener("dragstart", function(event) {
  event.dataTransfer.setData("text", event.target.id);
});

dropZone.addEventListener("dragover", function(event) {
  event.preventDefault();
});

dropZone.addEventListener("drop", function(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  let draggedElement = document.getElementById(data);
  dropZone.appendChild(draggedElement);
  console.log("Elemento soltado");
})
```
9. **Eventos de visualización (visibility events)**
- **visibilitychange**: Se activa cuando cambia la visibilidad de la página (cuando el usuario cambia de pestaña).
pagehide y pageshow: Se activan cuando la página es escondida o mostrada.

```js
document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    console.log("La página está oculta");
  } else {
    console.log("La página está visible");
  }
})
```
> [!NOTE]
> Tecnologias para el procesamiento de texto a travez de marca `markup` (etiquetas- nos permite a travez de `keyword` darle un estilo o significado a un contenido de las etiquetas). La primera tecnologia fue `XML` despues nace `html`, despues la ultima generacion de tecnologia de marcado de texto `markdown`.

