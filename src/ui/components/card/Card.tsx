import './Card.styles.scss';

const MAX_LENGTH = 100;
type PropTypes = {
	title: string;
	year: number;
	description: string;
	poster: string;
};

const Card = ({ title, year, description, poster }: PropTypes) => {
	return (
		<div className="card-container">
			<div className="card-body-container">
				<h2>{title}</h2>
				<p>{year}</p>
				<p className="description">{`${description.substring(
					0,
					MAX_LENGTH,
				)}...`}</p>
			</div>
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${poster})`,
				}}
			/>
		</div>
	);
};

export default Card;
