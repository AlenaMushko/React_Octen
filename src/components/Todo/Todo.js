import {useState} from 'react';

import {useArray} from '../../hooks';
import styles from "../TestUseMemo/TestUseMemo.module.css";
import myStyles from './Todo.module.css';

export const Todo = () => {
    const {arr, add, remove} = useArray(['html', 'css', 'js', 'react']);
    const [todo, setTodo] = useState('');

    const handleKeyDown = (e) => {
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

    const handleRemoveItem = (id) => {
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
                {arr.map((item, id) => (
                    <li key={id} className={myStyles.list}>
                        <p className={myStyles.text}>{item}</p>
                        <button className={myStyles.btn} onClick={() => handleRemoveItem(id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
    );
};
