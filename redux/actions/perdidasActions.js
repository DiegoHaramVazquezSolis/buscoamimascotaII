import { db } from '../../firebase/firebase';
import { GET_PERDIDAS } from './../ReduxConstants';

export const loadPerdidas = () => async dispatch => {
    await db.child('Perdidas').once('value', (mascotasPerdidas) => {
        return dispatch({ type: GET_PERDIDAS , payload: mascotasPerdidas.val() });
    });
}