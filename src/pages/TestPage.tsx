import React from 'react';
import Tree from '../components/Tree/Tree';

const TestPage: React.FC = () => {
	const data=['пункт 1', 'пункт 2', 'пункт 3', 'пункт 4'];

	return (
		<>
			<h1>Test</h1>
			<h3>Бесконечное дерево</h3>
			<Tree data={data} />
		</>
	)	
}

export default TestPage;
