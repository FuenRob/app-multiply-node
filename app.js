const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./module/multiplicar');

let command = argv._[0];

switch(command){
    case "listar":
        //listarTabla(argv.base, argv.limite).then(lista => console.log(`${lista}`)).catch(e => console.log(e));
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Fichero Creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log("Comando no reconocido");
        break;
}
