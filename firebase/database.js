import { db } from './firebase';

/**
 * Create record for new user based on email on database
 * @param {FirebaseUser} user firebase user object
 * @example createUseRecord(user.user)
 */
export function createUserRecordBasedOnEmail(user) {
    db.child('Users').child(user.uid).set({
        email: user.email,
        name: user.displayName
    });
}

/**
 * Create record for new user based on facebook on database
 * @param {Object} user User object returned from facebook authentication
 * @param {string} token FB token of the new user
 */
export function createUserRecordBasedOnFacebook(user, token) {
    db.child('Users').child(user.uid).set({
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
        fbToken: token
    });
}

/**
 * Write on database a publication of a mascota perdida
 * @param {object} mascotaInfo Information of the mascota perdida
 */
export async function publishMascotaPerdida(mascotaInfo){
    return await db.child('Perdidas').push(mascotaInfo);
}

/**
 * Save place (city, state and country) where Perdida was reported on database
 * @param {string} place Name of place (city, state and country) where Perdida was reported
 */
export async function savePlaceOfPerdidaOnDatabase(place) {
    db.child('PerdidasPlaces').update({ [place]: place });
}

/**
 * Get the list of places where are Perdidas reported
 */
export async function getPerdidasPlaces() {
    return await db.child('PerdidasPlaces').once('value');
}