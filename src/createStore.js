import {createStore} from 'redux';
import reducers from './app/reducers';

export default function(){
  return createStore(reducers)
}