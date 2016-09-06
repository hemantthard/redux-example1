import {Component} from 'react' ; 
import FilterLink from './filter.jsx' ;
import FilterOption from "./../constants/filterOption"



export default class Footer extends Component {

	render(){
		return(
			<div>
				<FilterLink filter={FilterOption.ALL}>
					{FilterOption.ALL}
				</FilterLink>
				{', ' }
				<FilterLink filter={FilterOption.COMPLETED}>
					{FilterOption.COMPLETED}
				</FilterLink>
				{', ' }
				<FilterLink filter={FilterOption.PENDING}>
					{FilterOption.PENDING}
				</FilterLink>
			</div>
		)
	}
}