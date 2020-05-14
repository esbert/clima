const lugar = require('./LUGAR/lugar');
const clima = require('./CLIMA/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
//coords = lugar.getLugarLatLgn(argv.direccion)
//    .then(console.log);

//clima.getClima('40.750000', '-74.000000')
//    .then(console.log)
//    .catch(console.log);



const getInfo = async(direccion) => {

    //    console.log(`Direccio parametro ${direccion}`);

    try {
        const coords = await lugar.getLugarLatLgn(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        //       return (coords, temp);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (e) {
        //        return `No se pudo determinar el clima de ${ direccion }`;
    }

};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);




//Console
//node app -d "new york"   
//Obtendremo la siguiente es la repuesta
//{
//    direccion: 'New York City, New York',
//    lat: '40.750000',
//    lng: '-74.000000'
//  }