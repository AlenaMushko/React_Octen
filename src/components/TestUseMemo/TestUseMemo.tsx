import React, {Dispatch, memo, SetStateAction, useCallback, useMemo} from "react";

import {useToggle} from "../../hooks";
import styles from "./TestUseMemo.module.css";

interface IProps{
    data:number,
    background:boolean,
    setBackground:Dispatch<SetStateAction<boolean>>,
}

export const TestUseMemo:React.FC<IProps> = memo(function TestUseMemo({data, background, setBackground}) {
    console.log('TestUseMemo')

// Створити в середині TestUseMemo функцію, з "важкою" логікою (наприклад великий цикл).
// та мемомізувати її за допомоги useMemo якщо data змінюється

    // const memoCalc =(num) => {
    //     let result = [];
    //     for (let i = 0; i < 100; i++) {
    //         result.push(((i + num) / (num * 2)).toFixed(2));
    //     }
    //     return result;
    // };

    // Зробити те саме, але з використанням useCallback
    const memoCalc = useCallback((num:number) => {
        let result = [];
        for (let i = 0; i < 100; i++) {
            result.push(((i + num) / (num * 2)).toFixed(2));
        }
        return result;
    }, []);

    const memoFunction = useMemo(() => memoCalc(data), [data, memoCalc]);

    const [newBG, toggleBG] = useToggle(background);
    const handleToggle = () => {
        toggleBG();
        setBackground(!newBG)
    }

    return (
        <section className={styles.section}>
            <button onClick={handleToggle} className={styles.btn}>setBackground</button>
            <h3>Memo result</h3>
            <ul>
                {data && memoFunction.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
})


