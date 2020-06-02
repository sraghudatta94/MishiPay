import {combineReducers} from 'redux';


import { restaurantReducer } from './restaurant/reducer';




export const appReducer = combineReducers({
    restaurant : restaurantReducer,
    
       
});
