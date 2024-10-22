let tablero = '';

for (let fila = 0; fila < 8; fila++) {
    for (let column = 0; column < 8; column++) {
        tablero += (fila % 2 === 0 ? (column % 2 === 0 ? '#' : ' ') : (column % 2 === 0 ? ' ' : '#'));
    }
    tablero += '\n'; 
}
console.log(tablero);
