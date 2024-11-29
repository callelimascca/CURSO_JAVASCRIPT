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

> [!NOTE]
> Tecnologias para el procesamiento de texto a travez de marca `markup` (etiquetas- nos permite a travez de `keyword` darle un estilo o significado a un contenido de las etiquetas). La primera tecnologia fue `XML` despues nace `html`, despues la ultima generacion de tecnologia de marcado de texto `markdown`.