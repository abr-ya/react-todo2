import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';

const App: React.FC = () => {
	const [data, setData] = useState([]);

	const addHandler = (text: string) => {
		console.log('Add', text);
	}

	return (
		<>
			<div className="container">
				<Navbar />
				<h1>Test</h1>
				<TodoForm onAdd={addHandler} />
			</div>
		</>
	);
}

export default App;
