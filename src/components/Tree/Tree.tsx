import React from 'react';
import Folder from './Folder';


interface ITreeProps {
	data: string[],
    //onToggleDone(id: number): void,
    //onRemove(e: React.MouseEvent, id: number): void,
}

const Tree: React.FC<ITreeProps> = ({data}) => {
	console.log(data);

	const items = data.map((item, index) => {
		//console.log(index);
		return (
			<li key={index}>
				<Folder data={data} title={item} />
			</li>
		);
	})

	return (
		<ul style={{marginLeft: '20px',}}>
			{items}
		</ul>
	)
}

export default Tree;
