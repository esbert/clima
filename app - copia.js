//node app -d "Madrid"
const axios = require('axios');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la  para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
//node app -d "New York"

// maneja el caracter del espacio entre los nombre de la ciudades
const encodedUrl = encodeURI(argv.direccion);
console.log(encodedUrl);
// backtip ``
//https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New York
const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    timeout: 1000,
    headers: { 'x-rapidapi-key': 'f09ab78b51msh94b14b421fcb7cap16a6a2jsn45ec55f150f1' }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    })
    .catch(err => {
        console.log('Error!!!!!!!, err ');
    });