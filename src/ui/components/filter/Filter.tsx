import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Filter.styles.scss';

const FilterBar = ({ filterTitleHandler, filterYearHandler, yearFilter }) => {
	return (
		<div className="filters-container">
			<input
				type="text"
				className="textFilter"
				placeholder="Search by Title..."
				onChange={filterTitleHandler}
			/>
			<DatePicker
				className="year-filter"
				placeholderText="Search by Release Year..."
				selected={yearFilter}
				onChange={filterYearHandler}
				showYearPicker
				dateFormat="yyyy"
				isClearable
			/>
		</div>
	);
};
export default FilterBar;
