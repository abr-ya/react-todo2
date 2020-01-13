import React from 'react';
import {ITodo} from '../../interfaces';

// или interface
type TodoListProps = {
    todos: ITodo[],
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
    
    return (
        <ul>
            {todos.map(item => {
                const classes = ['todo-item'];
                if (item.done) classes.push('done');

                return (
                    <li className={classes.join(' ')} key={item.id}>
                        <label>
                            <input type="checkbox" checked={item.done} />
                            <span>{item.text}</span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;
