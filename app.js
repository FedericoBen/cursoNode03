// const multiplicar = require('./multiplicar/multiplicar')
//por medio de la desestructuracion
// const argv = require('yargs')
//     .command('listar', 'imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     }).command('crea', 'crea un archivo con los numeros hasta limite y segun la base que se defina', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

const { alias } = require('yargs');

const { argv } = require('./config/yargs')
const colors = require('colors')
const { crearArchivo } = require('./multiplicar/multiplicar');
const { listar } = require('./multiplicar/listar');

// let base = 'adc';

// console.log(process.argv)
// let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1]

// console.log(base);
// console.log(multiplicar);

console.log(`Limite ${argv.limite}, base ${argv.base}`);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

let operaciones = async(comando, base, limite) => {

    switch (comando) {

        case 'listar':
            console.log('listar')
            let datos = await listar(argv.base, argv.limite)
            console.log(datos);
            break;
        case 'crear':
            console.log('crear')
            crearArchivo(base, limite)
                .then(archivo => console.log('Archivo creado:' + colors.blue(`${archivo}`)))
                .catch(err => console.log(err));
            break;
        default:
            console.log('comando no reconocido');

    }

}

operaciones(comando, base, limite)
    .then(res => console.log(res))
    .catch(err => console.log(err));


// console.log(argv2);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => console.log(err));