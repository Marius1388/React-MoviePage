import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/deadful.svg';
import clapper from '../../../assets/icon/clapperboard.svg';
import tv from '../../../assets/icon/tv.svg';
import app from '../../../assets/button/app-store.svg';
import google from '../../../assets/button/google-play.svg';
import './Header.styles.scss';

export function Header() {
	return (
		<>
			<header className="header">
				<NavLink className="logo-container" to="/">
					<img src={logo} alt="dreadful Tomatoes logo" />
				</NavLink>

				<div className="nav-links-container">
					<NavLink
						className="nav-link"
						to="/movies"
						style={({ isActive }) => {
							return { backgroundColor: isActive ? 'red' : 'black' };
						}}>
						<img
							width={40}
							src={clapper}
							className="logo-container"
							alt="clapper"
						/>
						Movies
					</NavLink>
					<NavLink
						className="nav-link"
						to="/series"
						style={({ isActive }) => {
							return { backgroundColor: isActive ? 'red' : 'black' };
						}}>
						<img
							width={40}
							src={tv}
							className="logo-container"
							alt="tv"
						/>
						Series
					</NavLink>
				</div>
			</header>

			<Outlet />

			<footer className="footer">
				<NavLink className="logo-container" to="/">
					<img src={logo} alt="dreadful Tomatoes logo" />
				</NavLink>
				<div className="buttons-container">
					<img
						width={150}
						src={app}
						className="button-container"
						alt="clapper"
					/>
					<img
						width={150}
						src={google}
						className="button-container"
						alt="clapper"
					/>
				</div>
				<p>© Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>
			</footer>
		</>
	);
}
