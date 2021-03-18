import { createStore, combineReducers } from 'redux';

import demandsReducer from './reducers/demands';

const reducers = combineReducers({
    demands: demandsReducer,
})

function storeConfig() {
    return createStore(reducers);
}

export default storeConfig;