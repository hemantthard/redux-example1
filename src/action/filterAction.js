import FILTER_CONSTANT from "./../constants/filterConstant" ; 

const FilterAction = (currentFilter) => {
	return {
		currentFilter : currentFilter,
		type : FILTER_CONSTANT.FILTER_SELECTION 
	}
}

export default FilterAction ;