import { Routes, Route } from 'react-router-dom';
import { Header } from './ui/routes/Header';
import { Home } from './ui/routes/Home';
import styles from './App.module.css';

function App() {
	return (
		<div className={styles.App}>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<p>movies</p>} />
					<Route path="series" element={<p>series</p>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
