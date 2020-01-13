import React, {useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import {ITodo} from './interfaces';

const App: React.FC = () => {
	const [data, setData] = useState<ITodo[]>([]); // todos

	const addHandler = (text: string) => {
		const newTodo: ITodo = {
			text: text, // title
			id: Date.now(),
			done: false, // completed
		}
		console.log('Add', text);
		//setData([...data, newTodo]); // хуже
		setData(prev => [...prev, newTodo]); // надежнее!
	}

	return (
		<>
			<div className="container">
				<Navbar />
				<h1>My To Do App 2</h1>
				<TodoForm onAdd={addHandler} />
				<TodoList todos={data} />
			</div>
		</>
	);
}

export default App;
