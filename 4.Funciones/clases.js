
//diseñar una clase para mi entidad celular.
//tendra como atributo numero, marca, modelo, capacidad de bateria.
//tendra como metodos encender, apagar, llamar, colgar, enviar mensaje
class Celular {
    // Constructor que define los atributos del celular
    constructor(numero, marca, modelo, capacidadBateria) {
      this.numero = numero;            
      this.marca = marca;              
      this.modelo = modelo;            
      this.capacidadBateria = capacidadBateria;  
      this.encendido = false;          
      this.llamando = false;           
    }
  
    // Método para encender el celular
    encender() {
      if (this.encendido) {
        console.log("El celular ya está encendido.");
      } else {
        this.encendido = true;
        console.log("El celular se ha encendido.");
      }
    }
  
    // Método para apagar el celular
    apagar() {
      if (!this.encendido) {
        console.log("El celular ya está apagado.");
      } else {
        this.encendido = false;
        console.log("El celular se ha apagado.");
      }
    }
  
    // Método para realizar una llamada
    llamar(numeroDestino) {
      if (!this.encendido) {
        console.log("No puedes llamar, el celular está apagado.");
      } else if (this.llamando) {
        console.log("Ya estás en una llamada.");
      } else {
        this.llamando = true;
        console.log(`Llamando al número ${numeroDestino}...`);
      }
    }
  
    // Método para colgar una llamada
    colgar() {
      if (!this.encendido) {
        console.log("No puedes colgar, el celular está apagado.");
      } else if (!this.llamando) {
        console.log("No estás en ninguna llamada.");
      } else {
        this.llamando = false;
        console.log("La llamada ha terminado.");
      }
    }
  
    // Método para enviar un mensaje
    enviarMensaje(numeroDestino, mensaje) {
      if (!this.encendido) {
        console.log("No puedes enviar el mensaje, el celular está apagado.");
      } else {
        console.log(`Enviando mensaje a ${numeroDestino}: ${mensaje}`);
      }
    }
  }
 
  const miCelular = new Celular("123456789", "Samsung", "Galaxy S21", 5000);
  miCelular.encender();
  miCelular.llamar("987654321");
  miCelular.enviarMensaje("987654321", "Hola, ¿cómo estás?");
  miCelular.colgar();
  miCelular.apagar();
  