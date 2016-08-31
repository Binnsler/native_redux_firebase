export default function(state = {level: 1}, action){
  switch(action.type){
    case 'LEVEL_UP':
      return {...state, level: state.level + 1}
  }
  return state;
}
