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
                <RickSanchez member={member}/>
                <MortySmith member={member}/>
                <SummerSmith member={member}/>
                <BethSmith member={member}/>
                <JerrySmith member={member}/>
                <Alexander member={member}/>
            </div>
        </div>
    );
}

export default App;

