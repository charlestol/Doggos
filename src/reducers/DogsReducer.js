import { DOGS } from '../constants';

const dogsReducer = (state = null, {type, payload}) => {
    if(type===DOGS.LOAD_SUCCESS) {
        return payload.image.url
    }
    return state;
}

export default dogsReducer;
