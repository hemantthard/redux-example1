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
FilterLinkView.propTypes = {
	filter : React.PropTypes.string.isRequired ,
	selectedFilter : React.PropTypes.string.isRequired ,
	onFilterLinkClick : React.PropTypes.func.isRequired ,
	children : React.PropTypes.node.isRequired
}

const FilterLink = connect(mapStateToProps,mapDispatcherToProps)(FilterLinkView) ;
export default FilterLink ;