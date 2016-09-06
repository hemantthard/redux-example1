import {Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';
import TodoApp from "./component/todoApp.jsx" ;
import store from "./store/appStore";
import {Provider} from "react-redux" ;
 

const render = () => {
	ReactDOM.render(
		<Provider  store={store} >
			<TodoApp /> 
		</Provider>, 
	document.getElementById('root'));
};

render();


