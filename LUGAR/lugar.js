//node app -d "Madrid"
const axios = require('axios');

const getLugarLatLgn = async(dir) => {

    // maneja el caracter del espacio entre los nombre de la ciudades
    const encodedUrl = encodeURI(dir);
    console.log(encodedUrl);
    // backtip ``
    //https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=New York
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'f09ab78b51msh94b14b421fcb7cap16a6a2jsn45ec55f150f1' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${ dir }`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion: dir,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLgn
};