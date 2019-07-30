import { combineReducers } from 'redux';
import image from './DogsReducer';
import isLoading from './LoadingReducer';
import error from './ErrorReducer';

export default combineReducers({
    image,
    isLoading,
    error
});
