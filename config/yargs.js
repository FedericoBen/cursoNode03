const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla de multiplicar', opt)
    .command('crea', 'crea un archivo con los numeros hasta limite y segun la base que se defina', opt)
    .help()
    .argv;

module.exports = {
    argv
}