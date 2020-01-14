import React, {useState, useEffect} from 'react';
import TodoForm from '../components/TodoForm/TodoForm';
import TodoList from '../components/TodoList/TodoList';
import {ITodo} from '../interfaces';

const TodosPage: React.FC = () => {
	const [data, setData] = useState<ITodo[]>([]); // todos

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem('todoData') || '[]') as ITodo[]; // string => []
		setData(saved);
	}, [])

	useEffect(() => {
		localStorage.setItem('todoData', JSON.stringify(data));
	}, [data])

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

	const toggleDoneHandler = (id: number) => {
		setData(prev => prev.map(item => {
			if (item.id === id) item.done = !item.done;
			return item;
		}));
	}

	const removeHandler = (e: React.MouseEvent, id: number) => {
		e.preventDefault();
		const removeConfirm = window.confirm('Точно удаляем?!');
		if (removeConfirm) {
			setData(prev => prev.filter(item => item.id !== id));
		}
	}

	return (
		<>
			<h1>My To Do App 2</h1>
			<TodoForm onAdd={addHandler} />
			<TodoList data={data} onRemove={removeHandler} onToggleDone={toggleDoneHandler} />	
		</>
	);	
}

export default TodosPage;
