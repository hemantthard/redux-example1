import {Component} from 'react' ;
import TodoAdd from './todoAdd.jsx' ;
import TodoList from "./todoList.jsx";
import Footer from './footer.jsx' ;


export default class TodoApp extends Component {

	render() {
		return (
			<div>
				<div> My Todo Component Starts </div>
				<TodoAdd />
				<TodoList />
				<Footer />
			</div>
		)
	}
}