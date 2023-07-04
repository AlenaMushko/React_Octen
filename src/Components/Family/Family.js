import styles from "./Family.module.css";

const Family = () => (
    <div className={styles.container}>
        <ul className={styles.list}>
            <li>
                <h2>Rick Sanchez</h2>
                <p> A man who is 47 years old. </p>
                <img className={styles.img} src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                     alt='Rick Sanchez'/>
            </li>
            <li>
                <h2>Morty Smith</h2>
                <p> A man who is 9 years old. </p>
                <img className={styles.img} src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
                     alt='Morty Smith'/>
            </li>
            <li>
                <h2>Summer Smith</h2>
                <p> A woman who is 17 years old. </p>
                <img className={styles.img} src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
                     alt='Summer Smith'/>
            </li>
            <li>
                <h2>Beth Smith</h2>
                <p> A woman who is 37 years old. </p>
                <img className={styles.img} src="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
                     alt='Beth Smith'/>
            </li>
            <li>
                <h2>Jerry Smith</h2>
                <p> A man who is 20 years old. </p>
                <img className={styles.img} src="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
                     alt='Jerry Smith'/>
            </li>
        </ul>
    </div>
);
export default Family;