import TodoReducer from "./todoReducer" ;
import FilterReducer from "./filterReducer" ;

const TodoAppReducer = (state={}, action) => {

	return {
		todos : TodoReducer(state.todos, action),
		currentFilter : FilterReducer(state.currentFilter , action)
	}

}

export default TodoAppReducer;