import styles from "../RickSanchez/RickSanchez.module.css";

const MortySmith = (props) => {
    const {member} = props;
    const id = 2;
    const name = 'Morty Smith';
    const gender = "Male";
    const species = "Human";
    const status = "Alive";
    const img = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";
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
export default MortySmith;