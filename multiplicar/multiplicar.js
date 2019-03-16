//Requireds
const fs=require('fs'); //paquete nativo de node
const colors = require('colors');
//const fs=require('express'); paquete que se instala
//const fs=require('./sddd');archivos que nosotros escribimos

let listarTabla=(base,limite) =>{

    console.log('==============================='.green);
    console.log(`====== Tabla del ${base} ======`.green);
    console.log('==============================='.green);

    for (let i=1;i<=limite;i++){
        console.log(`${base} * ${i} = ${base*i}\n`);
    }     
}

let crearArchivo=(base,limite=10)=>{
    return new Promise((resolve,reject)=>{
        if (!Number(base)){
            reject(`${base} no es un número`);
            return;
        }

        let data='';
        for (let i=1;i<=limite;i++){
            data +=`${base} * ${i} = ${base*i}\n`;
        }        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
          if (err) 
            reject(err);
          else
            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    })
}

module.exports={
    crearArchivo,
    listarTabla
}
