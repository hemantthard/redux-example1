import {Component} from 'react' ;
import {addToDo as addTodoAction} from "./../action/todoAction";
import {connect} from 'react-redux' ;


const TodoAddView = ({
	addTodoOnClick
}) =>  {

	var input ;
	return (
		<div>
			<input type='text' ref={ e => input = e} 
				placeholder='Add todo' />
			<input type='button' value='Add Todo' 
				onClick={()=>{
					addTodoOnClick(input.value) ;
					input.value = '' ;
				}}/>
		</div>
	)

}

const mapDispatcherToProps = function(dispatch){
	return {
		addTodoOnClick : (text) => {
			dispatch(addTodoAction(text))
		}
	}
}

const TodoAdd = connect(null,mapDispatcherToProps)(TodoAddView) ;
export default TodoAdd ;