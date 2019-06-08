import { GET_PERDIDAS } from './../ReduxConstants';

const initialState = {
    perdidas: {}
};

function perdidasReducer(state = initialState, action) {
      switch (action.type) {
        case GET_PERDIDAS:
            return Object.assign({}, state, {
                perdidas: action.payload
            });
        default:
            return state;
      }
};

export default perdidasReducer;