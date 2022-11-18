import './Pagination.styles.scss';
import left from '../../../assets/icon/left-chevron.svg';
import right from '../../../assets/icon/right-chevron.svg';

const Pagination = ({
	totalObjects,
	objectsPerPage,
	setCurrentPage,
	currentPage,
	handleLeftArrow,
	handleRightArrow,
}) => {
	let pages: number[] = [];
	for (let i = 1; i <= Math.ceil(totalObjects / objectsPerPage); i++) {
		pages.push(i);
	}

	return (
		<div className="pagination">
			<img
				src={left}
				width={16}
				alt="decrease navigation page"
				onClick={handleLeftArrow}
				className={currentPage === 1 ? 'disabled' : ''}
			/>
			{pages.map((page, index) => {
				return (
					<button
						key={index}
						onClick={() => setCurrentPage(page)}
						className={page == currentPage ? 'active' : ''}>
						{page}
					</button>
				);
			})}

			<img
				src={right}
				width={16}
				alt="increase navigation page"
				onClick={handleRightArrow}
				className={
					currentPage === Math.ceil(totalObjects / objectsPerPage)
						? 'disabled'
						: ''
				}
			/>
		</div>
	);
};

export default Pagination;
