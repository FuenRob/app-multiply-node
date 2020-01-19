const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    
    if( !Number(base) ){
        console.log(`El valor introducido ${base} no es un número`.red);
        return;
    }

    console.log(`====== tabla de ${base} ======`.green);
    for(let i = 1; i <= limite; i++){
        console.log(`${i} x ${base} = ${i*base}`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject)  =>{

        if( !Number(base) ){
            reject(`El valor introducido ${base} no es un número`.red);
            return
        }

        let resultados = "";
        for(let i = 1; i <= limite; i++){
            resultados += `${i} x ${base} = ${i*base} \n`;
        }

        fs.writeFile(`./files/tabla-${base}.txt`, resultados, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
