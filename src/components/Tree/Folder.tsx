import React, {useState} from 'react';
import Tree from './Tree';

interface IFolderProps {
	data: string[],
	title: string,
    //onToggleDone(id: number): void,
    //onRemove(e: React.MouseEvent, id: number): void,
}

const Folder: React.FC<IFolderProps> = ({data, title}) => {
	console.log(data);
	const [isOpen, setIsOpen] = useState(false);

	return (<>
		<span onClick={() => setIsOpen(!isOpen)}>{title}</span>
		{
			isOpen ? <Tree data={data} /> : null
		}
	</>)
}

export default Folder;

