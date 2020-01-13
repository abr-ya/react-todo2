import React from 'react';
import {ITodo} from '../../interfaces';

// или interface
type TodoListProps = {
    data: ITodo[],
    onToggleDone(id: number): void,
    onRemove(e: React.MouseEvent, id: number): void,
}

const TodoList: React.FC<TodoListProps> = ({data, onRemove, onToggleDone}) => {
    if (data.length === 0) {
        return (<p className="center">планов нет</p>)
    }
    return (
        <ul>
            {data.map(item => {
                const classes = ['todo-item'];
                if (item.done) classes.push('done');

                return (
                    <li className={classes.join(' ')} key={item.id}>
                        <label>
                            <input type="checkbox" checked={item.done} onChange={() => onToggleDone(item.id)} />
                            <span>{item.text}</span>
                            <i className="material-icons red-text" onClick={(e) => onRemove(e, item.id)} >
                                delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;
