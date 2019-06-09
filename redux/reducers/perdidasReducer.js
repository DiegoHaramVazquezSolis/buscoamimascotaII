import { GET_PERDIDAS, GET_PERDIDA_BY_ID } from './../ReduxConstants';

const initialState = {
    perdidas: {},
    perdidaSelected: {}
};

function perdidasReducer(state = initialState, action) {
      switch (action.type) {
        case GET_PERDIDAS:
            return Object.assign({}, state, {
                perdidas: action.payload
            });
        case GET_PERDIDA_BY_ID: {
            return Object.assign({}, state, {
                perdidaSelected: action.payload
            });
        }
        default:
            return state;
      }
};

export default perdidasReducer;