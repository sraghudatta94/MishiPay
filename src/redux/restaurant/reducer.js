import { SET_RESTAURANT_LIST } from './../type';

const authInitialState = {
  restaurant_list:[]
  };
  
  function restaurantReducer(state = authInitialState, action) {
    switch (action.type) {
      case SET_RESTAURANT_LIST:
        return { ...state, restaurant_list: action.payload };
      default:
        return state;
    }
  }

  export {restaurantReducer}