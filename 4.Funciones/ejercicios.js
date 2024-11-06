// Haciendo uso  de las funcion de tipo `closure`
// Ejercicio 1
// pedir al usuario su nombre y su edad, verificar que su edad sea mayor a 18 año en ese caso mostrar un mensaje de BIENVENIDA mas el nombre ingresado por el usuario.
// function usuario(){
//     let usuario= prompt("Ingresa tu nombre")
//     let edad = Number(prompt("¿Cuántos años tienes?"));
//     if (edad > 18) {
//       alert(`¡BIENVENIDO, ${usuario}!`);
//     } else {
//       alert("Lo siento, debes ser mayor de 18 años.");
//     }
//   }

//usuario();
//Ejercicio 2
// crear un programa que pida registrar el nombre de un producto, el usuario podra luego eliminar el producto o actualizar el nombre del producto.
// observacion al realizar la actualizacion podre ver el valor anterior como el valor nuevo.
function pedirProducto(){
    this.nombreProducto = prompt("Ingresa el nombre del producto:");

    this.mostrarProducto = function(){
        console.log(`Producto actual: ${this.nombreProducto}`);
    };

    this.actualizarProducto = function(){
        const nuevoNombre = prompt("Ingresa el nuevo nombre del producto:");
        console.log(`Actualización: Producto anterior: ${this.nombreProducto}, Nuevo producto: ${nuevoNombre}`);
        this.nombreProducto = nuevoNombre;
    };

    this.eliminarProducto = function(){
        console.log(`El producto "${this.nombreProducto}" ha sido eliminado.`);
        this.nombreProducto = null;
    };
}
const adminProducto = new pedirProducto();
adminProducto.mostrarProducto();       
adminProducto.actualizarProducto();    
adminProducto.mostrarProducto();       
adminProducto.eliminarProducto();