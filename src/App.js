import {useState} from "react";

import styles from "./App.module.css";
import {TestUseMemo, Fetch, Todo} from "./components";

function App() {
    const [count, setCount] = useState(0);
    const [countSecond, setCountSecond] = useState(0);
    const [background, setBackground] = useState(false);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const decrement = () => {
        setCountSecond((prevCount) => prevCount - 1);
    };

    return (
        <main className={styles.section}>
            <ul className={styles.listBtn}>
                <li>
                    <button onClick={increment} className={styles.btn}>Increment Count</button>
                    <p>Count: {count}</p>
                </li>
                <li style={{background: background? 'lightskyblue': ''}}>
                    <button onClick={decrement} className={styles.btn}>Decrement Count</button>
                    <p>Count: {countSecond}</p>
                </li>
            </ul>

            <TestUseMemo data={count} setBackground={setBackground} background={background}/>
            <Todo/>
            <Fetch url={'users'}/>
            <Fetch url={'posts'}/>
            <Fetch url={'comments'}/>
        </main>);
}

export default App;






