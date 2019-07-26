import { DOGS } from '../constants';

export const loadDogs = () => { console.log('loading'); return ({
    type: DOGS.LOAD
});}

export const setDogs = dogs => ({
    type: DOGS.LOAD_SUCCESS,
    payload: {
        dogs
    }
});

export const setError = error => ({
    type: DOGS.LOAD_FAILURE,
    payload: {
        error
    }
});