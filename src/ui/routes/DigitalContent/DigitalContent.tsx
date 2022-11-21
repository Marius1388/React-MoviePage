import { useEffect, useState } from 'react';
import FilterBar from '../../components/filter/Filter';
import { getData } from '../../../services/DataService';
import CardList from '../../components/cardList/CardList';
import Pagination from '../../components/Pagination/Pagination';
import {
	ProgramType,
	DigitalContent,
	InputChangeEventHandler,
} from '../../../types/types';

import './DigitalContent.styles.scss';

interface DigitalContentProps {
	programType: ProgramType;
}

export function DigitalContentComponent({ programType }: DigitalContentProps) {
	const [textFilter, setTextFilter] = useState<string>('');
	const [yearFilter, setYearFilter] = useState<Date>();
	const [filteredContent, setFilteredContent] = useState<DigitalContent[]>([]);
	const filterTitleHandler: InputChangeEventHandler = (event) => {
		setTextFilter(event.target.value);
	};
	const filterYearHandler = (event) => {
		setYearFilter(event);
	};
	const [contentFetched, setContentFetched] = useState<DigitalContent[]>([]);

	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 10;
	const lastCardIndex = currentPage * cardsPerPage;
	const firstCardIndex = lastCardIndex - cardsPerPage;
	const currentContent = filteredContent.slice(firstCardIndex, lastCardIndex);

	const handleLeftArrow = () => {
		if (currentPage < 2) return;
		setCurrentPage((prevPage) => prevPage - 1);
	};
	const handleRightArrow = () => {
		if (currentPage > Math.ceil(filteredContent.length / cardsPerPage) - 1)
			return;
		setCurrentPage((prevPage) => prevPage + 1);
	};

	useEffect(() => {
		const fetchData = async () => {
			const res: DigitalContent[] = await getData(programType);
			setContentFetched(res);
		};
		fetchData();
	}, [programType]);

	useEffect(() => {
		const filtered = contentFetched.filter((movie) => {
			if (textFilter !== '' || textFilter != null) {
				if (yearFilter != null) {
					return (
						movie.title
							.toLowerCase()
							.includes(textFilter.toLowerCase()) &&
						movie.releaseYear === yearFilter?.getFullYear()
					);
				} else {
					return movie.title
						.toLowerCase()
						.includes(textFilter.toLowerCase());
				}
			}
		});
		setFilteredContent(filtered);
		setCurrentPage(1);
	}, [contentFetched, textFilter, yearFilter]);

	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<div className="container">
			<FilterBar
				filterTitleHandler={filterTitleHandler}
				filterYearHandler={filterYearHandler}
				yearFilter={yearFilter}
			/>
			<h2>Popular {capitalizeFirstLetter(programType)}</h2>
			{currentContent.length === 0 ? (
				<p className="nothing">Nothing to show...</p>
			) : (
				<CardList content={currentContent} />
			)}

			<Pagination
				totalObjects={filteredContent.length}
				objectsPerPage={cardsPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				handleLeftArrow={handleLeftArrow}
				handleRightArrow={handleRightArrow}
			/>
		</div>
	);
}
