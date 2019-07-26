import dogsSaga from './DogsSaga';
export default function* rootSaga() { yield dogsSaga() };