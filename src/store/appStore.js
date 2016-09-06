import {createStore} from 'redux' ;
import TodoAppReducer from "./../reducer/todoAppReducer" ;

var store = createStore(TodoAppReducer) ;
window.store = store ;
export default store ;

