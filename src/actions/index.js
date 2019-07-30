import { DOGS } from '../constants';

export const loadDogs = () => { console.log('loading'); return ({
    type: DOGS.LOAD
});}

export const setDogs = image => ({
    type: DOGS.LOAD_SUCCESS,
    payload: {
        image
    }
});

export const setError = error => ({
    type: DOGS.LOAD_FAILURE,
    payload: {
        error
    }
});