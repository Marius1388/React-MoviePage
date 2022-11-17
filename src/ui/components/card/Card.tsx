import './Card.styles.scss';

const MAX_LENGTH = 100;

const Card = ({ title, year, description, poster }) => {
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
				<p className="description">{`${description.substring(
					0,
					MAX_LENGTH,
				)}...`}</p>
			</div>
		</div>
	);
};

export default Card;
