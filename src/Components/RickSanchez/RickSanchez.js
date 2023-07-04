import styles from "./RickSanchez.module.css";

const RickSanchez = (props) => {
    const {member} = props;
    const id = 1;
    const name = 'Rick Sanchez';
    const gender = "Male";
    const species = "Human";
    const status = "Alive";
    const img = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
    return (
        <div className={styles.container}>
            <div className={styles.cardWrap}> {member} № {id}</div>
            <hr/>
            <h2>{name}</h2>
            <p> Gender: {gender} </p>
            <p> Species: {species} </p>
            <p> Status: {status} </p>
            <img className={styles.img} src={img} alt={name}/>
        </div>
    )
};
export default RickSanchez;
