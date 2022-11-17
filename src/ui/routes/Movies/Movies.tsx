import { useEffect, useState } from 'react';
import FilterBar from '../../components/filter/Filter';
import { getData } from '../../../services/DataService';
import CardList from '../../components/cardList/CardList';
import {
	ProgramType,
	DigitalContent,
	InputChangeEventHandler,
} from '../../../types/types';

export function Movies() {
	const [textFilter, setTextFilter] = useState<string>('');
	const [yearFilter, setYearFilter] = useState<Date>();
	const [filteredMovies, setFilteredMovies] = useState<DigitalContent[]>([]);
	const filterTitleHandler: InputChangeEventHandler = (event) => {
		setTextFilter(event.target.value);
	};
	const filterYearHandler = (event) => {
		setYearFilter(event);
	};
	let [moviesFetched, setMoviesFetched] = useState<DigitalContent[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const res: DigitalContent[] = await getData(ProgramType.movies);
			setMoviesFetched(res);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const filtered = moviesFetched.filter((movie) => {
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
		setFilteredMovies(filtered);
	}, [moviesFetched, textFilter, yearFilter]);

	return (
		<div className="container">
			<FilterBar
				filterTitleHandler={filterTitleHandler}
				filterYearHandler={filterYearHandler}
				yearFilter={yearFilter}
			/>
			<h2>Popular Movies</h2>
			<CardList movies={filteredMovies} />
		</div>
	);
}
