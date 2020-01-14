import React, {useState} from 'react';
import {ITodoFormProps} from '../../interfaces';

const TodoForm: React.FC<ITodoFormProps> = (props) => {
    //console.log(props);
    const [text, setText] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const KeyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            //console.log(text);
            props.onAdd(text);
            setText('');
        } 
    }    
    
    return (
        <div className="input-field">
            <input 
                type="text"
                id="title"
                placeholder="Введите название"
                onChange={changeHandler}
                onKeyPress={KeyPressHandler}
                value={text}
            />
            <label htmlFor="title" className="active">
                Введите название
            </label>
        </div>
    )
}

export default TodoForm;
