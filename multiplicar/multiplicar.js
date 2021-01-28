//requiereds
const fs = require('fs');

//forma 1
//module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introduciodo ${base} no es un numero`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`;

        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabala-${base}.txt`)
            }

        });
    });

}

//form 2
module.exports = {
    crearArchivo
}