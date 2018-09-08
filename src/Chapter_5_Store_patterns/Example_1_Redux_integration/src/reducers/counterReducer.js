import types from '../flux/AppActionTypes';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
    case types.INC_COUNTER:
        return state + 1;
    case types.DEC_COUNTER:
        return state - 1;
    default:
        return state;
    }
};

export default counterReducer;
