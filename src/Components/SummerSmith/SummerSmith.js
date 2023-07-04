import styles from "../RickSanchez/RickSanchez.module.css";

const SummerSmith = (props) => {
    const {member} = props;
    const id = 3;
    const name = 'Summer Smith';
    const gender = "Female";
    const species = "Human";
    const status = "Alive";
    const img = "https://rickandmortyapi.com/api/character/avatar/3.jpeg";
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
export default SummerSmith;


