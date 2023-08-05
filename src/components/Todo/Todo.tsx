import React, {useState} from 'react';

import {useArray} from '../../hooks';
import styles from "../TestUseMemo/TestUseMemo.module.css";
import myStyles from './Todo.module.css';

    export const Todo:React.FC = () => {
        const { arr, add, remove } = useArray<string>(['html', 'css', 'js', 'react']);

        const [todo, setTodo] = useState('');

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && todo.trim() !== '') {
            e.preventDefault();
            add(todo);
            setTodo('');
        }
    };

    const handleAddItem = () => {
        if (todo.trim() !== '') {
            add(todo);
            setTodo('');
        }
    };

    const handleRemoveItem = (id:number) => {
        remove(id);
    };

    return (
        <section className={styles.section}>
            <input
                value={todo}
                onKeyDown={handleKeyDown}
                onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit"
                    onClick={handleAddItem}
                    className={myStyles.submitBtn}>Add Item
            </button>
            <ul>
                {arr.map((item:string, id:number) => (
                    <li key={id} className={myStyles.list}>
                        <p className={myStyles.text}>{item}</p>
                        <button className={myStyles.btn} onClick={() => handleRemoveItem(id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};
