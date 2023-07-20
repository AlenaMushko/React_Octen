import {useEffect, useState} from 'react';

import styles from './Todos.module.css';
import {todosService} from "../../services";

export const Todos = ({setIsLoading}) => {
    const [todos, setTodos] = useState(null);

    const getAllTodos = async () => {
        setIsLoading(true);
        try {
            const {data} = await todosService.getAll();
            return data;
        } catch (err) {
            console.log(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getAllTodos()
            .then(res => setTodos(res));

    }, []);

    return (
        <section>
            <h2 className={styles.title}>Todos</h2>
            <ul>
                {todos?.map(({id, title, completed}) => (
                    <li key={id}>
                        <p style={{color: completed ? 'blue' : 'tomato'}}>
                            <b>{id}. </b>{title}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};