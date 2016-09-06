import {Component } from 'react' ;
import FilterAction from "./../action/filterAction";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
	return {
		selectedFilter : state.currentFilter 
	}
}
const mapDispatcherToProps = (dispatch,ownProps) => {
	return {
		onFilterLinkClick : () =>{
			dispatch(FilterAction(ownProps.filter));
		}
	}
}


const FilterLinkView = ({
	filter,
	selectedFilter,
	onFilterLinkClick,
	children
}) => {
	if(selectedFilter == filter){
		return <span> {children} </span>
	}
	return (
		<a href='#' 
			onClick={onFilterLinkClick} 
			>
			{children}
		</a>
	)
}

const FilterLink = connect(mapStateToProps,mapDispatcherToProps)(FilterLinkView) ;
export default FilterLink ;