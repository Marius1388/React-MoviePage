import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Filter.styles.scss';
import tv from '../../../assets/icon/tv.svg';
import { url } from 'inspector';

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
				className="yearFilter"
				placeholderText="Search by Release Year..."
				popperPlacement="bottom-end"
				selected={yearFilter}
				onChange={filterYearHandler}
				showYearPicker
				dateFormat="yyyy"
			/>
		</div>
	);
};
export default FilterBar;
