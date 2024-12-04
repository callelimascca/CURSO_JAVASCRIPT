let input = document.querySelector("#tarea");
let button = document.querySelector("#btn-agregar");
let ul = document.querySelector("#lista-tareas");

button.addEventListener("click", () => {

    let li = document.createElement("li");
    li.textContent = input.value;

    let eliminarButton = document.createElement("button");
    eliminarButton.textContent = "eliminar";

    li.appendChild(eliminarButton);

    ul.appendChild(li);

    input.value = "";

    eliminarButton.addEventListener("click", () => {

        ul.removeChild(li);
    });
});
