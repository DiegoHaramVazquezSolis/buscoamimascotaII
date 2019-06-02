import { db } from './firebase';

/**
 * Create record for new user on database
 * @param {FirebaseUser} user firebase user object
 * @example createUseRecord(user.user)
 */
export function createUseRecord(user) {
    db.child('Users').child(user.uid).set({
        email: user.email,
        name: user.displayName
    });
}