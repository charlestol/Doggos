import {DOGS} from '../constants';

const errorReducer = (state = null, {type, payload}) => {
    switch(type) {
        case DOGS.LOAD_FAILURE:
            return payload.error;
        case DOGS.LOAD:
        case DOGS.LOAD_SUCCESS:
            return null;
        default:
            return state;
    }
}

export default errorReducer;