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