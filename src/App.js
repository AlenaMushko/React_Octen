import RickSanchez from "./Components/RickSanchez/RickSanchez";
import MortySmith from "./Components/MortySmith/MortySmith";
import SummerSmith from "./Components/SummerSmith/SummerSmith";
import BethSmith from "./Components/BethSmith/BethSmith";
import JerrySmith from "./Components/JerrySmith/JerrySmith";
import Family from "./Components/Family/Family";
import Alexander from "./Components/Alexander/Alexander";
import styles from "./App.module.css";

function App() {
    const member = <h4>Family member</h4>
    return (
        <div className={styles.section}>
            <h1 className={styles.text}>Simpsons family</h1>

            <Family/>
            <div className={styles.wrapper}>
                <RickSanchez member={member}
                             id={1}
                             name={'Rick Sanchez'}
                             gender={"Male"}
                             species={"Human"}
                             status={"Alive"}
                             img={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
                />
                <MortySmith member={member}
                            id={2}
                            name={'Morty Smith'}
                            gender={"Male"}
                            species={"Human"}
                            status={"Alive"}
                            img={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
                />
                <SummerSmith member={member}
                             id={3}
                             name={'Summer Smith'}
                             gender={"Female"}
                             species={"Human"}
                             status={"Alive"}
                             img={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
                />
                <BethSmith member={member}
                           id={4}
                           name={'Beth Smith'}
                           gender={"Female"}
                           species={"Human"}
                           status={"Alive"}
                           img={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}
                />
                <JerrySmith member={member}
                            id={5}
                            name={'Jerry Smith'}
                            gender={"Male"}
                            species={"Human"}
                            status={"Alive"}
                            img={"https://rickandmortyapi.com/api/character/avatar/5.jpeg"}/>
                <Alexander member={member} id={6}
                           name={'Alexander'}
                           gender={"Female"}
                           species={"Human"}
                           status={"Dead"}
                           img={"https://rickandmortyapi.com/api/character/avatar/12.jpeg"}/>
            </div>
        </div>
    );
}

export default App;

