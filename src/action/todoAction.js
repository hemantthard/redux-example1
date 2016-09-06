import TodoConstant from "./../constants/todoConstant"

export const addToDo = (text) => {
	return {
		type : TodoConstant.ADD_TODO,
		text
	}
}

export const toggleTodoAction = (id) => {
	return {
		type : TodoConstant.TOGGLE_TODO,
		id
	}
}