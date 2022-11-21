import { render, screen } from '@testing-library/react';
import { Header } from "./Header";
import { BrowserRouter } from 'react-router-dom';

test('Header renders Movie and Series Links', () => {
	render(<Header />, { wrapper: BrowserRouter });
	const movieLink = screen.getByText('Movies');
	expect(movieLink).toBeInTheDocument();
	const seriesLink = screen.getByText('Series');
	expect(seriesLink).toBeInTheDocument();
});
