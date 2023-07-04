import styles from "../RickSanchez/RickSanchez.module.css";

const Alexander = (props) => {
    const {member} = props;
    const id = 6;
    const name = 'Alexander';
    const gender = "Male";
    const species = "Human";
    const status = "Dead";
    const img = "https://rickandmortyapi.com/api/character/avatar/12.jpeg";
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
export default Alexander;


