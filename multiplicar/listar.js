let listar = async(base, limite) => {
    if (!Number(base) || !Number(limite)) {
        throw new Error(`el valor introduciodo ${base} no es un numero`)
    } else {
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} X ${i} = ${base*i}\n`;
        }
        return data;
    }
}

module.exports = {
    listar
}