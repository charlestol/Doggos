import { takeEvery, call, put } from 'redux-saga/effects';
import { DOGS } from '../constants';
import { fetchDoggos } from '../api';
import { setDogs, setError } from '../actions';

function* handleDogFetch() {
    try {
        const dog = yield call(fetchDoggos);
        yield put(setDogs(dog));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

export default function* watchDogFetch() {
    // console.log('watching for fetch')
    yield takeEvery(DOGS.LOAD, handleDogFetch);
}