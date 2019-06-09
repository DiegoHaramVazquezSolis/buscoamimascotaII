import axios from 'axios';

/**
 * Distance between points in kilometers
 * @param {Object} cc1 { latitud: double, longitud: double }
 * @param {object} cc2 { latitud: double, longitud: double }
 * @returns {double} Distance in kilometers
 */
export function getDistanceFromLatLonInKm(cc1, cc2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(cc2.lat-cc1.lat);  // deg2rad below
    var dLon = deg2rad(cc2.lon-cc1.lon); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(cc1.lat)) * Math.cos(deg2rad(cc2.lat)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
}

/**
 * Convert Degresses to radians
 * @param {double} deg Degresses to convert
 * @returns {double} radians
 */
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

/**
 * Return list of places based on the location obtained of mapbox Geologation API
 * or Promise.reject() if the query have less than two characters
 * @param {string} location location to query on mapbox API
 */
export function makeGeolocationMapBoxQuery(location) {
    if (location.length > 1) {
        const URILocation = encodeURI(location);
        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${URILocation}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1560102813486&autocomplete=true&types=place%2Cdistrict`);   
    } else {
        return Promise.reject();
    }
}

/**
 * Make a query to an API to get user location (city, state and country) based on their IP
 * and return the response of the query
 */
export async function getUserLocationBasedOnTheirIP() {
    return await getUserIP()
    .then((ipResponse) => {
        return axios.get(`http://api.ipstack.com/${ipResponse.data}?access_key=8c50179e5095cd3b5160b64da0942400&format=1`);
    });
}

/**
 * Get the user IP
 */
function getUserIP() {
    return axios.get('https://api.ipify.org/?callback=getIP');
}

/**
 * Sample objects
 * var cc1 = {
        lat: -103.4292657,
        lon: 20.6115058
    };
    var cc2 = {
        lat: -103.4155404,
        lon: 20.6072093
    };
 */