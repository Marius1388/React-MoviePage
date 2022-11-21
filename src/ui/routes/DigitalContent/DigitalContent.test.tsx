import { render, act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DigitalContentComponent } from './DigitalContent';
import { ProgramType } from '../../../types/types';

jest.mock('../../../services/DataService.ts');

describe('Movies Page', () => {
	beforeEach(async () => {
		await act(async () => {
			render(<DigitalContentComponent programType={ProgramType.movies} />);
		});
	});
	test('Page Header, 10 Movie Cards and Pagination', () => {
		const cardList = screen.getAllByRole('heading');
		expect(cardList.length).toBe(11);
		const header = screen.getByText('Popular Movies');
		expect(header).toBeInTheDocument();
		expect(
			screen.getByAltText('increase navigation page'),
		).toBeInTheDocument();
		expect(
			screen.getByAltText('decrease navigation page'),
		).toBeInTheDocument();
	});
	test('Pagination should change visible content', async () => {
		//American History X is present on the page 1
		expect(screen.getByText('American History X')).toBeInTheDocument();
		//Going to the next page will remove American History X from the page
		const nextPageButton = screen.getByAltText('increase navigation page');
		await act(async () => {
			await userEvent.click(nextPageButton);
		});
		expect(screen.queryByText('American History X')).not.toBeInTheDocument();
		//Going back to the first page will make American History X visible again
		const prevPageButton = screen.getByAltText('decrease navigation page');
		await act(async () => {
			await userEvent.click(prevPageButton);
		});
		expect(screen.getByText('American History X')).toBeInTheDocument();
	});
	test('Filtering by text', async () => {
		//Typing "sca" should make the Scarface visible
		expect(screen.queryByText('Scarface')).not.toBeInTheDocument();
		const textInput = screen.getByPlaceholderText('Search by Title...');
		await userEvent.type(textInput, 'sca');
		expect(screen.getByText('Scarface')).toBeVisible();
	});
	test('Filtering by year', async () => {
		//Typing "2017" should make 2 movies visible
		expect(
			screen.queryByText('No Country for Old Men'),
		).not.toBeInTheDocument();
		const yearInput = screen.getByPlaceholderText(
			'Search by Release Year...',
		);
		await userEvent.type(yearInput, '2007');
		expect(
			screen.queryByText("Pirates of the Caribbean: At World's End"),
		).toBeInTheDocument();
		expect(screen.queryByText('No Country for Old Men')).toBeInTheDocument();
	});
});

describe('Series Page', () => {
	beforeEach(async () => {
		await act(async () => {
			render(<DigitalContentComponent programType={ProgramType.series} />);
		});
	});
	test('Page Header, 10 Series Cards and Pagination', () => {
		const cardList = screen.getAllByRole('heading');
		expect(cardList.length).toBe(11);
		const header = screen.getByText('Popular Series');
		expect(header).toBeInTheDocument();
		expect(
			screen.getByAltText('increase navigation page'),
		).toBeInTheDocument();
		expect(
			screen.getByAltText('decrease navigation page'),
		).toBeInTheDocument();
	});
	test('Pagination should change visible content', async () => {
		//Breaking Bad is present on the page 1
		expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
		//Going to the next page will remove Breaking Bad from the page
		const nextPageButton = screen.getByAltText('increase navigation page');
		await act(async () => {
			await userEvent.click(nextPageButton);
		});
		expect(screen.queryByText('Breaking Bad')).not.toBeInTheDocument();
		//Going back to the first page will make Breaking Bad visible again
		const prevPageButton = screen.getByAltText('decrease navigation page');
		await act(async () => {
			await userEvent.click(prevPageButton);
		});
		expect(screen.getByText('Breaking Bad')).toBeInTheDocument();
	});
	test('Filtering by text', async () => {
		//Typing "sons" should make the Sons of Anarchy and The Simpsons visible
		expect(screen.queryByText('Sons of Anarchy')).not.toBeInTheDocument();
		expect(screen.queryByText('The Simpsons')).not.toBeInTheDocument();
		const textInput = screen.getByPlaceholderText('Search by Title...');
		await userEvent.type(textInput, 'sons');
		expect(screen.getByText('Sons of Anarchy')).toBeVisible();
		expect(screen.getByText('The Simpsons')).toBeVisible();
	});
	test('Filtering by year', async () => {
		//Typing "2005" should make "Bones" visible
		expect(screen.queryByText('Bones')).not.toBeInTheDocument();
		const yearInput = screen.getByPlaceholderText(
			'Search by Release Year...',
		);
		await userEvent.type(yearInput, '2005');
		expect(screen.queryByText('Bones')).toBeInTheDocument();
	});
});
