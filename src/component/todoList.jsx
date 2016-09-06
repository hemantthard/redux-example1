import {Component} from 'react' ;
import {toggleTodoAction} from './../action/todoAction' ;
import FilterOption from "./../constants/filteroption" ;
import {connect} from 'react-redux' ;


const getTodoList = ({todos, currentFilter}) => {
	switch(currentFilter){
		case FilterOption.COMPLETED : 
			return todos.filter(x => x.completed);
		case FilterOption.PENDING : 
			return todos.filter(x => !x.completed);
		default :
			return todos;
	}
}


const TodoView = ({
	todos,
	onTodoClick 
}) => {
	return (
		<ul>
			{todos.map(todo => {
				return (
					<li key={todo.id}
						onClick={ () => {
								onTodoClick(todo.id) ;
							}
						} 
						style = {{textDecoration : todo.completed ? 
									'line-through' : 'none'}}
						> 
							{todo.text}
					</li>
				)}
			)}			
		</ul>
	)
}

const mapStateToProps = (state) => {
	return {
		todos : getTodoList(state)
	}

}

const mapDispatcherToProps = (dispatch) => {
	return {
		onTodoClick : (id) => {
			dispatch(toggleTodoAction(id)) ;
		}
	}

}
const TodoList = connect(mapStateToProps,mapDispatcherToProps)(TodoView) ;
export default TodoList ;