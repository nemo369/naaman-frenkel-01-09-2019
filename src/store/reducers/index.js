import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import favs from './favs'
import city from './city'
import nightMode from './nightMode'

const rootReducer = combineReducers({favs, city,nightMode, routing: routerReducer });

export default rootReducer;