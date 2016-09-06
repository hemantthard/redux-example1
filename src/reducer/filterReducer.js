import FILTER_CONSTANT from "./../constants/filterConstant" ; 
import FILTER_OPTION from "./../constants/filterOption" ; 

const currentFilter = FILTER_OPTION.ALL;


var FilterReducer = (state = currentFilter , action) => { 
	var type = action.type ;
	switch(type) {
		case FILTER_CONSTANT.FILTER_SELECTION : {
			return action.currentFilter ;
		}
		default : 
			return state ;
	}
	return state ;
}

export default FilterReducer ;