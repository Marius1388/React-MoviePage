import { useEffect, useState } from 'react';
import './Home.styles.scss';
import clapper from '../../../assets/icon/clapperboard.svg';
import tv from '../../../assets/icon/tv.svg';
import { getHomePageResults } from '../../../services/DataService';
import { Link } from 'react-router-dom';

export function Home() {
	let [data, setData] = useState<any[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const res: any[] = await getHomePageResults();
			setData(res);
		};
		fetchData();
	}, []);

	return (
		<div className="home">
			{data.map((obj, index) => {
				return (
					<div key={index} className="poster">
						<img src={obj.images.posterArt.url} alt={obj.title} />
						{obj.programType === 'movies' ? (
							<Link className="banner" to="/movies">
								<img width={20} src={clapper} alt="clapper" />
								<p>Movies</p>
							</Link>
						) : (
							<Link className="banner" to="/series">
								<img width={20} src={tv} alt="tv" />
								<p>Series</p>
							</Link>
						)}
					</div>
				);
			})}
		</div>
	);
}
