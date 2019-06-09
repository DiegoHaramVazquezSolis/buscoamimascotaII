import { db } from '../../firebase/firebase';
import { GET_PERDIDAS, GET_PERDIDA_BY_ID } from './../ReduxConstants';

export const loadPerdidas = () => async dispatch => {
    await db.child('Perdidas').on('value', (mascotasPerdidas) => {
        return dispatch({ type: GET_PERDIDAS , payload: mascotasPerdidas.val() });
    });
}

export const loadPerdidaById = (id) => async dispatch => {
    await db.child('Perdidas').child(id).once('value', (mascotaPerdida) => {
        return dispatch({ type: GET_PERDIDA_BY_ID, payload: mascotaPerdida.val() });
    });
}

export const loadPerdidasByPlace = (placeOfInterest) => async dispatch => {
    await db.child('Perdidas').orderByChild('place').equalTo(placeOfInterest).once('value', (mascotasPerdidas) => {
        return dispatch({ type: GET_PERDIDAS , payload: mascotasPerdidas.val() || {} });
    });
}