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
function pedirProducto() {
    this.nombreProducto = '';

    this.registrarProducto = function() {
        this.nombreProducto = prompt("Ingresa el nombre del producto:");
        console.log(`Producto registrado: ${this.nombreProducto}`);
    };

    this.actualizarProducto = function() {
        const nombreAnterior = this.nombreProducto;
        const nuevoNombre = prompt("Ingresa el nuevo nombre del producto:");

        if (nuevoNombre) {
            this.nombreProducto = nuevoNombre;
            console.log(`Producto actualizado: Anterior: ${nombreAnterior}, Nuevo: ${this.nombreProducto}`);
        } else {
            console.log("No se ha realizado ninguna actualización.");
        }
    };
    this.eliminarProducto = function() {
        if (this.nombreProducto) {
            const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el producto "${this.nombreProducto}"?`);
            if (confirmacion) {
                console.log(`Producto eliminado: ${this.nombreProducto}`);
                this.nombreProducto = '';
            } else {
                console.log("El producto no ha sido eliminado.");
            }
        } else {
            console.log("No hay ningún producto registrado para eliminar.");
        }
    };
}
const producto = new pedirProducto();
producto.registrarProducto();
producto.actualizarProducto();
producto.eliminarProducto();