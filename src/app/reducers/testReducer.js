import {LEVEL_UP, FETCH_LEVEL} from '../actions/types';

export default function(state = {level: 1}, action){
  switch(action.type){
    case LEVEL_UP:
      return {...state, level: action.payload.level}

    case FETCH_LEVEL:
      return {...state, level: action.payload.level}
  }
  return state;
}
