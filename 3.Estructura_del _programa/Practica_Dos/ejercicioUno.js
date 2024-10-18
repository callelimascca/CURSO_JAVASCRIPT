for (let i = 1; i <= 7; i++) {
    let linea = '';
    
    for (let j = 0; j < 7 - i; j++) linea += ' ';
    for (let k = 0; k < 2 * i - 1; k++) linea += '*';
    
    console.log(linea);
}