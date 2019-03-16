
//const multiplicar=require('./multiplicar/multiplicar');
//O mas facil con las destructuracion:

const argv=require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo,listarTabla }=require('./multiplicar/multiplicar');

let comando=argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite);
    break;

    case 'crear':

        crearArchivo(argv.base,argv.limite)
            .then((archivo) => {console.log(`Archivo creado:${archivo}`);})
            .catch((err) => {console.log(err);});        
    break;        

    default:
        console.log('Comando no reconozido');

}
//let base='ac'
//Devuelve los argumentos al ejecutar el node
//SI ejecuto desde la consola node app --base=5 VERE que me detecta --base=5 como un 
//nuevo argumento
//console.log(process.argv);

//let argv2=process.argv;
//console.log('base:',argv.base);
//console.log('limite:',argv.limite);


//let parametro=argv[2]; //ya que en la primera(0) esta la ubicacion de node y en la segunda(1) la ubicacion de app.js
//let base=parametro.split('=')[1];
//console.log(base);





