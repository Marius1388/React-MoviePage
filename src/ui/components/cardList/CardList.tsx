import Card from '../card/Card';
import './CardList.styles.scss';
import { DigitalContent } from '../../../types/types';

interface CardListProps {
	movies: DigitalContent[];
}

const CardList = ({ movies }: CardListProps) => {
	return (
		<>
			<div className="cardList-container">
				{movies?.map(
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
