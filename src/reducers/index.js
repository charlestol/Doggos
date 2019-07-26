import { combineReducers } from 'redux';
import dogs from './DogsReducer';
import isLoading from './LoadingReducer';
import error from './ErrorReducer';

export default combineReducers({
    dogs,
    isLoading,
    error
});
