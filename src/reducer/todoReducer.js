import TodoConstant from "./../constants/todoConstant"; 

let nextId = 0 ;
const TodoReducer = (state = [], action) => {
	const actionType = action.type ;
	
	switch(actionType){
		case TodoConstant.ADD_TODO : 
			return [
				...state,
				{
					text : action.text,
					id : nextId++ ,
					completed :false 
				}
			]
		case TodoConstant.TOGGLE_TODO : 
			let id = action.id ;

			let x = state.map(todo => {
				if(todo.id == id) {
					return Object.assign({}, todo, {completed:!todo.completed})
				}
				return todo ;
			});
			
			return x ;
		default : return state ;
	}
};

export default TodoReducer ;