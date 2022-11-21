import { Routes, Route } from 'react-router-dom';
import { Header } from './ui/routes/Header';
import { Home } from './ui/routes/Home';
import styles from './App.module.css';
import { ProgramType } from './types/types';
import { DigitalContentComponent } from './ui/routes/DigitalContent/DigitalContent';

function App() {
	return (
		<div className={styles.App}>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Home />} />
					<Route
						path="movies"
						element={
							<DigitalContentComponent
								programType={ProgramType.movies}
							/>
						}
					/>
					<Route
						path="series"
						element={
							<DigitalContentComponent
								programType={ProgramType.series}
							/>
						}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
