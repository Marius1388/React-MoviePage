import './Card.styles.scss';

type PropTypes = {
	title: string;
	year: number;
	description: string;
	poster: string;
};

const Card = ({ title, year, description, poster }: PropTypes) => {
	return (
		<div className="card-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${poster})`,
				}}
			/>
			<div className="card-body-container">
				<h2>{title}</h2>
				<p>{year}</p>

				<p className="description">{description}</p>
			</div>
		</div>
	);
};

export default Card;
