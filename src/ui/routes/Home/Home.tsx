import { useEffect, useState } from 'react';
import './Home.styles.scss';
import clapper from '../../../assets/icon/clapperboard.svg';
import tv from '../../../assets/icon/tv.svg';
import { getHomePageResults } from '../../../services/DataService';
import { Link } from 'react-router-dom';

const avengers = require('../../../assets/posters/avengers.png');
const got = require('../../../assets/posters/GOT.png');

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
					<Link key={index} className="poster" to={`/${obj.programType}`}>
						<img
							src={obj.programType === 'movies' ? avengers : got}
							alt={obj.title}
						/>
						<div className="banner">
							<img
								width={20}
								src={obj.programType === 'movies' ? clapper : tv}
								alt={obj.programType === 'movies' ? 'clapper' : 'tv'}
							/>
							<p>{obj.programType}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
