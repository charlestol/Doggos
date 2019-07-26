import { DOGS } from '../constants';

const loadingReducer = (state = false, { type }) => {
    switch(type) {
        case DOGS.LOAD:
            return true;
        case DOGS.LOAD_SUCCESS:
        case DOGS.LOAD_FAILURE:
            return false;
        default:
            return state;
    }
}

export default loadingReducer;
