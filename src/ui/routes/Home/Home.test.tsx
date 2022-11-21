import { render, screen, act } from '@testing-library/react';
import { Home } from './Home';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../../services/DataService.ts');

beforeEach(async () => {
	await act(async () => {
		render(<Home />, { wrapper: BrowserRouter });
	});
});

test('Home renders with correct images and links', async () => {
	const avengers = screen.getByAltText('Avengers: Endgame');
	expect(avengers).toBeInTheDocument();
	expect(avengers.closest('a')).toHaveAttribute('href', '/movies');

	const got = screen.getByAltText('Game of Thrones');
	expect(got).toBeInTheDocument();
	expect(got.closest('a')).toHaveAttribute('href', '/series');
});
