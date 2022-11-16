import { Outlet, Link } from 'react-router-dom';
import logo from '../../../assets/logo/deadful.svg';
import clapper from '../../../assets/icon/clapperboard.svg';
import tv from '../../../assets/icon/tv.svg';
import './Header.styles.scss';

export function Header() {
	return (
		<>
			<header className="header">
				<Link className="logo-container" to="/">
					<img
						src={logo}
						className="logo-container"
						alt="dreadful Tomatoes logo"
					/>
				</Link>

				<div className="nav-links-container">
					<Link className="nav-link" to="/movies">
						<img
							width={40}
							src={clapper}
							className="logo-container"
							alt="clapper"
						/>
						Movies
					</Link>
					<Link className="nav-link" to="/series">
						<img
							width={40}
							src={tv}
							className="logo-container"
							alt="tv"
						/>
						Series
					</Link>
				</div>
			</header>
			<Outlet />
		</>
	);
}
