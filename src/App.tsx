import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import TodosPage from './pages/TodosPage';
import AboutPage from './pages/AboutPage';
import TestPage from './pages/TestPage';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<Navbar />
				<Switch>
					<Route component={TodosPage} path="/" exact />
					<Route component={AboutPage} path="/about" exact />
					<Route component={TestPage} path="/test" exact />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
