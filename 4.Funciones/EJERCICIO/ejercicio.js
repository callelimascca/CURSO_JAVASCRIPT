// 1
function obtenerNumeroMenor(...numeros) {
    let menor = numeros[0]; 
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] < menor) {
        menor = numeros[i]; 
      }
    }
  
    return menor;
  }
  
  console.log(obtenerNumeroMenor(10, 5, 2, 8));

// 2

function numeros(n) {
    if (n <= 1) {
      return n;
    }

    return numeros(n - 1) + numeros(n - 2);
  }
  
  function mostrarNumero(cantidad) {
    for (let i = 0; i < cantidad; i++) {
      console.log(numeros(i));
    }
  }
  mostrarNumero(20);
  