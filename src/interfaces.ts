export interface ITodo {
	text: string,
	id: number,
	done: boolean,
}

export interface ITodoListProps {
    data: ITodo[],
    onToggleDone(id: number): void,
    onRemove(e: React.MouseEvent, id: number): void,
}

export interface ITodoFormProps {
    onAdd(text: string): void;
}
