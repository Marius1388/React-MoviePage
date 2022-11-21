import Card from '../card/Card';
import './CardList.styles.scss';
import { DigitalContent } from '../../../types/types';
import { useState } from 'react';

interface CardListProps {
	content: DigitalContent[];
}

const CardList = ({ content }: CardListProps) => {
	return (
		<>
			<div className="cardList-container">
				{content?.map(
					({ title, releaseYear, description, images }, index) => {
						return (
							<Card
								key={index}
								title={title}
								year={releaseYear}
								description={description}
								poster={images.posterArt.url}
							/>
						);
					},
				)}
			</div>
		</>
	);
};

export default CardList;
